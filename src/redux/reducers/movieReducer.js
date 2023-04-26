let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList: [],
    // movie: null,
    // movieReview: null,
    // movieRecommend: null,
    // movieTrailer: null,
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

        // case "getMovieDetailSuccess":
        //     return {
        //         ...state, 
        //         movie: payload.movie,
        //         loading: false,
        //     }
        // case "getMovieDetailRequest":
        //     return {...state, loading: true}
        // case "getMovieDetailFailure":
        //     return {...state, loading: false}

        // case "getMovieReviewSuccess":
        //     return {
        //         ...state, 
        //         movieReview: payload.movieReview,
        //         loading: false,
        //     }
        // case "getMovieReviewRequest":
        //     return {...state, loading: true}
        // case "getMovieReviewFailure":
        //     return {...state, loading: false}

        // case "getMovieRecommendSuccess":
        //     return {
        //         ...state, 
        //         movieRecommend: payload.movieRecommend,
        //         loading: false,
        //     }
        // case "getMovieRecommendRequest":
        //     return {...state, loading: true}
        // case "getMovieRecommendFailure":
        //     return {...state, loading: false}

        // case "getMovieTrailerSuccess":
        //     return {
        //         ...state, 
        //         movieTrailer: payload.movieTrailer,
        //         loading: false,
        //     }
        // case "getMovieTrailerRequest":
        //     return {...state, loading: true}
        // case "getMovieTrailerFailure":
        //     return {...state, loading: false}

        default:
            return {...state}
    }

}

export default movieReducer