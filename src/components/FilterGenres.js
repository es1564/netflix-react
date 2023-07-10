import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'

const FilterGenres = ({handleFilterGenres}) => {
    const {genreList} = useSelector(state=>state.movie)
    const [selectedGenreId, setSelectedGenreId] = useState(null);

    const handleGenreClick = (genreId) => {
        setSelectedGenreId(genreId);
        handleFilterGenres(genreId);
    };
  return (
    <div>
        <h5>Genres</h5>
        <div className="genre-badge">
            {genreList.map(genre => (
                <Button 
                    key={genre.id}
                    variant={selectedGenreId === genre.id ? 'danger' : 'secondary'}
                    onClick={() => handleGenreClick(genre.id)}
                >
                    {genre.name}
                </Button>
            ))}
        </div>
    </div>
  )
}

export default FilterGenres