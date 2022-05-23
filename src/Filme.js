import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios"

function Filme(props){
    let {filme} = props
    return (
        <Link className="filme" to={`/sessoes/${filme.id}`}>
            <img className="catalogo" src={filme.posterURL} />
        </Link>
    )
}

export default function Filmes(){
    const[filmes, setFilmes]=useState([])
   useEffect(()=>{
    const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
    promise.then(resposta => setFilmes([...resposta.data]))
   },[])
    return (
        <>
       <div className="subtitulo">
           Selecione o filme 
       </div>
       <div className="container">
        {filmes.map((filme,index)=> <Filme filme = {filme} key = {index}/> )}
       </div>
       </>
       
      
    )
}
