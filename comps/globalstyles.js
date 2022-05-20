import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Be Vietnam Pro', sans-serif;
    url:  url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap')
  }
  ::root {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Be Vietnam Pro', sans-serif;
    transition: all 0.50s linear;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Be Vietnam Pro', sans-serif;
    // transition: all 0.50s linear;
  }
  `