import styled from 'styled-components'
import { colors } from '../../styles'

type InputProps = {
  maxWidth?: string
}

export const Card = styled.div`
  width: 100%;
  max-height: 100%;
  margin-bottom: 24px;
  color: ${colors.beige};
  .flex {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .buttons {
    margin-top: 24px;
  }

  .margin-bottom {
    margin-bottom: 22px;
    font-size: 14px;
    font-weight: 400px;
    line-height: 22px;
  }
`
export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 700;
`

export const InpuitGroup = styled.div<InputProps>`
  flex: auto;
  height: 100%;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: 8px;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    font-weight: 700;
    font-size: 14px;
    background-color: ${colors.beige};
    height: 32px;
    width: 100%;
    padding: 0px 8px;
    border: 1px solid ${colors.beige};

    &.error {
      border: 1px solid red;
    }
  }

  small {
    min-width: 200px;
    height: 100%;
  }
`
export const Button = styled.button`
  display: inline-block;
  border: none;
  width: 100%;
  height: 24px;
  margin-bottom: 8px;
  padding: 4px 0px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  background-color: ${colors.beige};
  color: ${colors.pink};

  &.disabled {
    opacity: 0.7;
  }
`
