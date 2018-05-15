import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Component Imports
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends Component {

  
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
      
  }
}

export default App;
