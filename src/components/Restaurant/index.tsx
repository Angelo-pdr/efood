import {
  Card,
  Title,
  TitleList,
  Value,
  AreaImg,
  AreaText,
  Infos
} from './styles'
import star from '../../asserts/images/star.png'
import Tag from '../Tag'
import { RestaurantProps } from '../../pages/Home'
import Button from '../Button'

type Props = {
  restaurante: RestaurantProps
}

const Restaurant = ({ restaurante }: Props) => (
  <Card>
    <AreaImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <Infos>
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
      </Infos>
    </AreaImg>
    <AreaText>
      <TitleList>
        <Title>{restaurante.titulo}</Title>
        <Value>
          <p>{restaurante.avaliacao}</p>
          <img src={star} alt="estrela" />
        </Value>
      </TitleList>
      <p>{restaurante.descricao}</p>
      <Tag type="link" to={`perfil/${restaurante.id}`}>
        Saiba mais
      </Tag>
    </AreaText>
  </Card>
)

export default Restaurant
