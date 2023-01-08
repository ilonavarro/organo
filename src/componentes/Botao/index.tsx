import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
  texto: ReactElement | string
}

const Botao = ({ texto }: BotaoProps) => {
  return <button className='botao'>{texto}</button>
}

export default Botao
