import { HeaderBar, Title } from './styles'
import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => (
  <HeaderBar>
    <div className="container">
      <Title>Restaurantes</Title>
      <img src={logo} alt="logo" />
      <Title>0 produto(s) no carrinho</Title>
    </div>
  </HeaderBar>
)

export default HeaderPerfil
