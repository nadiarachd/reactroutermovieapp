import React from 'react'
import {Link} from  "react-router-dom"
const Trailer = (props) => {{
  const movieFound = props.movies.find( (movie) => movie.title === props.match.params.Tiltle);
    return (
        
        <div style={{height:'100%'}}>
          {/* --------------------------- trailer video ------------------------- */}
              <iframe 
                  width="100%" 
                  height="600px"
                  src={movieFound.trailer} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  
                >

             </iframe>

             <div style={{display:'flex'}}>
          {/* --------------------------- bouton go back ------------------------- */}

             <div style={{marginTop:'50px' , marginLeft:'200px' ,height:'50px', width:'200px'}}>
                       <Link  to={`/movie/${movieFound.title}`} style={{textDecoration:'none'}}>
                       <span className="span-homedesc1">Movie Details</span>
                       </Link>
            </div> 
                      {/* --------------------------- bouton home ------------------------- */}

            <div style={{marginTop:'50px' , marginLeft:'500px' ,height:'50px', width:'200px'}}>
            <Link to='/' style={{textDecoration:'none'}}>
                      
                      <span className="span-homedesc1">Go Home</span>
                      
                   </Link>
            </div> 
            </div>
        </div>
    )
}};

export default Trailer;
