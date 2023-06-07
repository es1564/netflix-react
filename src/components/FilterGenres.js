import React from 'react'
import { useSelector } from 'react-redux'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'

const FilterGenres = () => {
    const {genreList} = useSelector(state=>state.movie)
  return (
    <div>
        <h5>Genres</h5>
        <div>
            {genreList.map(genre => (
                <Button key={genre.id} variant="danger">
                    {genre.name}
                </Button>
            ))}
        </div>
    </div>
  )
}

export default FilterGenres