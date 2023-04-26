let initialState = {
    loading: true,
    movie: null,
    movieReview: null,
    movieRecommend: null,
    movieTrailer: null,
}

function movieDetailReducer(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case "getMovieDetail2Success":
            return {
                ...state, 
                movie: payload.movie,
                movieReview: payload.movieReview,
                movieRecommend: payload.movieRecommend,
                movieTrailer: payload.movieTrailer,
                loading: false,
            }
        case "getMovieDetail2Request":
            return {...state, loading: true}
        case "getMovieDetail2Failure":
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

        case "getMovieReviewSuccess":
            return {
                ...state, 
                movieReview: payload.movieReview,
                loading: false,
            }
        case "getMovieReviewRequest":
            return {...state, loading: true}
        case "getMovieReviewFailure":
            return {...state, loading: false}

        case "getMovieRecommendSuccess":
            return {
                ...state, 
                movieRecommend: payload.movieRecommend,
                loading: false,
            }
        case "getMovieRecommendRequest":
            return {...state, loading: true}
        case "getMovieRecommendFailure":
            return {...state, loading: false}

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

export default movieDetailReducer