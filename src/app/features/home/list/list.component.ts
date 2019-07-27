import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild
} from "@angular/core";
import { Observable } from "rxjs";

import { AdvertiserRequestedAction } from "./../../../shared/state/actions/advertiser";
import { Store } from "@ngrx/store";
import { AddComponent } from "./../add/add.component";

import * as fromRoot from "./../../../shared/state/state";
import { Advertiser } from "src/app/shared/models/advertiser";

@Component({
  selector: "convertr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @ViewChild(AddComponent, { static: false }) addCmp: AddComponent;
  advertisers$: Observable<Advertiser[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.advertisers$ = store.select(fromRoot.getAdvertisers);
  }

  ngOnInit() {
    this.store.dispatch(new AdvertiserRequestedAction());
  }

  onAdd() {
    this.addCmp.opened = !this.addCmp.opened;
  }
}
