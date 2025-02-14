import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Detail.css"; // 스타일링을 위한 CSS 파일 추가

function Detail(props) {
    console.log(props)
    var  {id,title}  = useParams();
    console.log(useParams());
    console.log(id);
    console.log(title);
    // id 초기값 = 15553
    var [movie, setMovie] = useState(null); // 초기값을 null로 변경
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, [id]); // id가 변경될 때마다 useEffect 실행

    if (!movie) {
        return <div>Loading...</div>; // 로딩 상태 추가
    }

    return (
        <div className="movie-detail">
            <h1>{movie.title}</h1>
            <div id="setImg">
            <img src={movie.medium_cover_image} alt={movie.title} />
            </div>
            <p>{movie.description_full}</p>
            <ul>
                <li>Year: {movie.year}</li>
                <li>Rating: {movie.rating}</li>
                <li>Runtime: {movie.runtime} minutes</li>
                <li>Genres: {movie.genres.join(", ")}</li>
            </ul>
        </div>
    );
}

export default Detail;