import styled from 'styled-components'

export const HeaderBar = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 384px;
  height: 100%;
  padding: 40px 0;

  @media (max-width: 840px) {
    padding: 20px 0px;
  }

  .container {
    text-align: center;
    max-width: 580px;

    img {
      width: 20%;
    }

    @media (max-width: 640px) {
      img {
        width: 20%;
      }
    }
  }
`

export const Title = styled.h1`
  margin-top: 138.5px;
  font-size: 36px;

  @media (max-width: 840px) {
    margin-top: 1rem;
    font-size: 1rem;
  }
`
