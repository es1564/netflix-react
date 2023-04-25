import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY

function getMovies(){
    return async (dispatch)=>{
        try{
            dispatch({type:"getMoviesRequest"})
            const popularMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            );
            const topRatedApi = api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );
            const upComingApi = api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );
            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            
            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
                popularMovieApi, 
                topRatedApi, 
                upComingApi,
                genreApi
            ]);
            
            dispatch({
                type: "GetMoviesSuccess",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres
                }
            })
        }catch(error){
            dispatch({type: "getMoviesFailure"})
        }
    }
}

function getMovieDetail(id){
    return async (dispatch)=>{
        try{
            dispatch({type:"getMovieDetailRequest"})
            const movieDetailApi = api.get(
                `/movie/${id}?api_key=${API_KEY}&language=en-US`
            );
            console.log('movieDetailApi>>',movieDetailApi)
            let [movieDetail] = await Promise.all([
                movieDetailApi, 
            ]);
            
            dispatch({
                type: "getMovieDetailSuccess",
                payload: {
                    movie: movieDetail.data,
                }
            })
        }catch(error){
            dispatch({type: "getMovieDetailFailure"})
        }
    }
}

function getMovieReview(id){
    return async (dispatch)=>{
        try{
            dispatch({type:"getMovieReviewRequest"})
            const movieReviewApi = api.get(
                `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
            );
            console.log('getMovieReview>>',movieReviewApi)
            let [movieReview] = await Promise.all([
                movieReviewApi, 
            ]);
            
            dispatch({
                type: "getMovieReviewSuccess",
                payload: {
                    movieReview: movieReview.data,
                }
            })
        }catch(error){
            dispatch({type: "getMovieReviewFailure"})
        }
    }
}

export const movieAction = {
    getMovies, getMovieDetail, getMovieReview
}