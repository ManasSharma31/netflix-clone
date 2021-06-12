import axios from '../axios.js';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import "./Row.css";
const base_url="https://image.tmdb.org/t/p/original";
function Row({text,url}) {

    const [movies, setMovies] = useState([]);
    const [tapped , setTapped] = useState("");



    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const play=(movie)=>{
          if(tapped)
          {
              setTapped("");
          }
          else{
              movieTrailer(movie.name || movie.title || "")
              .then(url=>{
                  const parameters=new URLSearchParams(new URL(url).search);
                  setTapped(parameters.get('v'));

              }).catch(err=>{
                  console.log(err);
              })
          }

      }

    useEffect(()=>{
        async function fetchData(){
            const res=await axios.get(url);
            setMovies(res.data.results);
            return res;
        }
        fetchData();
        
    },[url])

    return (
        <div className="row">
        <h1 className="row__title">{text}</h1>
        <div className="row__posters">
        {
            movies.map(movie=>(              
                <img key={movie.id} className="row__poster" onClick={()=>play(movie)} src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))
        }
        </div>
        {tapped && <YouTube videoId={tapped} opts={opts} />}
        </div>
    )
}

export default Row;
