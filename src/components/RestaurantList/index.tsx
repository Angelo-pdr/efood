import { RestaurantProps } from '../../pages/Home'
import Restaurant from '../Restaurant'
import * as S from './styles'

type Props = {
  restaurantes: RestaurantProps[]
}

const ProdutcList = ({ restaurantes }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurant restaurante={restaurante} />
          </li>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProdutcList
