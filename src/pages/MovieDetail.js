import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movieAction } from '../redux/actions/MovieAction'
import { movieDetailAction } from '../redux/actions/MovieDetailAction'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faStar, faCamera, faVideoCamera, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import MovieSlide from '../components/MovieSlide'
import { movieRelatedResponsive } from '../components/responsive';
import MovieCard from '../components/MovieCard';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';

const MovieDetail = () => {
  let {id} = useParams();
  const [reviewActive, setReviewActive] = useState(true);
  const dispatch = useDispatch();
  const {movie, movieReview, movieRecommend, movieTrailer, loading} = useSelector(state=>state.movieDetail)

  const [showTrailer, setShowTrailer] = useState(false);
  const handleClose = () => setShowTrailer(false);
  const handleShow = () => setShowTrailer(true);

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  useEffect(()=>{
    dispatch(movieDetailAction.getMovieDetail(id))
      // dispatch(movieAction.getMovieDetail(id))
      // dispatch(movieAction.getMovieReview(id))
      // dispatch(movieAction.getMovieRecommend(id))
      // dispatch(movieAction.getMovieTrailer(id))
  },[dispatch, id])

  useEffect(()=>{
      console.log('movie>>>',movie)
  },[movie])

  useEffect(()=>{
      console.log('movieTrailer>>>',movieTrailer)
      //console.log(movieTrailer.results[0].key)
  },[movieTrailer])

  if(loading || 
    movie == null || 
    movieReview == null || 
    movieRecommend == null || 
    movieTrailer == null
  ) {
    return <ClipLoader color="#e32636" loading={loading} size={150}/>;
  }
  return (
    <Container className="detail-container">
      <Row>
        <Col lg={5} className='product-img'>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt=""
          />
        </Col>
        <Col lg={7}>
          <div>
            <ul>
              <h1>{movie.title}</h1>
            </ul>
            <div className="detail-badge">
              <ul>
              {movie.genres.map((genres) => (
                <Badge bg="danger">{genres.name}</Badge>
              ))}
              </ul>
            </div>
            <div className="detail-info">
              <ul>
                <li><FontAwesomeIcon icon={faStar} style={{color: "#FFD400",}} />  {movie.vote_average}</li>
                <li><FontAwesomeIcon icon={faUsers} style={{color: "grey",}} />  {movie.popularity}</li>
                <li>{movie.adult ? <span className="eightteen">18+</span> : <span className="eightteen" style={{color: "red",}}>Under 18</span>}</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  {movie.overview}
                </li>
              </ul>
            </div>
            <div className="detail-info-list">
              <ul>
                <li>
                  <Badge bg="danger">budget</Badge>${movie.budget}
                </li>
                <li>
                  <Badge bg="danger">revenue</Badge>${movie.revenue}
                </li>
                <li>
                  <Badge bg="danger">Release Day</Badge>${movie.release_date}
                </li>
                <li>
                  <Badge bg="danger">runtime</Badge>${movie.runtime}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Button
                    variant="outline-danger"
                    onClick={handleShow}
                  >
                    <FontAwesomeIcon icon={faCamera} />  Watch Trailer
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>


      <Modal 
        size="lg" 
        show={showTrailer} 
        onHide={handleClose}
        dialogClassName="trailer-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}  Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <div className="trailer">
            <YouTube 
              videoId={movieTrailer.results[0].key} 
              opts={opts}
            />

          </div>
        </Modal.Body>
      </Modal>


      <Row className="detail-tab">
        <div>
          <Button
            variant={reviewActive ? "danger" : "outline-danger"}
            active={reviewActive}
            onClick={() => setReviewActive(!reviewActive)}>
              reviews({movieReview.results.length})
          </Button>
          <Button 
            variant={!reviewActive ? "danger" : "outline-danger"}
            active={!reviewActive}
            onClick={() => setReviewActive(!reviewActive)}>
              related movies({movieRecommend.results.length})
          </Button>
        </div>
        <div>
        {reviewActive &&
          <div className="review">
          
          {movieReview.results.map((results) => (
            <ul>
              <li><h3>{results.author}</h3></li>
              <li>{results.content}</li>
            </ul>
          ))}
          </div>
        }
        {!reviewActive && (
          <div className="related-movies-container">
            {movieRecommend.results.map(item=><MovieCard item={item} />)}
          </div>
        )}</div>
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