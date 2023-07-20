import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/HeaderHome'
import Footer from '../../components/footer'
import { useGetFeatureRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurant, isLoading } = useGetFeatureRestaurantQuery()

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <RestaurantList restaurantes={restaurant} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Home
