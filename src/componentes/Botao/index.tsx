import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
  texto: ReactElement
}

const Botao = ({ texto }: BotaoProps) => {
  return <button className='botao'>{texto}</button>
}

export default Botao
