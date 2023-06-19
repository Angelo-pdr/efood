import ProdutcList from '../../components/ProductList'
import Header from '../../components/HeaderPefil'
import Footer from '../../components/footer'
import Food from '../../models/Food'

import pizza from '../../asserts/images/pizza.png'
import apresentacao from '../../asserts/images/banner.png'
import Hero from '../../components/Hero'

const cardapio: Food[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: `${pizza}`
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: `${pizza}`
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: `${pizza}`
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: `${pizza}`
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: `${pizza}`
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: `${pizza}`
  }
]

const Perfil = () => (
  <>
    <Header />
    <Hero BannerImg={apresentacao} />
    <ProdutcList foods={cardapio} />
    <Footer />
  </>
)

export default Perfil
