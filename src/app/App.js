// import { Counter } from '../features/Counter.js';

import './app.css'
import {React, useState} from 'react';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import { QuestForm } from '../features/quests/QuestForm.js';
import { QuestList } from '../features/quests/questList.js';


function App() {

  const [quests, setQuest] = useState([])

  const addQuest = (quest) => {
    setQuest([...quests, quest]);
  };

  return (
    <div className="App">
      <h1>Practice app</h1>
      <div className='container'> 
        <SearchTerm className="search-container"/>
      </div>
    <div>
      <QuestForm addQuest={addQuest} className='quest-list'/>
      <QuestList quests={quests} className="quest-list"/>
    </div>


    </div>
  );
}

export default App;
