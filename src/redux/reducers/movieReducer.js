let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList: [],
    movie: null
}

function movieReducer(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case "GetMoviesSuccess":
            return {
                ...state, 
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upcomingMovies: payload.upcomingMovies,
                loading: false,
                genreList: payload.genreList
            }
        case "getMoviesRequest":
            return {...state, loading: true}
        case "getMoviesFailure":
            return {...state, loading: false}
        case "getMovieDetailSuccess":
            return {
                ...state, 
                movie: payload.movie,
                loading: false,
            }
        case "getMovieDetailRequest":
            return {...state, loading: true}
        case "getMovieDetailFailure":
            return {...state, loading: false}
        default:
            return {...state}
    }

}

export default movieReducer