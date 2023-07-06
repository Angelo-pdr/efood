import Button from '../Button'
import { CartContainer, CartItem, Overlay, Sidebar, TextLine } from './styles'
import pizza from '../../asserts/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reduce/cart'
import { RootState } from '../../store'

const Cart = () => {
  const { isOpen } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <button />
          </CartItem>
        </ul>
        <TextLine>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </TextLine>
        <Button>
          <p>Continuar com a entrega</p>
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
