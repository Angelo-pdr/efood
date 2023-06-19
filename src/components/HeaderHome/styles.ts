import styled from 'styled-components'
import { cores } from '../../styles/index'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  width: 100%;
  max-height: 384px;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 62px;

  @media (max-width: 840px) {
    padding: 20px 0px;
  }

  .container {
    text-align: center;
    max-width: 580px;

    img {
      width: 20%;
    }

    @media (max-width: 640px) {
      img {
        width: 20%;
      }
    }
  }
`

export const Title = styled.h1`
  margin-top: 8.7812rem;
  font-size: 36px;

  @media (max-width: 840px) {
    margin-top: 1rem;
    font-size: 20px;
  }
`
