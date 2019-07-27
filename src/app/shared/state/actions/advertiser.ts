import { Advertiser } from "./../../models/advertiser";
import { Action } from "@ngrx/store";

export const ADVERTISERREQUESTED = "[Advertiser] RequestedAll";
export const ADVERTISERUPDATED = "[Advertiser] UpdatedAll";

export class AdvertiserRequestedAction implements Action {
  type = ADVERTISERREQUESTED;
}

export class AdvertiserUpdatedAction implements Action {
  type = ADVERTISERUPDATED;

  constructor(public payload: Advertiser[]) {}
}
