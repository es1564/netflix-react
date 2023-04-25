import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faStar } from '@fortawesome/free-solid-svg-icons'

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

  if(loading || movie==null) {
    return <ClipLoader color="#e32636" loading={loading} size={150}/>;
  }
  return (
    <Container className="detail-container">
      <Row>
        <Col className='product-img'>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt=""
          />
        </Col>
        <Col>
          <div>
            <ul>
              <h1>{movie.title}</h1>
            </ul>
            <div>
              <ul>
              {movie.genres.map((genres) => (
                <Badge bg="danger">{genres.name}</Badge>
              ))}
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span>  {movie.vote_average}  </span>
                  <span><FontAwesomeIcon icon={faUsers} /></span>
                  <span>  {movie.popularity}  </span>
                  <span>{movie.adult ? "청불" : "Under 18"}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  {movie.overview}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <span><Badge bg="danger">budget</Badge>  </span>
                  <span>${movie.budget}</span>
                </li>
                <li>
                  <span><Badge bg="danger">revenue</Badge>  </span>
                  <span>${movie.revenue}</span>
                </li>
                <li>
                  <span><Badge bg="danger">Release Day</Badge>  </span>
                  <span>{movie.release_date}</span>
                </li>
                <li>
                  <span><Badge bg="danger">runtime</Badge>  </span>
                  <span>{movie.runtime}</span>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <div>
    //     <img
    //       src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
    //       alt=""
    //     />
    //   </div>
    //   <div >
    //     <h1>{movie.title}</h1>
    //     <div>
    //       {movie.genres.map((genres) => (
    //         <Badge bg="danger">
    //           {genres.name}
    //         </Badge>
    //       ))}
    //     </div>
    //     <div>
    //       <span>{movie.vote_average}  </span>
    //       <span>{movie.popularity}  </span>
    //       <span>{movie.adult ? "청불" : "Under 18"}</span>
    //     </div>
    //     <div>
    //       {movie.overview}
    //     </div>
    //     <div>
    //       <span>Release Day  </span>
    //       <span>{movie.release_date}</span>
    //     </div>
    //     <div>
    //       <span>runtime  </span>
    //       <span>{movie.runtime}</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MovieDetail