import { Outlet } from 'react-router-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
