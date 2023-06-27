import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 278px;
  padding-top: 24px;
  padding-bottom: 33px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${cores.branca};

  @media (max-width: 840px) {
    padding: 1rem 0px;
    height: 160px;
  }

  @media (max-width: 640px) {
    height: 75px;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.6;
  }
`
export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 840px) {
    max-width: 400px;
  }

  @media (max-width: 540px) {
    max-width: 250px;
  }

  p {
    font-size: 32px;

    @media (max-width: 840px) {
      font-size: 1.5rem;
    }

    @media (max-width: 540px) {
      font-size: 0.8rem;
    }
  }

  h3 {
    z-index: 1;
    font-size: 32px;

    @media (max-width: 840px) {
      font-size: 1.5rem;
    }

    @media (max-width: 540px) {
      font-size: 0.8rem;
    }
  }
`
