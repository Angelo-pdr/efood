import { RestaurantProps } from '../../pages/Home'
import { Banner, Container } from './styles'

type Props = {
  restaurante: RestaurantProps
}

const Hero = ({ restaurante }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <Container>
        <p>{restaurante.tipo}</p>
        <h3>{restaurante.titulo}</h3>
      </Container>
    </Banner>
  )
}

export default Hero
