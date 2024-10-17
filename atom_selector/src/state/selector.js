import { selector } from 'recoil';
import { produto1, produto2 } from './atom';


export const totalDeItens = selector({
  key: 'totalDeItens',
  get: ({ get }) => {
    const quantidadeProduto1 = get(produto1)
    const quantidadeProduto2 = get(produto2);
    return quantidadeProduto1 + quantidadeProduto2;
  }
})
