import * as S from './styles'
import logo from '../../asserts/images/logo.png'
import banner from '../../asserts/images/Vector.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reduce/cart'
import Button from '../Button'
import { RootState } from '../../store'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <S.Title>Restaurantes</S.Title>
        <img src={logo} alt="logo" />
        <Button onClick={openCart}>
          <p>{items.length} produto(s) no carrinho</p>
        </Button>
      </div>
    </S.HeaderBar>
  )
}

export default HeaderPerfil
