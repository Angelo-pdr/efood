import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/HeaderHome'
import Footer from '../../components/footer'
import { useGetFeatureRestaurantQuery } from '../../services/api'

export type CardapioProps = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantProps = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioProps[]
}

const Home = () => {
  const { data: restaurant } = useGetFeatureRestaurantQuery()

  if (!restaurant) {
    return <h1>carregando</h1>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurantes={restaurant} />
      <Footer />
    </>
  )
}

export default Home
