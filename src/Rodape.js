
function Footer(props){
    let {imagem} = props
    return(
        <div className="rodape">
        <img src={imagem.posterURL}/>
        <div className="subtitulo">{imagem.title}</div>
    </div>
    )  
}
export default function Rodape(){
    return(
       <>
       <Footer />
       </>
    )
}