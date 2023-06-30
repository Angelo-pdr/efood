import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 120px;
  @media (max-width: 880px) {
    padding: 2rem 0.5rem;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
