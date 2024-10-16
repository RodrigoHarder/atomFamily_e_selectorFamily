import { selector } from 'recoil';
import { productQuantitiesState } from '../state/atom';

export const totalItemsSelector = selector({
    key: 'totalItemsSelector',
    get: ({ get }) => {
        const quantities = get(productQuantitiesState);
        return Object.values(quantities).reduce((total, qty) => total + qty, 0);
    },
})