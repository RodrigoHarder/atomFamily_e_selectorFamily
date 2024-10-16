import { selectorFamily } from "recoil";
import { productQuantityState } from "./atom";

export const totalItemsSelector = selectorFamily({
    key: 'totalItemsSelector',
    get: (productIds) => ({ get }) => {
      return productIds.reduce((total, id) => total + get(productQuantityState(id)), 0);
    },
  });