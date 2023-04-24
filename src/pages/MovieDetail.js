import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { Badge } from 'react-bootstrap'

const MovieDetail = () => {
  let {id} = useParams();
  const dispatch = useDispatch();
  const {movie, loading} = useSelector(state=>state.movie)

  useEffect(()=>{
      dispatch(movieAction.getMovieDetail(id))
  },[])

  useEffect(()=>{
      console.log('movie>>>',movie)
  },[movie])

  if(loading) {
    return <ClipLoader color="#e32636" loading={loading} size={150}/>;
  }
  return (
    <div>MovieDetail
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div >
        <h1>{movie.title}</h1>
        <div>
          {movie.genres.map((genres) => (
            <Badge bg="danger">
              {genres.name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{movie.vote_average}  </span>
          <span>{movie.popularity}  </span>
          <span>{movie.adult ? "청불" : "Under 18"}</span>
        </div>
        <div>
          {movie.overview}
        </div>
        <div>
          <span>Release Day  </span>
          <span>{movie.release_date}</span>
        </div>
        <div>
          <span>runtime  </span>
          <span>{movie.runtime}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail