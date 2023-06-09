import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF8F2',
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
  }

  body{
    background-color: ${cores.branca};
    color: ${cores.rosa};
    margin-bottom: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss