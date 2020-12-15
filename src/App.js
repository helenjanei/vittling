import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Currentstock from './components/Currentstock'
import Inventory from './components/Inventory.js'
import Outofstock from './components/Outofstock'
import Shoppinglist from './components/Shoppinglist'

function App() {
  return (
     <>
      <Router>
        <Navbar />
        <Switch>
       <Route path='/' exact component={Currentstock} />
        <Route path='/inventory' component={Inventory} />
         <Route path='/outofstock' component={Outofstock} /> 
         <Route path='/shoppinglist' component={Shoppinglist} /> 
        </Switch>
        </Router>
    </>
  );
}

export default App;
