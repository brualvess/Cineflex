import { Link } from 'react-router-dom';
export default function Sucesso(props){
    let {sucesso} = props
    return(
        <>
        <div className="sucesso">
            <div className="fraseSucesso">Pedido feito com sucesso!</div>
        </div>
        <div className="info">
            <div className="titleinfo">Filme e sessão</div>
            <div className="nomeF">{sucesso.titulo}</div>
            <div className="dataH">{sucesso.data} {sucesso.hora}</div>
        </div>
        <div className="info">
            <div className="titleinfo">Ingressos</div>
            {sucesso.seats.map((assento,index) => <div key ={index}className="nomeF">Assento {assento}</div>)}
            
        </div>
        <div className="info">
            <div className="titleinfo">Comprador</div>
            <div className="nomeF">{sucesso.name}</div>
            <div className="dataH">{sucesso.cpf}</div>
        </div>
        <Link className="fim" to='/'>
                   <div className="home">Voltar pra home</div>
                </Link>
        </>
    )
}