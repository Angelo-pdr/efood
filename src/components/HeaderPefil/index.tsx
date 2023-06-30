import { HeaderBar, Title } from './styles'
import logo from '../../asserts/images/logo.png'
import banner from '../../asserts/images/Vector.png'

const HeaderPerfil = () => (
  <HeaderBar style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Title>Restaurantes</Title>
      <img src={logo} alt="logo" />
      <Title>0 produto(s) no carrinho</Title>
    </div>
  </HeaderBar>
)

export default HeaderPerfil
