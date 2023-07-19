import styled from 'styled-components'
import { colors } from '../../styles/index'

export const FooterBar = styled.footer`
  background-color: ${colors.beige};
  width: 100%;
  max-height: 384px;
  height: 100%;
  padding: 2.5rem 0px;

  .container {
    text-align: center;
    max-width: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .redes {
      padding-top: 32.5px;
      padding-bottom: 80px;
    }
  }
`

export const Title = styled.h1`
  display: inline-block;
  font-size: 10px;
`
