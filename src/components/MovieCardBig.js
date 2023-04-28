import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCardBig = ({item}) => {
  //console.log('item>>>>>>>>',item)
  const navigate = useNavigate()
  const {genreList} = useSelector(state=>state.movie)
  const showDetail=()=>{
      navigate(`/movies/${item?.id}`)
  }

  if (!item) {
    return <div>Error: No movies found</div>
  }
  return (
    // <div className="card" style={{backgroundImage:"url('https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}')"}}></div>
    <div 
        className="movies" 
        style={{backgroundImage:
                "url("+
                `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`+
                ")"
            }}
        onClick={showDetail}
    >
        <div className="movies-info">
          <ul>
            <li>
              <img
                className="card-big"
                src={`https://image.tmdb.org/t/p/original//${item.backdrop_path}`}
              />
            </li>
            <li><h3>{item.title.substring(0, 20) + "..."}</h3></li>
          </ul>
          <ul>
            {item.genre_ids.map((id) => (
              <Badge bg="danger">
                {genreList.find(item => item.id == id).name}
              </Badge>
            ))}
          </ul>
          <ul>{item.overview.substring(0, 200) + "..."}</ul>
          <ul>
            <li>{item.vote_average}</li>
            <li>{item.adult ? "청불" : "Under 18"}</li>
          </ul>
        </div>
        {/* <div className="movies-info">
            <img
              className="card-big"
              src={`https://image.tmdb.org/t/p/original//${item.backdrop_path}`}
            />
            <h3>{item.title}</h3>
            <div>
              {item.genre_ids.map((id) => (
                <Badge bg="danger">
                  {genreList.find(item => item.id == id).name}
                </Badge>
              ))}
            </div>
            <div>{item.overview.substring(0, 200) + "..."}</div>
            <div>
              <span>{item.vote_average}</span>
              <span>{item.adult ? "청불" : "Under 18"}</span>
            </div>
        </div> */}
    </div>
  )
}

export default MovieCardBig