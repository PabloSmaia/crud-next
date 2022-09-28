import Cliente from "../core/Cliente";
import { inconEdit, inconTrash } from "./Incones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
   const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
   
    function render() {
        return (
            <tr>
                <th className="text-left p-2">Codigo</th>
                <th className="text-left p-2">Nome</th>
                <th className="text-left p-2">Idade</th>
                { exibirAcoes ? <th className="p-2">Ações</th> : false}
            </tr>
        )
    }

    function renderAções(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
            flex justify-center items-center 
            text-purple-700 rounded-full p-2 m-1
            hover:text-green-700`}>
                    {inconEdit}
                </button>) : false}

                {props.clienteExcluido ? (
                <button onClick={() => props.clienteExcluido?.(cliente)} className={`
            flex justify-center items-center 
            text-purple-700 rounded-full p-2 m-1
            hover:text-red-600`}>
                    {inconTrash}
                </button>) : false}
            </td>
        )
    }

    function renderDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`}>
                    <td className="text-left p-2">{cliente.id}</td>
                    <td className="text-left p-2">{cliente.nome}</td>
                    <td className="text-left p-2" >{cliente.idade}</td>
                    {exibirAcoes ? renderAções(cliente) : false}
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden ">
            <thead className={`
            text-gray-50
            bg-gradient-to-r from-purple-500 to-purple-800  `}>
                {render()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}