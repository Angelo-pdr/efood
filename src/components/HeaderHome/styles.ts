import styled from 'styled-components'
import { cores } from '../../styles/index'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  width: 100%;
  max-height: 384px;
  height: 100%;
  padding: 1.25rem 0px;

  .container {
    text-align: center;
    max-width: 580px;
  }
`

export const Title = styled.h1`
  margin-top: 8.7812rem;
  font-size: 36px;
`
