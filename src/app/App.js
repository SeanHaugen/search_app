// import { Counter } from '../features/Counter.js';
import jsonData from '../rome.json'
import './app.css'
import {React, useState} from 'react';


function App() {

  const [query, setQuery] = useState('')

  const onHandleInput = (e) => {
      setQuery(e.target.value)
  }

  return (
    <div className="App">
      <h1>Practice app</h1>
      <input 
        type='text'
        placeholder='search'
        onChange={onHandleInput}
        />
      {
        jsonData.filter(post => {
          if (query === '') {
        return post;
         } else if (post.Name.toLowerCase().includes(query.toLowerCase())) {
        return post;
        }
      }).map((post,index) => (
        <tr key={index}>
          <td>{post.Name}</td>
          <hr />
          <td>{post.Family}</td>
          
          <td>{post.About}</td>
        </tr>
        ))
      }
    </div>
  );
}

export default App;
