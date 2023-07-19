import * as S from './styles'
import logo from '../../asserts/images/logo.png'
import banner from '../../asserts/images/Vector.png'

const HeaderHome = () => (
  <S.HeaderBar style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <img src={logo} alt="logo" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </div>
  </S.HeaderBar>
)

export default HeaderHome
