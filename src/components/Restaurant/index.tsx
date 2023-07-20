import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'

import star from '../../asserts/images/star.png'

type Props = {
  restaurante: RestaurantProps
}

const Restaurant = ({ restaurante }: Props) => (
  <S.Card>
    <S.AreaImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <S.Infos>
        {restaurante.destacado ? (
          <>
            <Button>
              <p>Destaque da semana</p>
            </Button>
            <Button>
              <p>{restaurante.tipo}</p>
            </Button>
          </>
        ) : (
          <Button>
            <p>{restaurante.tipo}</p>
          </Button>
        )}
      </S.Infos>
    </S.AreaImg>
    <S.AreaText>
      <S.TitleList>
        <S.Title>{restaurante.titulo}</S.Title>
        <S.Value>
          <p>{restaurante.avaliacao}</p>
          <img src={star} alt="estrela" />
        </S.Value>
      </S.TitleList>
      <p>{restaurante.descricao}</p>
      <Tag type="link" to={`perfil/${restaurante.id}`}>
        Saiba mais
      </Tag>
    </S.AreaText>
  </S.Card>
)

export default Restaurant
