
import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";


interface FormularioProps{
     cliente: Cliente
     clienteMudou?: (cliente: Cliente) => void
     cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [Idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return (
        <div>{id ? (
            <Entrada somenteLeitura texto="codigo" valor={id} className="mb-4" />
        ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-4" />

            <Entrada
                texto="Idade"
                tipo="number"
                valor={Idade}
                valorMudou={setIdade} />
                <div className="flex justify-end mt-7">
                  
                    <Botao className={`bg-purple-400
         text-white px-3 py-2 rounded-md  hover:bg-green-500 mr-2`}  onClick={() => props.clienteMudou?.(new Cliente(nome, +Idade,id))}>
            {id ? 'Alterar' : 'Salvar'}
         </Botao>
            <Botao onClick={props.cancelado} className={`bg-purple-400
         text-white px-3 py-2 rounded-md  hover:bg-red-700`}>
           Cancelar
         </Botao>
                </div>
        </div>
    )
}