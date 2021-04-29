import React from 'react'
import'./Rate.css'
 const Rate = ({starIndex,rating}) => {
     const Stars=(X) =>{
         let starArray=[];
         for(let i=1;i<=5;i++){
         if(i<=X){starArray.push(<span
            className="rating"
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i)}
          >★</span>);}else{starArray.push(<span
            className="rating"
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i)}
          >
            ☆
          </span>);}} return starArray;
     }
     return <div>{Stars(rating)}</div>;
}
Rate.defaultProps = {
    starIndex: () => {},
    rating: 1,
  };
export default Rate;