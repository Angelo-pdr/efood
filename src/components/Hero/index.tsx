import { Banner, Container } from './styles'

export type Props = {
  BannerImg: string
}

const Hero = ({ BannerImg }: Props) => (
  <Banner style={{ backgroundImage: `url(${BannerImg})` }}>
    <Container>
      <p>Italiana</p>
      <h3>La Dolce Vita Trattoria</h3>
    </Container>
  </Banner>
)

export default Hero
