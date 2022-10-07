import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import ColecaoCliente from '../back-end/db/ColecaoCliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

import Layout from "../components/layout"
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'


export default function Home() {
  
  const repo : ClienteRepositorio = new ColecaoCliente

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])   
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
      
  useEffect(() => {
    repo.obeterTodos().then(setClientes)
  }, [] )
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel(`form`)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir ... ${cliente.nome}`);

  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
   ;
    
  }

  function NovoCliente () {
    setCliente(Cliente.vazio())
    setVisivel(`form`)
  }
  
  

  return (
    <div className={"flex  justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white "}>

      <Layout titulo='Cadastro simples'>
        {visivel === 'tabela'?(<>
        <div className='flex justify-end'>

          <Botao  className='mb-2 ' onClick={NovoCliente}>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
        
        </>):(
        
        <Formulario 
        cancelado={()=> setVisivel('tabela')}
        clienteMudou={salvarCliente}
        cliente={cliente}/>
        )}

      </Layout>
      
    </div>

  )
}
