import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { from, Observable, forkJoin } from "rxjs";
import { map, mergeMap, toArray, switchMap, tap } from "rxjs/operators";

import { environment } from "../../../environments/environment";

import { Advertiser } from "../models/advertiser";

@Injectable()
export class AdvertiserService {
  constructor(private http: HttpClient) {}

  getAddress(endpoint: string): Observable<any> {
    return this.http.get<any>(environment.api + endpoint);
  }

  getAdvertiser(): Observable<Advertiser[]> {
    return this.http.get<Advertiser[]>(environment.api + "/advertisers").pipe(
      switchMap(advertisers =>
        from(advertisers["hydra:member"] as Advertiser[])
      ),
      mergeMap(advertiser =>
        forkJoin(this.getAddress(advertiser.address)).pipe(
          map(data => ({
            advertiser,
            address: data[0].address,
            postcode: data[0].postcode
          }))
        )
      ),
      tap(data => (data.advertiser.address = data.address)),
      tap(data => (data.advertiser.postcode = data.postcode)),
      map(data => data.advertiser as Advertiser),
      toArray()
    );
  }
}
