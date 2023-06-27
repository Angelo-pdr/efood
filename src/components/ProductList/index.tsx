import { useState } from 'react'
import { CardapioProps } from '../../pages/Perfil'
import Product from '../Product'
import { AreaText, Container, List, Modal, ModalContent } from './styles'
import Button from '../Button'
import close from '../../asserts/images/close.png'

type Props = {
  restaurante: CardapioProps[]
}

const ProdutcList = ({ restaurante }: Props) => {
  const [modal, setModal] = useState<CardapioProps>()
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurante.map((restaurante) => (
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
                <Button>
                  <p>Adicionar ao carrinho - R$ {modal.preco}</p>
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
