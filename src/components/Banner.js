import React, { useEffect, useState } from 'react'
import request from '../request';
import axios from '../axios';
import "./Banner.css";



const base_url="https://image.tmdb.org/t/p/original";
function Banner() {

    const [movie , setMovies]=useState("");

    function truncate(str,n)
    {
        return str?.length>n?str.substring(0,n-1)+"...":str;
    }

    useEffect(()=>{
        async function fetchData()
        {
            const res=await axios.get(request.fetchNetflixOriginals);
            setMovies(res.data.results[Math.floor(Math.random()*res.data.results.length-1)]);
            return res;
        }
        fetchData();
    },[])
    return (
        <header className="banner" style={{ backgroundSize:"cover",
        backgroundImage:`url("${base_url}${movie?.backdrop_path}")`,
        backgroundRepeat: "noRepeat",
  backgroundAttachment: "fixed",
        backgroundPosition:"center",
        }}>
        <div className="banner__contents">
         <h1 className="banner__title">{movie?.title || movie?.name}</h1> 
         <div className="banner__butt">
         <button className="banner__buttons">Play</button>
         <button className="banner__buttons">My List</button>
         <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
         </div>                                           
        </div>
        <div className="banner--fadebottom"></div>
        </header>
    )
}

export default Banner
