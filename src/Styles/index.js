import { createGlobalStyle } from 'styled-components'

export const theme = {
    primary: '#141414',
    secundary: '#FFFFFF',
    auxOne: '#0F0F0F',
    auxTwo: '#0A0A0A',
    headerHeignt: 80,
    searchHeight: 100,
}

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0 auto;
      overflow: hidden;
      background-color: ${theme.primary}
      font-family: "Roboto", "Helveltica Neuve", "Helveltica", Arial, sans-serif;
  }
`
