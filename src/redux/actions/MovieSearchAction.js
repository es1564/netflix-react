import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY

function getSearchMovies(search){
    return async (dispatch)=>{
        try{
            dispatch({type:"getSearchMoviesRequest"})
            const searchMovieApi = api.get(
                `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
            );
            
            let [searchMovies] = await Promise.all([
                searchMovieApi, 
            ]);
            dispatch({
                type: "getSearchMoviesSuccess",
                payload: {
                    searchMovies: searchMovies.data,
                    // ...searchMovies.data,
                    // results: sortedMovies,
                }
            })
        }catch(error){
            dispatch({type: "getSearchMoviesFailure"})
        }
    }
}

export const MovieSearchAction = {
    getSearchMovies, 
}