import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src='/imagens/facebook.png' alt='Facebook' loading='lazy' />
            </a>
          </li>
          <li>
            <a href='twitter.com' target='_blank'>
              <img src='/imagens/twitter.png' alt='Twitter' loading='lazy' />
            </a>
          </li>
          <li>
            <a href='instagram.com' target='_blank'>
              <img src='/imagens/instagram.png' alt='Instagram' loading='lazy' />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src='/imagens/logo.png' alt='Logotipo' loading='lazy' />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}

export default Rodape
