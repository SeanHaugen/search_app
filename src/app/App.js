// import { Counter } from '../features/Counter.js';

import './app.css'
import {React} from 'react';
import { SearchTerm } from '../features/searchTerm/SearchTerm';


function App() {



  return (
    <div className="App">
      <h1>Practice app</h1>
      <div className='container'> 
        <SearchTerm className="search-container"/>
      </div>
      
    </div>
  );
}

export default App;
