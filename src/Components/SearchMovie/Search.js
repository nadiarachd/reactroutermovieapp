import React from 'react'
import Rate from '../Rate'
import './Search.css'
const Search=({setNameSearch, setRatingSearch, ratingSearch}) =>{
    
    return (
        <div className='sear'>
           <input  type='text' className='inpt'
           placeholder='Search movie'
           onChange={(e) => setNameSearch(e.target.value)}/> 
           
           <Rate
          className='star-rating'
         
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
        </div>
    )
}

export default Search


