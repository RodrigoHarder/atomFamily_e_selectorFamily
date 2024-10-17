import { useRecoilState } from 'recoil';
import { quantidadeDeProdutos } from '../../state/atom';
import './Item.css';

export default function Item({ id }) {
  const [quantidade, setQuantidade] = useRecoilState(quantidadeDeProdutos(id));

  return (
    <div className='item'>
      <h3>Estampa {id}:</h3>
      <div>
        <button onClick={() => setQuantidade(quantidade - 1)}>-</button>
        <p>{quantidade}</p>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
      </div>
    </div>
  )
}
