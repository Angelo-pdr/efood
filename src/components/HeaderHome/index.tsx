import * as S from './styles'
import logo from '../../asserts/images/logo.png'
import banner from '../../asserts/images/Vector.png'
import { Link } from 'react-router-dom'

const HeaderHome = () => (
  <S.HeaderBar style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </div>
  </S.HeaderBar>
)

export default HeaderHome
