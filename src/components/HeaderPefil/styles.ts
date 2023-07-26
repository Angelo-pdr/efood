import styled from 'styled-components'
import { colors } from '../../styles/index'
import { ButtonContainer } from '../Button/styles'

export const HeaderBar = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.beige};
  width: 100%;
  height: 186px;
  padding: 1.25rem 0px;
  diplay: flex;
  aling-items: center;
  justify-content: end;

  @media (max-width: 850px) {
    padding: 1.25rem 0.5rem;
    height: 100%;
  }

  .container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    img {
      width: 125px;
    }

    @media (max-width: 850px) {
      width: 90%;
      text-align: center;

      img {
        width: 60%;
      }
    }
  }

  ${ButtonContainer} {
    background-color: transparent;
    font-size: 18px;

    @media (max-width: 650px) {
      font-size: 12px;
    }
  }
`

export const Title = styled.h1`
  font-size: 18px;
  @media (max-width: 850px) {
    font-size: 12px;
  }
`
