import { atom } from 'recoil';

export const productQuantitiesState = atom({
    key: 'productQuantitiesState',
    default: {
        1: 0,
        2: 0
    },
})