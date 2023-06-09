import styled from 'styled-components'
import { cores } from '../../styles/index'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  width: 100%;
  height: 384px;
  padding-top: 1.25rem;
  margin-bottom: 2rem;

  .container {
    text-align: center;
    max-width: 580px;
  }
`

export const Title = styled.h1`
  margin-top: 8.7812rem;
  font-size: 36px;
`
