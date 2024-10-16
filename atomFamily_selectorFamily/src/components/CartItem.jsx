import { useRecoilState } from "recoil";
import { productQuantityState } from "../state/atom";
export default function CartItem({ id, name }) {
  const [quantity, setQuantity] = useRecoilState(productQuantityState(id));

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => setQuantity(quantity + 1)}>Adicionar</button>
      <p>Quantidade no carrinho: {quantity}</p>
    </div>
  );
}