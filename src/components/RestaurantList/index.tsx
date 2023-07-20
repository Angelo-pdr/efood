import * as S from './styles'
import Restaurant from '../Restaurant'
import Loader from '../Loader'

type Props = {
  restaurantes: RestaurantProps[]
  isLoading: boolean
}

const ProdutcList = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
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
}

export default ProdutcList
