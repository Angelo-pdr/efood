import {
  Card,
  Title,
  TitleList,
  Value,
  AreaImg,
  AreaText,
  Infos
} from './styles'
import star from '../../assets/images/star.png'
import Tag from '../Tag'
import Food from '../../models/Restaurant'

const Restaurant = ({
  description,
  evaluation,
  id,
  image,
  infos,
  title
}: Food) => (
  <Card id={`${id}`}>
    <AreaImg>
      <img src={image} alt="comida" />
      <Infos>
        {infos.map((info) => (
          <Tag type="tag" key={info}>
            {info}
          </Tag>
        ))}
      </Infos>
    </AreaImg>
    <AreaText>
      <TitleList>
        <Title>{title}</Title>
        <Value>
          <p>{evaluation}</p>
          <img src={star} alt="estrela" />
        </Value>
      </TitleList>
      <p>{description}</p>
      <Tag type="link" to="/perfil">
        Saiba mais
      </Tag>
    </AreaText>
  </Card>
)

export default Restaurant
