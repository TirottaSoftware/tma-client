import { useNavigate } from "react-router-dom";

function Banner({ movie, add }) {

    const nav = useNavigate()

    return (
        <div className='banner'>
            <div className='banner-img'>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Banner Image" />
                <div className='banner-content'>
                    <h2>{movie.title}</h2>
                    <div className='btn-container'>
                        <button onClick={() => nav(`/movie/${movie.id}`)} className='btn-more'>More</button>
                        <button onClick={() => add(movie)} className='btn-add'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner