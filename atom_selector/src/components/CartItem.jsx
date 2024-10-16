import { useRecoilState } from "recoil";
import { productQuantitiesState } from "../state/atom";

export default function CartItem({ id, name }) {
  const [quantities, setQuantities] = useRecoilState(productQuantitiesState);

  const addProduct = () => {
    setQuantities({
      ...quantities,
      [id]: quantities[id] + 1,
    });
  };

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={addProduct}>Adicionar</button>
      <p>Quantidade no carrinho: {quantities[id]}</p>
    </div>
  )
}