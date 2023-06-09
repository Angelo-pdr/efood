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
import food from '../../assets/images/macarrao.png'
import Tag from '../Tag'

const Produtc = () => (
  <Card>
    <AreaImg>
      <img src={food} alt="comida" />
      <Infos>
        <Tag>teste</Tag>
      </Infos>
    </AreaImg>
    <AreaText>
      <TitleList>
        <Title>Hioki Sushi</Title>
        <Value>
          <p>4.9</p>
          <img src={star} alt="estrela" />
        </Value>
      </TitleList>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </p>
      <Tag>Saiba mais</Tag>
    </AreaText>
  </Card>
)

export default Produtc
