import { useRecoilValue } from 'recoil';
import { totalDeItens } from '../../state/selector';
import './Carrinho.css';
import Item from '../Item';

export default function Carrinho() {
  const total = useRecoilValue(totalDeItens);

  return (
    <div className='carrinho'>
      <h2>Carrinho</h2>
        <Item id={1} />
        <Item id={2} />
      <h3>Itens no carrinho: {total}</h3>
    </div>
  )
}