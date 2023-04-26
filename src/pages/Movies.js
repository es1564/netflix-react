import React, { useEffect } from 'react'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import { movieHomeResponsive } from '../components/responsive'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";
import MovieCard from '../components/MovieCard'

const Movies = () => {
  const {popularMovies, loading} = useSelector(state=>state.movie)


  if(loading || 
    popularMovies == null
  ) {
    return <ClipLoader color="#e32636" loading={loading} size={150}/>;
  }
  return (
    <div>Movies
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              <Button variant="danger">reviews</Button>
              <Button variant="danger">reviews2</Button>
            </div>
          </Col>
          <Col lg={8}>
            <div>
              <h1>Popular Movie</h1>
              <div>
                {popularMovies.results.map(item=><MovieCard item={item} />)}
              </div>
              {/* <MovieSlide movies={popularMovies} responsive={movieHomeResponsive}/> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies