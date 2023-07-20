import ProdutcList from '../../components/ProductList'
import Header from '../../components/HeaderPefil'
import Footer from '../../components/footer'

import Hero from '../../components/Hero'
import { useParams } from 'react-router-dom'
import { useGetFeatureRevenueQuery } from '../../services/api'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

const Perfil = () => {
  const { id } = useParams()

  const { data: revenue, isLoading } = useGetFeatureRevenueQuery(id as string)

  if (!revenue) {
    return <Loader />
  }

  return (
    <>
      <Cart />
      <Header />
      <Hero restaurante={revenue} />
      <ProdutcList restaurantes={revenue.cardapio} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Perfil
