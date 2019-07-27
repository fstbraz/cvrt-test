import { Advertiser } from "./../../models/advertiser";
import * as advertiser from "../actions/advertiser";

export function reducer(
  state = [],
  action: advertiser.AdvertiserUpdatedAction
) {
  switch (action.type) {
    case advertiser.ADVERTISERUPDATED:
      return action.payload;
    default:
      return state;
  }
}
