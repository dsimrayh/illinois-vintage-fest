import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  const pages = {
    home: <Home></Home>,
    contact: <Contact></Contact>,
  };

  return (
    <div id="site-wrapper">
      <Header setPage={setPage}></Header>
      {pages[page]}
      <Footer></Footer>
    </div>
  );
}

export default App;
