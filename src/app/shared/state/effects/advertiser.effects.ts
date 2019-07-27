import { AdvertiserUpdatedAction } from "./../actions/advertiser";
import { AdvertiserService } from "./../../services/advertiser.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Advertiser } from "./../../models/advertiser";
import * as currency from "../actions/advertiser";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";

@Injectable()
export class AdvertiserEffects {
  @Effect()
  update$: Observable<any> = this.actions$.pipe(
    ofType(currency.ADVERTISERREQUESTED),
    switchMap(() =>
      this.advertiserService
        .getAdvertiser()
        .pipe(map(data => new AdvertiserUpdatedAction(data as Advertiser[])))
    )
  );

  constructor(
    private advertiserService: AdvertiserService,
    private actions$: Actions
  ) {}
}
