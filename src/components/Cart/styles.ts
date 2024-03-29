import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../asserts/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }

  .empyt-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
    text-align: center;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    width: 100%;
    background-color: ${colors.beige};
  }
`

export const TextLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.beige};
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 40px;
`
export const CartItem = styled.div`
  width: 100%;
  max-height: 100px;
  height: 100%;
  padding: 8px 8px 12px 8px;
  background-color: ${colors.beige};
  display: flex;
  position: relative;
  margin-bottom: 1rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 1rem;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    background-color: transparent;
  }
`
