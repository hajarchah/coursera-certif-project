import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="components-wrapper">
        <div><Nav  /></div>
        <div><Header /></div>
        <div><About /></div>
        <div><Testimonials /></div>
        <div><Contact /></div>
        <div><Footer /></div>
        <div></div>
        <div></div>
        </div>
        
    );
  }

}

export default App