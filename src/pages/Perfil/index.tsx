import ProdutcList from '../../components/ProductList'
import Header from '../../components/HeaderPefil'
import Footer from '../../components/footer'

import Hero from '../../components/Hero'
import { useParams } from 'react-router-dom'
import { useGetFeatureRevenueQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const { data: revenue } = useGetFeatureRevenueQuery(id as string)

  if (!revenue) {
    return <h1>carregando</h1>
  }

  return (
    <>
      <Cart />
      <Header />
      <Hero restaurante={revenue} />
      <ProdutcList restaurantes={revenue.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
