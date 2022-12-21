import React from 'react';
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import Content from './Content'

function App() {
  return (
    <div>
    <Header />
    <Navbar />
    <div className="row">
    <Content />
    </div>
    </div>
    );
}

export default App;