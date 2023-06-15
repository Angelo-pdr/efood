import Food from '../../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  foods: Food[]
}

const ProdutcList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <li key={food.id}>
            <Product
              description={food.description}
              id={food.id}
              image={food.image}
              title={food.title}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutcList
