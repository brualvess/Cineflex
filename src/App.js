import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from './Topo'
import Filmes from './Filme'
import Time from './Time'
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";
import { useState} from 'react';
export default function App(){
    
    const[sucesso, setSucesso]=useState(null)
    

    return(
        <BrowserRouter>
        <Topo />
        <Routes>
        <Route path='/' element={<Filmes />}/>
        <Route path='/sessoes/:idFilme' element={<Time />}/>
        <Route path='/assentos/:idSessao' element={<Assentos setSucesso={setSucesso}/>}/>
        <Route path='/sucesso' element={<Sucesso sucesso={sucesso}/>}/>
        </Routes>
        </BrowserRouter>
    )
   
}
