import { useRecoilState } from 'recoil';
import { quantidadeDeProdutos } from '../state/atom';

export default function Item({ id }) {
  const [quantidade, setQuantidade] = useRecoilState(quantidadeDeProdutos(id));

  return (
    <div>
      <h3>Produto {id}</h3>
      <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
      <p>Quantidade no carrinho: {quantidade}</p>
    </div>
  )
}
