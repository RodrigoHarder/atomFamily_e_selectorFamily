import { useRecoilValue } from 'recoil';
import { totalDeItens } from '../../state/selector';
import Item from '../Item';
import './Carrinho.css';

export default function   Carrinho() {
  const idProdutos = [1, 2];
  const total = useRecoilValue(totalDeItens(idProdutos));

  return (
    <div className='carrinho'>
      <h2>Carrinho</h2>
      {idProdutos.map((id) => (
        <Item key={id} id={id} />
      ))}
      <h3>Itens no carrinho: {total}</h3>
    </div>
  )
}
