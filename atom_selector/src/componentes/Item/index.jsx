import { useRecoilState } from 'recoil';
import { produto1, produto2 } from '../../state/atom';
import './Item.css';

export default function Item({ id }) {
  const [quantidade, setQuantidade] = useRecoilState(id === 1 ? produto1 : produto2);

  return (
    <div className='item'>
      <h3>Estampa {id}:</h3>
      <div>
        <button onClick={() => setQuantidade(quantidade > 0 ? quantidade - 1 : 0)}>-</button>
        <p>{quantidade}</p>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
      </div>
    </div>
  )
}
