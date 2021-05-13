import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import Services from './components/Services';

const Home: React.FC = () => {
  return (<>
    <NavBar />
    <Header />
    <Services />
    <Reviews />
    <Footer />
  </>);
}

export default Home;