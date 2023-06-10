import styled from 'styled-components'
import { cores } from '../../styles/index'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const AreaImg = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: -5px;
  img {
    width: 100%;
    height: auto;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
`

export const AreaText = styled.div`
  border: 1px solid ${cores.rosa};
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
  }
`

export const Title = styled.h1`
  font-size: 18px;
`

export const TitleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: bold;
  }

  img {
    margin-left: 8px;
  }
`
