import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.header`
  width: 100%;
  height: 100%;
  padding-top: 56px;
  padding-bottom: 120px;
  @media (max-width: 880px) {
    padding: 2rem 0.5rem;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 810px) {
    max-height: 460px;
    padding: 1rem;
  }

  & > img {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 24px;

    @media (max-width: 810px) {
      align-items: center;
      flex-direction: column;
      row-gap: 24px;
    }

    img {
      display: block;
      max-width: 280px;
      max-height: 280px;
    }
  }
`

export const AreaText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .descricao{
    padding 1rem 0px;
    @media (max-width: 810px) {
      padding .5rem 0px;
    }
  }
  @media (max-width: 810px) {
    text-align: center;
  }
  ${ButtonContainer} {
    margin-top: 1rem;
    max-width: 218px;
    width: 100%;
    @media (max-width: 650px) {
      min-width: 100%;
    }
  }
`
