import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {
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
        className="card" 
        style={{backgroundImage:
                "url("+
                `https://www.themoviedb.org/t/p/w355_and_h200_face/${item.poster_path}`+
                ")"
            }}
        onClick={showDetail}
    >
        <div className="overlay">
            <h1>{item.title}</h1>
            <div>
              {item.genre_ids.map((id) => (
                <Badge bg="danger">
                  {genreList.find(item => item.id == id).name}
                </Badge>
              ))}
            </div>
            <div>
              <span>{item.vote_average}</span>
              <span>{item.adult ? "청불" : "Under 18"}</span>
            </div>
        </div>
    </div>
  )
}

export default MovieCard