import styled from 'styled-components'
import { colors } from '../../styles/index'
import { ButtonLink } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  max-height: 398px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  color: ${colors.pink};
  background-color: ${colors.white};

  @media (max-width: 840px) {
    min-width: 100%;
    max-height: 280px;
  }

  ${ButtonContainer} {
    max-width: 121px;
    height: 26px;
    font-size: 12px;
    font-weight: 700;
    background-color: ${colors.pink};
    color: ${colors.beige};
    padding: 6px 4px;
    margin-left: 0.5rem;
  }
`
export const AreaImg = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 217px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const AreaText = styled.div`
  border: 1px solid ${colors.pink};
  border-top: none;
  width: 100%;
  height: auto;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 14px;
    text-align: justify;
    max-width: 456px;
    margin: 1rem 0px;
    @media (max-width: 840px) {
      font-size: 10px;
    }
  }

  ${ButtonLink} {
    margin: 0px;
    color: ${colors.beige};
  }
`

export const Title = styled.h1`
  font-size: 18px;
`

export const TitleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
  }

  img {
    margin-left: 8px;
  }
`
