import { useRecoilValue } from 'recoil';
import { totalItemsSelector } from '../state/selector';
import Item from './Item';

export default function Carrinho() {
  const totalItems = useRecoilValue(totalItemsSelector);

  return (
    <div>
      <h2>Carrinho</h2>
      <Item id={1} />
      <Item id={2} />
      <h3>Total de itens no carrinho: {totalItems}</h3>
    </div>
  )
}