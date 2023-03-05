// Movie List Component

import React, { useEffect, useState } from "react";
const MovieList = (props) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        (async () => {
            const url = `http://www.omdbapi.com/?i=${props.movies.imdbID}&apikey=9531e005&type=movie`;
            const response = await fetch(url);
            const responseJson = await response.json();
           console.log(responseJson)
            if (responseJson) {
                setMovieDetails(responseJson);
                setIsLoad(true);
            }
          })();
      }, []);


  return (
    <>
      { isLoad ?
        <div key={props.movies.imdbID} className="image-container d-flex flex-column justify-content-center m-3">
         

          <img src={props.movies.Poster} alt={props.movies.Title} title={props.movies.Title}></img>

         
          <div key={props.movies.imdbID} className="">
          
              <div className="d-flex flex-row mt-2 ml-2 mr-2">
                <span className="col-6"><b>Title:</b></span> 
                <span className="col-6 text-right">{props.movies.Title}</span>
              </div>
              <div className="d-flex flex-row mt-2 ml-2 mr-2">
                <span className="col-6"><b>Date of Release :</b></span> 
                <span  className="col-6 text-right">{movieDetails.Released}</span>
              </div> 
              <div className="d-flex flex-row mt-2 ml-2 mr-2">
                <span className="col-6"><b>Duration :</b></span> 
                <span  className="col-6 text-right">{movieDetails.Runtime}</span>
              </div> 
               <div className="d-flex flex-row mt-2 ml-2 mr-2">
                <span className="col-6"><b>Actors:</b></span> 
                <span  className="col-6 text-right">{movieDetails.Actors}</span>
              </div>
              <div className="d-flex flex-row mt-2 ml-2 mr-2">
                <span className="col-6" ><b>Box Office:</b></span> 
                <span className="col-6 text-right" >{movieDetails.BoxOffice}</span>
              </div>
              <div className="d-flex flex-row mt-2 ml-2 mr-2">
                <span className="col-6"><b>Score:</b></span> 
                <span className="col-6 text-right">{movieDetails.Metascore}</span>
              </div>
              
           
            </div>
        </div>
        :
        ""
      }
    </>
  );
};

export default MovieList;
