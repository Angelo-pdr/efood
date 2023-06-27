import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/HeaderHome'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react'

export type RestaurantProps = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantProps[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Header />
      <RestaurantList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
