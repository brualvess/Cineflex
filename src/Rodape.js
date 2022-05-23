
export default function Footer(props){
    let {time} = props
    return(
        <div className="rodape">
        <img className="imgFooter" src={time.posterURL}/>
        <div className="subtituloFooter">{time.title}</div>
    </div>
    )  
}
