import { createGlobalStyle } from 'styled-components'

export const colors = {
  bg: '#FFF8F2',
  white: '#FFF',
  pink: '#E66767',
  beige: '#ffebd9'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${colors.bg};
    color: ${colors.pink};
    max-width: 100%;
    height: 100vh;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
