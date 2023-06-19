import { FooterBar, Title } from './styles'
import logo from '../../asserts/images/logo.png'
import redes from '../../asserts/images/redes_sociais.png'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <img src={logo} alt="logo" />
      <img src={redes} alt="redes socias" className="redes" />
      <Title>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Title>
    </div>
  </FooterBar>
)

export default Footer
