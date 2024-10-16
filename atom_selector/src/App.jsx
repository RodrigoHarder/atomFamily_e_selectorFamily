import { RecoilRoot } from "recoil";
import Cart from "./components/Cart";

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Loja Virtual</h1>
        <Cart />
      </div>
    </RecoilRoot>
  );
}