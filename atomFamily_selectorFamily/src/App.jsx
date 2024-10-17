import { RecoilRoot } from 'recoil';
import  Carrinho  from './componentes/Carrinho';
import './App.css';

export default function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <h1>Geek Shop</h1>
        <Carrinho/>
      </div>
    </RecoilRoot>
  )
}
