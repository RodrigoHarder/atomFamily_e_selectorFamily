import { selectorFamily } from 'recoil';
import { quantidadeDeProdutos } from './atom';

export const totalDeItens = selectorFamily({
  key: 'totalDeItens',
  get: (idDosProdutos) => ({ get }) => {
    return idDosProdutos.reduce((total, id) => total + get(quantidadeDeProdutos(id)), 0);
  }
})
