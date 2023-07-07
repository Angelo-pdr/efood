import Button from '../Button'
import { CartContainer, CartItem, Overlay, Sidebar, TextLine } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remover } from '../../store/reduce/cart'
import { RootState } from '../../store'
import { formataPreco } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removerCart = (id: number) => {
    dispatch(remover(id))
  }

  const getTotalPrices = () => {
    return items.reduce((acumlador, valorAtual) => {
      return (acumlador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button onClick={() => removerCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <TextLine>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrices())}</p>
        </TextLine>
        <Button>
          <p>Continuar com a entrega</p>
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
