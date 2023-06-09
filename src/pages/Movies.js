import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import MovieCardBig from '../components/MovieCardBig'
import { useLocation } from 'react-router-dom';
import { MovieSearchAction } from '../redux/actions/MovieSearchAction'
import SideBar from '../components/SideBar'
import Paging from '../components/Paging';


const Movies = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const search = location?.state?.search;
  const {popularMovies, loading} = useSelector(state=>state.movie)
  const {searchMovies, searchLoading} = useSelector(state=>state.movieSearch || {})
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [sortedMovies2, setSortedMovies2] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const totalMovies = sortedMovies2.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  useEffect(()=>{
      if(search!==undefined){
        dispatch(MovieSearchAction.getSearchMovies(search))
        setSelectedSortOption('popularity_desc');
      }
  },[search])
  
  useEffect(() => {
    // console.log('selectedSortOption',selectedSortOption)
    // console.log('searchMovies',searchMovies)

    let sortedMovies = [];

    if (selectedSortOption && searchMovies && searchMovies.results) {
      sortedMovies = [...searchMovies.results];
    } else {
      sortedMovies = [...popularMovies.results];
    }

    if (selectedSortOption){
      sortedMovies.sort((a, b) => {
        switch (selectedSortOption) {
          case 'popularity_desc':
            return b.popularity - a.popularity;
          case 'popularity_asc':
            return a.popularity - b.popularity;
          case 'release_date_desc':
            return new Date(b.release_date) - new Date(a.release_date);
          case 'release_date_asc':
            return new Date(a.release_date) - new Date(b.release_date);
          case 'vote_count_desc':
            return b.vote_count - a.vote_count;
          case 'vote_count_asc':
            return a.vote_count - b.vote_count;
          case 'title_desc':
            return b.title.localeCompare(a.title);
          case 'title_asc':
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
    }
      setSortedMovies2(sortedMovies);
      setCurrentPage(1);
  }, [selectedSortOption, searchMovies?.results]);



  const handleFilterYear = (year) => {
    // Update the sorted movies based on the selected year
    let filteredMovies = [];
// console.log("handleFilterYear>>>",year)
// console.log("handleFilterYear sortedMovies2>>>",sortedMovies2)
    if (year) {
      // Filter movies based on the selected year
      filteredMovies = sortedMovies2.filter((movie) => {
        const releaseYear = new Date(movie.release_date).getFullYear();
        return releaseYear >= year.min && releaseYear <= year.max;
      });
    } else {
      // No year selected, use all movies
      filteredMovies = sortedMovies2;
    }
    // console.log("handleFilterYear filteredMovies2>>>",filteredMovies)

    setSortedMovies2(filteredMovies);
    setCurrentPage(1);
  };

  const handleFilterGenres = (genre) => {
    // console.log("handleFilterGenres>>>",genre)

    let filteredMovies = [];
  
    if (genre) {
      filteredMovies = sortedMovies2.filter((movie) => {
        return movie.genre_ids.includes(genre);
      });
    } else {
      filteredMovies = sortedMovies2;
    }
    // console.log("handleFilterGenres filteredMovies>>>",filteredMovies)
  
    setSortedMovies2(filteredMovies);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = sortedMovies2.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <SideBar 
              setSelectedSortOption={setSelectedSortOption} 
              handleFilterYear={handleFilterYear}
              handleFilterGenres={handleFilterGenres}
            />
          </Col>
          <Col lg={9}>
            <div>
              <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                {currentMovies.map((item) => (
                  <Col key={item.id}>
                    <MovieCardBig item={item} />
                  </Col>
                ))}
              </Row>
            </div>
            <Paging
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies