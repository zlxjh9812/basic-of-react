import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Info(movie) {
    movie = movie.movie;
    return (
        <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            {/* Link를 통해 데이터를 전송 */}
            <Link to={`/movieDetail/${movie.id}\${movie.title}`}><h2>{movie.title}</h2></Link>
            {
                movie.summary !== null || movie.summary !== ""
                    ? <p>{movie.summary}</p>
                    : null
            }
            <ul>
                {
                    movie
                        .genres
                        .map((g, index) => <li key={index}>{g}</li>)
                }
            </ul>

        </div>

    );
}

export default Info;