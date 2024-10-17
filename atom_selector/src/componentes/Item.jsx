import { useRecoilState } from 'recoil';
import { produto1, produto2 } from '../state/atom';

export default function Item({ id }){
  const [quantidade, setQuantidade] = useRecoilState(id === 1 ? produto1 : produto2);

  return (
    <div>
      <h3>Produto {id}</h3>
      <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
      <p>Quantidade no carrinho: {quantidade}</p>
    </div>
  )
}
