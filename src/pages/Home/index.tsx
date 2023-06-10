import ProdutcList from '../../components/ProdutcList'
import Header from '../../components/HeaderHome'
import Footer from '../../components/footer'
import Food from '../../models/Food'

import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'

const cardapio: Food[] = [
  {
    id: 1,
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!s',
    title: 'Hioki Sushi',
    image: `${sushi}`,
    evaluation: 4.9
  },
  {
    id: 2,
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: `${macarrao}`,
    evaluation: 4.6
  },
  {
    id: 3,
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: `${macarrao}`,
    evaluation: 4.6
  },
  {
    id: 4,
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: `${macarrao}`,
    evaluation: 4.6
  },
  {
    id: 5,
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: `${macarrao}`,
    evaluation: 4.6
  },
  {
    id: 6,
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: `${macarrao}`,
    evaluation: 4.6
  }
]

const Home = () => (
  <>
    <Header />
    <ProdutcList foods={cardapio} />
    <Footer />
  </>
)

export default Home
