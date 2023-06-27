import { Card, Title, AreaText, Button } from './styles'

export type Props = {
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Produtc = ({ cardapio }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 145) + '...'
    }
  }

  return (
    <Card id={`${cardapio.id}`}>
      <img src={cardapio.foto} alt="comida" />
      <AreaText>
        <Title>{cardapio.nome}</Title>
        <p>{getDescricao(cardapio.descricao)}</p>
      </AreaText>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Produtc
