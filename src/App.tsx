import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import router from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
