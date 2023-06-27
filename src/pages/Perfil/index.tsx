import ProdutcList from '../../components/ProductList'
import Header from '../../components/HeaderPefil'
import Footer from '../../components/footer'

import Hero from '../../components/Hero'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RestaurantProps } from '../Home'

export type CardapioProps = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<RestaurantProps>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Header />
      <Hero restaurante={restaurante} />
      <ProdutcList restaurante={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
