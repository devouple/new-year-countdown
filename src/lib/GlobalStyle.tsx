import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: #11213D;
    margin: 0;
    color: #FFFFFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* only number, comma, bold */
  @font-face {
    font-family: 'Mitr';
    font-style: normal;
    font-weight: bold;
    src: url('fonts/Mitr/Mitr-Bold.ttf') format('truetype');
  }

  /* only alphabet, regular */
  @font-face {
    font-family: 'Lobster';
    font-style: normal;
    font-weight: regular;
    src: url('fonts/Lobster/Lobster-Regular.ttf') format('truetype');
  }

  /* only alphabet regular */
  @font-face {
    font-family: 'Yellowtail';
    font-style: normal;
    font-weight: regular;
    src: url('fonts/Yellowtail/Yellowtail-Regular.ttf') format('truetype');
  }

  /* only number, upper, regular */
  @font-face {
    font-family: 'BlackHanSans';
    font-style: normal;
    font-weight: regular;
    src: url('fonts/Black_Han_Sans/BlackHanSans-Regular.ttf') format('truetype');
  }
`
