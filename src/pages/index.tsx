import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

import Layout from "../components/layout"
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'


export default function Home() {
  const clientes = [
    new Cliente(`ana`, 33, `1`),
    new Cliente(`Paulo`, 44, `2`),
    new Cliente(`Carla`, 65, `3`),
    new Cliente(`Joao`, 23, `4`),

  ]
  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir ... ${cliente.nome}`);

  }
  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={"flex  justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white "}>

      <Layout titulo='Cadastro simples'>
        {visivel === 'tabela'?(<>
        <div className='flex justify-end'>

          <Botao  className='mb-2 ' onClick={()=> setVisivel(`form`)}>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
        
        </>):(
        
        <Formulario 
        cancelado={()=> setVisivel('tabela')}
        cliente={clientes[2]}/>
        )}

      </Layout>
      
    </div>

  )
}
