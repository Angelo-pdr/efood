declare type CardapioProps = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type RestaurantProps = {
  foto: string | undefined
  nome: string | undefined
  preco: number
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioProps[]
}

declare type ButtonProps = {
  children: JSX.Element
  onClick?: () => void
  type?: 'button' | 'submit'
}
