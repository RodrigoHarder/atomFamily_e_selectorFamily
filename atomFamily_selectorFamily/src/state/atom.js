import { atomFamily } from 'recoil';

export const productQuantityState = atomFamily({
  key: 'productQuantityState',
  default: 0
});