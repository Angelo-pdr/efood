import { Card, Title, AreaImg, AreaText, Button } from './styles'
import Food from '../../models/Food'

const Produtc = ({ description, id, image, title }: Food) => (
  <Card id={`${id}`}>
    <AreaImg>
      <img src={image} alt="comida" />
    </AreaImg>
    <AreaText>
      <Title>{title}</Title>
      <p>{description}</p>
      <Button>Adicionar ao carrinho</Button>
    </AreaText>
  </Card>
)

export default Produtc
