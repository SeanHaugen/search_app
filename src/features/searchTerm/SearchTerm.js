import jsonData from '../../rome.json';
import {React, useState} from 'react'
import './searchTerm.css'


export const SearchTerm = () => {

    const [query, setQuery] = useState(localStorage.getItem('query') || '')

    const onSearch = (e) => {
        setQuery(e.target.value)
    }



    return (

    <>
        <div className='input-container'>
        <input 
            type='text'
            placeholder='search'
            onChange={onSearch}
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
                <td className='item'>{post.Name}</td>
                <p className='item'>{post.Family}</p>        
                <p className='item'>{post.About}</p>
            </div>
            ))
        }



        </div>
    </>
    )
    
}

