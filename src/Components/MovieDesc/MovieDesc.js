import React from 'react'
import {Link} from 'react-router-dom';
import Rate from '../Rate';
import './MovieDesc.css';
const MovieDesc = (props) => {{
  const movieFound = props.movies.find( (movie) => movie.title === props.match.params.Tiltle);
    return (
      <div className="card" >
      <img src={movieFound.image} alt ='gg' className="card-img-top" />
          <div className="card-body">
              <h5 className="card-title">{movieFound.name}</h5>
              <p className="card-text">{movieFound.description}</p>
              <div className="rate" style={{marginTop:'10px'}}>
                 <Rate 
                  rating={movieFound.rating}/>
              </div>
              <div style={{marginTop:'50px' , marginLeft:'200px' ,height:'50px', width:'200px'}}>
              <Link to='/' style={{textDecoration:'none'}}>
                      
                          <span className="span-homedesc">Home</span>
                       
                       </Link>
                       </div>
                       <div style={{marginTop:'10px' , marginLeft:'500px' ,height:'50px', width:'200px'}}>

                       
                       <Link to={`/trailer/${movieFound.name}`} style={{textDecoration:'none'}}>
                      
                      <span className="span-tr">Trailer</span>
                   
                   </Link>
                   </div>
                   
          </div>
  </div>       

              
              
        )
}
};
export default MovieDesc;

