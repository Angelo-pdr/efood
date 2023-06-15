import styled from 'styled-components'
import { cores } from '../../styles/index'

export const Card = styled.div`
  max-width: 320pxpx;
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
`
export const AreaImg = styled.div`
  max-width: 100%;
  max-height: 100%;
  img {
    width: 100%;
    height: auto;
  }
`

export const AreaText = styled.div`
  border-top: none;
  width: 100%;
  height: auto;

  p {
    padding: 8px 0px;
    font-size: 14px;
    text-align: justify;
  }
`

export const Title = styled.h1`
  padding-top: 8px;
  font-size: 18px;
`

export const Button = styled.button`
  border: none;
  width: 100%;
  padding: 4px 0px;
  font-weight: bold;
  font-size: 14px;
  text-alignÇ center;
  background-color: ${cores.branca};
  color:  ${cores.rosa};
`
