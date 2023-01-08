import './Campo.css'

interface CampoProps {
  type?: 'text' | 'color' | 'date'
  label: string
  placeholder: string
  valor?: string
  aoAlterado: (valor: string) => void
  obrigatorio?: boolean
}

const Campo = ({
  type = 'text',
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false
}: CampoProps) => {
  return (
    <div className={type === 'text' ? 'campo' : 'campo campo-color'}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Campo
