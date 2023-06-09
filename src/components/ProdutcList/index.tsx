import Produtc from '../Produtc'
import { Container, List } from './styles'

const ProdutcList = () => (
  <Container>
    <div className="container">
      <List>
        <li>
          <Produtc />
        </li>
        <li>
          <Produtc />
        </li>
      </List>
    </div>
  </Container>
)

export default ProdutcList
