import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Footer from './Rodape';
function Chair(props) {
    let { chair } = props
    const [selecionado, setSelecionado] = useState(false)
    return (
        <>
            {(chair.isAvailable == true && !selecionado) ?
                <div className="assentos">
                    <div className="numeroAssentos" onClick={() => setSelecionado('selecionado')}>
                        {chair.name}

                    </div>
                </div>
                :
                (selecionado == 'selecionado') ?
                    <div className="assentos">
                        <div className="numeroAssentos selecionado" onClick={() => setSelecionado(false)}>
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
export default function Assentos() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState({ seats: [], movie: { posterURL: "" } })

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then(resposta => setSessao(resposta.data))
    }, [])
    console.log(sessao)
    return (
        <>
            <div className="subtitulo">
                Selecione o(s) assento(s)
            </div>
            <div className="todosAssentos">
                {sessao.seats.map((cadeiras, index) => <Chair chair={cadeiras} key={index} />)}
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
            <div className="inputs">
                <div className="informacao">Nome do comprador :</div>
                <input className="caixaInput" placeholder="Digite seu nome..." />
                <div className="informacao">CPF do comprador :</div>
                <input className="caixaInput" placeholder="Digite seu CPF..." />
                <div className="reserva">
                    <div className="reservarAssento">Reservar assento(s)</div>
                </div>
            </div>

        </>
    )

}