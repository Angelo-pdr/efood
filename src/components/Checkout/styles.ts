import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputProps = {
  maxWidth?: string
}

export const Card = styled.div`
  width: 100%;
  max-height: 100%;
  margin-bottom: 24px;

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .buttons {
    margin-top: 24px;
  }

  ${ButtonContainer} {
    margin-bottom: 8px;
    height: 24px;
  }
`
export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.beige};
`

export const InpuitGroup = styled.div<InputProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: 8px;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    color: ${colors.beige};
  }

  input {
    font-weight: 700;
    font-size: 14px;
    background-color: ${colors.beige};
    height: 32px;
    width: 100%;
    padding: 0px 8px;
    border: 1px solid ${colors.beige};
  }
`
