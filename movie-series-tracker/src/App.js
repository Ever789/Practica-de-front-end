import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Folder from './componentes/Folder';
import SearchBar from './componentes/SearchBar';
import Card from './componentes/Card';

function App() {
  const handleSearch = (query) => {
    console.log('Buscar:', query);
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} />
        <Folder />
        <div className="card-container">
          <Card 
            title="El Padrino" 
            imageUrl="el_padrino.jpg" />
          <Card 
            title="Forrest Gump"
            imageUrl="forrest_gump.jpg" />
          <Card
            title="Titanic"
            imageUrl="titanic.jpg" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
