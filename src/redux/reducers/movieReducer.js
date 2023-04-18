let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList: []
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
        default:
            return {...state}
    }

}

export default movieReducer