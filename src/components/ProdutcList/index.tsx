import Food from '../../models/Food'
import Produtc from '../Produtc'
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
            <Produtc
              description={food.description}
              evaluation={food.evaluation}
              id={food.id}
              image={food.image}
              infos={food.infos}
              title={food.title}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutcList
