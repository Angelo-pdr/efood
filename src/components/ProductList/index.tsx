import { useState } from 'react'
import { CardapioProps } from '../../pages/Home'
import Product from '../Product'
import { AreaText, Container, List, Modal, ModalContent } from './styles'
import Button from '../Button'
import close from '../../asserts/images/close.png'
import { useDispatch } from 'react-redux'
import { open, add } from '../../store/reduce/cart'

type Props = {
  restaurantes: CardapioProps[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProdutcList = ({ restaurantes }: Props) => {
  const [modal, setModal] = useState<CardapioProps>()
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(modal!))
    setModal(undefined)
    dispatch(open())
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurantes.map((restaurante) => (
              <li key={restaurante.id}>
                <Product setModal={setModal} cardapio={restaurante} />
              </li>
            ))}
          </List>
        </div>
      </Container>
      {modal && (
        <Modal>
          <ModalContent>
            <img src={close} alt="fechar" onClick={() => setModal(undefined)} />
            <div className="container">
              <img src={modal.foto} alt={modal.nome} />
              <AreaText>
                <h2>{modal.nome}</h2>
                <p className="descricao">{modal.descricao}</p>
                <p>Serve: {modal.porcao}</p>
                <Button onClick={addToCart}>
                  <p>Adicionar ao carrinho - {formataPreco(modal.preco)}</p>
                </Button>
              </AreaText>
            </div>
          </ModalContent>
          <div className="overlay"></div>
        </Modal>
      )}
    </>
  )
}

export default ProdutcList
