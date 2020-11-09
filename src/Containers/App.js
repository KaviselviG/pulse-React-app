import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import DataTable from '../Components/DataTable/DataTable';
class App extends React.Component {
  render(){
      return (
      <div className="App">
        <Header/>
        <DataTable/>
      </div>
    );
  }
}

export default App;
