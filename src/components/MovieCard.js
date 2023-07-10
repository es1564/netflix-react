import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons'

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
      <div 
        className="card" 
        style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_face/${item.poster_path})` }} 
        onClick={showDetail}
      >
        <div className="overlay">
          <h1>{item.title}</h1>
          <div className="detail-badge">
            {item.genre_ids.map((id) => (
              <Badge bg="danger">
                {genreList.find(item => item.id == id).name}
              </Badge>
            ))}
          </div>
          <div className="card-info-container">
            <div className="card-info">
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD400" }} />{" "}
                {item.vote_average}
              </span>
              <span>
                <FontAwesomeIcon icon={faUsers} style={{ color: "grey" }} />{" "}
                {item.popularity}
              </span>
              <span>
                {item.adult ? (
                  <span className="eightteen">18+</span>
                ) : (
                  <span className="eightteen" style={{ color: "red" }}>
                    Under 18
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MovieCard