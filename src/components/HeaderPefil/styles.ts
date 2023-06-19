import styled from 'styled-components'
import { cores } from '../../styles/index'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  width: 100%;
  max-height: 186px;
  height: 100%;
  padding: 1.25rem 0px;

  @media (max-width: 850px) {
    padding: 1.25rem 0.5rem;
  }

  .container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 15%;
    }

    @media (max-width: 850px) {
      width: 90%;
      text-align: center;
    }
  }
`

export const Title = styled.h1`
  font-size: 18px;
  @media (max-width: 850px) {
    font-size: 12px;
  }
`
