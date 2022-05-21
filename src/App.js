import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from './Topo'
import Filmes from './Filme'
import Time from './Time'
import Assentos from "./Assentos";
export default function App(){
    return(
        <BrowserRouter>
        <Topo />
        <Routes>
        <Route path='/' element={<Filmes />}/>
        <Route path='/sessoes/:idFilme' element={<Time />}/>
        <Route path='/assentos/:idSessao' element={<Assentos />}/>
        </Routes>
        </BrowserRouter>
    )
   
}
