import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Inicio from './Componente/Inicio';
import TesteGrid from './Componente/TesteGrid';

import TesteCardItem from './Componente/TesteCardItem';
import TesteCard from './Componente/TesteCard';

class App extends Component {
  render() {    
    return (
      
      <BrowserRouter>
        <div className="App">
        
        {/*<TesteCard />*/}
          <Route path='/' exact component={Inicio} />

          <Route path='/TesteGrid' component={TesteGrid} />
          <Route path='/TesteCard' componete={TesteCard} />
          <Route path='/TesteCardItem' componente={TesteCardItem}/>
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
