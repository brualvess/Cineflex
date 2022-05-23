import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from './Rodape';
function Chair(props) {
    let { chair, select, remove } = props

    function ChamarFuncao() {
        setSelecionado('selecionado')
        select(chair)
    }
    function Removefunction() {
        setSelecionado(false)
        remove(chair)
    }

    const [selecionado, setSelecionado] = useState(false)
    return (
        <>
            {(chair.isAvailable == true && !selecionado) ?
                <div className="assentos">
                    <div className="numeroAssentos" onClick={ChamarFuncao}>
                        {chair.name}

                    </div>
                </div>
                :
                (selecionado == 'selecionado') ?
                    <div className="assentos">
                        <div className="numeroAssentos selecionado" onClick={Removefunction}>
                            {chair.name}
                        </div>
                    </div>
                    :
                    <div className="assentos">
                        <div className="numeroAssentos indisponivel" onClick={() => alert('Esse assento não está disponível );')}>
                            {chair.name}
                        </div>
                    </div>
            }

        </>
    )
}
export default function Assentos(props) {
    let { setSucesso } = props

    const { idSessao } = useParams();
    const [sessao, setSessao] = useState({ seats: [], movie: { posterURL: "" } })

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then(resposta => setSessao(resposta.data))
    }, [])

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const [selecionados, setSelecionados] = useState([])
    function Selecionado(valor) {
        console.log(valor)
        setSelecionados([...[valor]])

    }
    function RemoveSelecionado(valor) {
        setSelecionados(selecionados.filter((value) => valor != value))
        console.log(valor)
    }

    function Dados() {
        const requisicao = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', { ids: selecionados.map(e=>e.id), name: nome, cpf: cpf })
    }
    function Chamar(){
        Dados()
        setSucesso({titulo:sessao.movie.title, data: sessao.day.date, hora: sessao.name, seats:selecionados.map(e=>e.name), name: nome, cpf: cpf })
    }


    return (
        <>
            <div className="subtitulo">
                Selecione o(s) assento(s)
            </div>
            <div className="todosAssentos">
                {sessao.seats.map((cadeiras, index) => <Chair chair={cadeiras} key={index} select={Selecionado} remove={RemoveSelecionado} />)}
            </div>
            <div className="status">
                <div className="statusname">
                    <div className="numeroAssentos selecionado"></div>
                    <div className='palavra'>Selecionado</div>
                </div>
                <div className="statusname">
                    <div className="numeroAssentos"></div>
                    <div className='palavra'>Disponível</div>
                </div>
                <div className="statusname">
                    <div className="numeroAssentos indisponivel"></div>
                    <div className='palavra'>Indisponivel</div>
                </div>

            </div>
            <Footer time={sessao.movie} />

            <form className="inputs" onSubmit={Dados}>
                <div className="informacao">Nome do comprador :</div>
                <input className="caixaInput" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} />
                <div className="informacao">CPF do comprador :</div>
                <input className="caixaInput" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
                <Link className="reserva" to='/sucesso'>
                    <button type="submit" className="reservarAssento" onClick={Chamar}>Reservar assento(s)</button>
                </Link>
            </form>


        </>
    )


}