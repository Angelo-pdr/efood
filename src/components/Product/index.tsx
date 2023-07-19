import { CardapioProps } from '../../pages/Home'
import Button from '../Button'
import * as S from './styles'

export type Props = {
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
  setModal: (item: CardapioProps) => void
}

const Produtc = ({ cardapio, setModal }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 145) + '...'
    }
  }

  return (
    <S.Card id={`${cardapio.id}`}>
      <img src={cardapio.foto} alt="comida" />
      <S.AreaText>
        <S.Title>{cardapio.nome}</S.Title>
        <p>{getDescricao(cardapio.descricao)}</p>
      </S.AreaText>
      <Button onClick={() => setModal(cardapio)}>
        <p>Adicionar ao carrinho</p>
      </Button>
    </S.Card>
  )
}

export default Produtc
