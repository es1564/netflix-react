import React, { useEffect } from 'react'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import { movieHomeResponsive } from '../components/responsive'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";
import MovieCard from '../components/MovieCard'
import MovieCardBig from '../components/MovieCardBig'
import { useLocation } from 'react-router-dom';
import { MovieSearchAction } from '../redux/actions/MovieSearchAction'
import SideBar from '../components/SideBar'

const Movies = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const search = location?.state?.search;
  const {popularMovies, loading} = useSelector(state=>state.movie)
  const {searchMovies, searchLoading} = useSelector(state=>state.movieSearch || {})

  useEffect(()=>{
      if(search!==undefined){
        dispatch(MovieSearchAction.getSearchMovies(search))
      }
  },[search])

  useEffect(()=>{
    console.log('searchLoading>>>>>',searchLoading)
  },[searchLoading])

  if(loading || 
    popularMovies == null ||
    (search !== undefined && 
      searchLoading || (searchMovies == null || searchMovies == undefined ))
  ) {
    return <>
            <ClipLoader color="#e32636" loading={loading} size={150} />
            <div>No movies found</div>
          </>
  }
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <SideBar></SideBar>
          </Col>
          <Col lg={9}>
            <div>
              <Row xs={1} sm={1} md={2} lg={2} className="g-4">
              {search === undefined || search == null || search == ''
                ? popularMovies.results.map((item) => (
                    <Col key={item.id}>
                      <MovieCardBig item={item} />
                    </Col>
                  ))
                : searchMovies?.results?.map((item) => (
                    <Col key={item.id}>
                      <MovieCardBig item={item} />
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies