import React from 'react'
import Rate from '../Rate'
import './MovieCard.css';
import { Link } from 'react-router-dom';
const MovieCard =({movie:{name,image,rating,date,description,title,id,trailer}}) =>{
    
    return (
        
      <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
        <div className='movie-rating'>
        
        </div>
          <div className="card_datails">
            <h1>{name}</h1>
           
            <div className="card_cat">
              <div className="PG"><Rate rating={rating} /></div>
              <p className="year">{date}</p>
                   
            </div>
            <p className="desc">{description}</p>
           
            <div className="btn-card">
            <Link to={`/trailer/${name}`} style={{textDecoration:'none'}}>
                <span style={{textDecoration:'none',backgroundColor:'lightgrey'}} className="span-tr">Trailer</span>
            </Link>
            
            <Link to={`movie/${name}`} >
              <span style={{textDecoration:'none',backgroundColor:'lightgrey'}} className="span-tr">Details</span>
            </Link>
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={image} alt="" />
          </div>
         
        </div>
      </div>
      
    </div>
    
    )
};

export default MovieCard;





