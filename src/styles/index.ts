import { createGlobalStyle } from 'styled-components'

export const cores = {
  bg: '#FFF8F2',
  branca: '#FFF',
  rosa: '#E66767',
  bege: '#ffebd9'
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
    background-color: ${cores.bg};
    color: ${cores.rosa};
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
