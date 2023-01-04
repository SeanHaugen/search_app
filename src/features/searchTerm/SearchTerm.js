import jsonData from '../../wizardData.json';
import {React, useState} from 'react'
import './searchTerm.css'


export const SearchTerm = () => {

    const [query, setQuery] = useState(localStorage.getItem('query') || '')

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }



    return (

    <>
        <div className='input-container'>
        <input 
            type='text'
            placeholder='search'
            onChange={handleSearch}
            value={query}
        />
        </div>
        <div className='container'>
        {
        jsonData.filter(post => {
          if (query === '') {
        return post;
         } else if (post.Name.toLowerCase().includes(query.toLowerCase())) {
        return post;
        }
      }).map((post,index) => (
            <div key={index} className="table">
                <p className='item'>{post.Name}</p>
                <p className='item'>{post.Occupation}</p>        
                <p className='item'>{post.About}</p>
            </div>
            ))
        }



        </div>
    </>
    )
    
}

