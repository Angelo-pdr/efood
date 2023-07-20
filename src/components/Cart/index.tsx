import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'
import Checkout from '../Checkout'

import { RootState } from '../../store'
import { formataPreco } from '../ProductList'
import { close, remover } from '../../store/reduce/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const [isOpened, setIsOpened] = useState(false)
  const dispatch = useDispatch()

  const getTotalPrices = () => {
    const total = items.reduce((acumlador, valorAtual) => {
      return (acumlador += valorAtual.preco)
    }, 0)
    const priceFormat = formataPreco(total)
    setTotalprice(priceFormat)
  }

  useEffect(() => {
    getTotalPrices()
  }, [items])

  const closeCart = () => {
    dispatch(close())
  }
  const [totalprice, setTotalprice] = useState('')

  const removerCart = (id: number) => {
    dispatch(remover(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isOpened ? (
          <Checkout price={totalprice} open={setIsOpened} />
        ) : (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{formataPreco(item.preco)}</p>
                      </div>
                      <button onClick={() => removerCart(item.id)} />
                    </S.CartItem>
                  ))}
                </ul>
                <S.TextLine>
                  <p>Valor total</p>
                  <p>{totalprice}</p>
                </S.TextLine>
                <Button onClick={() => setIsOpened(true)}>
                  <p>Continuar com a entrega</p>
                </Button>
              </>
            ) : (
              <p className="empyt-text">
                O carrinho está vazio, adicione pelo menos um pedido para
                continuar com a compra
              </p>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
