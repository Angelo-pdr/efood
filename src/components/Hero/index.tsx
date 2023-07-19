import { RestaurantProps } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurante: RestaurantProps
}

const Hero = ({ restaurante }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <S.Container>
        <p>{restaurante.tipo}</p>
        <h3>{restaurante.titulo}</h3>
      </S.Container>
    </S.Banner>
  )
}

export default Hero
