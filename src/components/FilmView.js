import React from 'react'
import { useParams } from 'react-router';
import data from './data';
function FilmView() {
    let { title } = useParams();
    let film = data.cardData.find(el=> el.title === title);
 
    return (
      <div>
        <h1>{film.title}</h1>
        <iframe
          title={film.title}
          width='756'
          height='425'
          src={film.teaser}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <p>{film.longDescription}</p>
      </div>
    );
}

export default FilmView
