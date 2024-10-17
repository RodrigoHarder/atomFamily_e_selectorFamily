import { RecoilRoot } from 'recoil';
import  Carrinho  from './componentes/Carrinho';

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Loja Virtual</h1>
        <Carrinho/>
      </div>
    </RecoilRoot>
  )
}
