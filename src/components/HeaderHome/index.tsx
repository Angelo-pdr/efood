import { HeaderBar, Title } from './styles'
import logo from '../../asserts/images/logo.png'
import banner from '../../asserts/images/Vector.png'

const HeaderHome = () => (
  <HeaderBar style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <img src={logo} alt="logo" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default HeaderHome
