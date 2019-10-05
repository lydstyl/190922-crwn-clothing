import ShopActionTypes from './shopTypes';

export const updateCollections = collecdtionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collecdtionsMap
});
