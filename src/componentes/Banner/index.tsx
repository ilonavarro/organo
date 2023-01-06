import './Banner.css'

interface BannerProps {
  enderecoImagem: string
  textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
  return (
    <header className='cabecalho'>
      {/* <img src='/imagens/banner.png' alt='Logo do Organo' /> */}
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  )
}

export default Banner
