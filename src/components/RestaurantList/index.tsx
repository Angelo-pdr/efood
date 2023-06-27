import { RestaurantProps } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurantes: RestaurantProps[]
}

const ProdutcList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurant restaurante={restaurante} />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutcList
