import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  height: 100dvh;
  height: 100vh;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;

export const Container = styled.div`
  width: min(100% - 60px, 1440px);
  margin: 0 auto;
`;
