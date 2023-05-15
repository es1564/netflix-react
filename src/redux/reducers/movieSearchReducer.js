let initialState = {
    searchMovies: {},
    searchLoading: true,
}

function movieSearchReducer(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case "getSearchMoviesSuccess":
            return {
                ...state, 
                searchMovies: payload.searchMovies,
                searchLoading: false,
            }
        case "getSearchMoviesRequest":
            return {...state, searchLoading: true}
        case "getSearchMoviesFailure":
            return {...state, searchLoading: false}
        default:
            return {...state}
    }

}

export default movieSearchReducer