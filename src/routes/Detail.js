import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail(){
    var {id} = useParams();
    console.log(id);
    var [movie,setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
      };
    useEffect(()=>{
    getMovie();
    },[])
    return(
        <div>
        <h1>detail</h1>
        <h1>{movie.title}</h1>
      </div>
    );
}
export default Detail; 