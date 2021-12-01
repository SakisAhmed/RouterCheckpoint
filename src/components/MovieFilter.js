import React from "react";
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom'
const MovieFilter = (props) => {

return (
        <div className="d-flex flex-row ">
    {props.list.filter((val)=>
        val.title.toLowerCase().includes(props.filter.toLowerCase())&&(val.rating>=props.filterStar)
             
      ).map(el=>(
        <Link
          key={el.title}
          to={{
            pathname: `/film/${el.title}`,
            // This is the trick! This link sets
            // the `background` in location state.
          }}
        >
        <MovieCard title={el.title} 
        description={el.description} 
        rating={el.rating}
         posterURL={el.posterURL}></MovieCard> 
         </Link>      
     ))}</div>
)
}
export default MovieFilter