import styled from 'styled-components'
import { cores } from '../../styles/index'

export const Card = styled.div`
  width: 100%;
  max-height: 338px;
  height: 100%;
  font-size: 14px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${cores.rosa};
  color: ${cores.branca};

  img {
    width: 100%;
    height: 167px;
    display: block;
  }

  @media (max-width: 840px) {
    min-width: 100%;
  }
`

export const AreaText = styled.div`
  width: 100%;
  height: 120px;

  p {
    font-weight: 400;
    padding: 8px 0px;
    font-size: 14px;
  }
`

export const Title = styled.h1`
  padding-top: 8px;
  font-size: 18px;
`

export const Button = styled.button`
  display: block;
  border: none;
  width: 100%;
  padding: 4px 0px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: ${cores.branca};
  color: ${cores.rosa};
`
