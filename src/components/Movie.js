import { useEffect, useState } from "react";
import css from "../css/CoinTracker.module.css"
import Info from "./MovieInfo"

function Movie() {
  var [movie, setMovie] = useState([]);
    var [state, setState] = useState(false);
    // useEffect(()=>{
    // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    // .then((response)=>response.json())     .then((json)=>{
    // console.log(json.data.movies)         setMovie(json.data.movies);
    // console.log(movie);     }); },[])
    useEffect(() => {
        getMovies();
     
    },[])
    const getMovies = async () => {
        var json = await(
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=rating&order_by=desc")
        ).json();
        setMovie(json.data.movies);
        // console.log(json.data.movies);
        setState(true);
        
    }
    return (
        <div className={css.body}>
            <h1 className={css.h1}>Movie</h1>
            <hr/> {!state ? <h1>loading...</h1> : 
                <div>{movie.map(movie => 
                 <Info movie ={movie} id={movie.id}/>
               )}
                </div>
            }
        </div>
    );
}
export default Movie;