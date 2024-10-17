import { useRecoilValue } from 'recoil';
import { totalDeItens } from '../state/selector';
import Item from './Item';

export default function   Carrinho() {
  const idProdutos = [1, 2];
  const total = useRecoilValue(totalDeItens(idProdutos));

  return (
    <div>
      <h2>Carrinho</h2>
      {idProdutos.map((id) => (
        <Item key={id} id={id} />
      ))}
      <h3>Total de itens no carrinho: {total}</h3>
    </div>
  )
}
