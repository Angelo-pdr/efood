import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'

import { RootState } from '../../store'
import { open } from '../../store/reduce/cart'
import logo from '../../asserts/images/logo.png'
import banner from '../../asserts/images/Vector.png'

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
