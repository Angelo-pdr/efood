import { HeaderBar, Title } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <img src={logo} alt="logo" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default Header
