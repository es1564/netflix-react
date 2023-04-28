import React, { useEffect } from 'react'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import { movieHomeResponsive } from '../components/responsive'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";
import MovieCard from '../components/MovieCard'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import MovieCardBig from '../components/MovieCardBig'

const Movies = () => {
  const {popularMovies, loading} = useSelector(state=>state.movie)


  if(loading || 
    popularMovies == null
  ) {
    return <ClipLoader color="#e32636" loading={loading} size={150}/>;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  Sort
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col lg={9}>
            <div>
              <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                {popularMovies.results.map(item => (
                  <Col key={item.id}>
                    <MovieCardBig item={item} />
                  </Col>
                ))}
              </Row>
              {/* <div>
                {popularMovies.results.map(item=><MovieCardBig item={item} />)}
              </div> */}
              {/* <MovieSlide movies={popularMovies} responsive={movieHomeResponsive}/> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies