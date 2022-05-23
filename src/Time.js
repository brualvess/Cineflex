import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "./Rodape";

function Times(props){
    let {days} = props
    return(
        <>
        <div className="time">
            <div className="day">{days.weekday} - {days.date}</div>
        </div>
        <div className="hora">
        {days.showtimes.map((hora, index) => <Session horario={hora} key ={index} />)}
        </div>
        </>
    )
}
function Session(props){
    let {horario} = props
    return(
        <>
        <Link className="caixinhaTime" to={`/assentos/${horario.id}`}>
        <div className="horario">{horario.name}</div> 
        </Link> 
       
        </>
    )
}

export default function Time(){
    const { idFilme } = useParams();
    const [time, setTime] = useState({days:[], posterURL:""})
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    promise.then(resposta => setTime(resposta.data))
    },[])
    return(
        < >
        <div className="subtitulo">
           Selecione o horário
       </div>
       <div className="daysAndTime">
       <div className="sessao">
       {time.days.map((sessoes,index)=> <Times days= {sessoes} key = {index}/> )}
       </div>
       </div>
       <Footer time={time} />
      </>
    )
}