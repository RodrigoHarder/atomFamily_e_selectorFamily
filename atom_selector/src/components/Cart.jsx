import { useRecoilValue } from "recoil";
import CartItem from "./CartItem";
import { totalItemsSelector } from "../state/selector";
export default function Cart() {
    const totalItems = useRecoilValue(totalItemsSelector);
    const productIds = [1, 2];

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            {productIds.map((id) => (
                <CartItem key={id} id={id} name={`Produto ${id}`} />
            ))}

            <h3>Total de itens no carrinho: {totalItems}</h3>
        </div>
    );
}