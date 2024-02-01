import { Outlet } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { BrewProvider } from '../../../context/BrewContext';

function DefaultLayout() {
  return (
    <>
      <BrewProvider>
        <Header />

        <Outlet />

        <Footer />
      </BrewProvider>
    </>
  );
}

export default DefaultLayout;
