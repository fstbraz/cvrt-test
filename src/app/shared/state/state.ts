import * as fromAdvertiser from "./reducers/advertiser";

import { Advertiser } from "./../models/advertiser";

export interface State {
  advertiseres: Advertiser[];
}

export const reducers = {
  advertiseres: fromAdvertiser.reducer
};

export const getAdvertisers = (state: State) => state.advertiseres;
