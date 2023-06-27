import { CardapioProps } from '../../pages/Perfil'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  restaurante: CardapioProps[]
}

const ProdutcList = ({ restaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurante.map((restaurante) => (
          <li key={restaurante.id}>
            <Product cardapio={restaurante} />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutcList
