import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import UpcomingEvents from './pages/UpcomingEvents';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const pages = {
    home: <Home></Home>,
    contact: <Contact></Contact>,
    upcoming: <UpcomingEvents></UpcomingEvents>,
  };

  return (
    <div
      id="site-wrapper"
      className={mobileMenuVisible ? 'position-fixed' : null}
    >
      <Header
        setPage={setPage}
        mobileMenuVisible={mobileMenuVisible}
        setMobileMenuVisible={setMobileMenuVisible}
      ></Header>
      {pages[page]}
      <Footer></Footer>
    </div>
  );
}

export default App;
