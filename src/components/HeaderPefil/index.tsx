import { HeaderBar, Title } from './styles'
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
    <HeaderBar style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Title>Restaurantes</Title>
        <img src={logo} alt="logo" />
        <Button onClick={openCart}>
          <p>{items.length} produto(s) no carrinho</p>
        </Button>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
