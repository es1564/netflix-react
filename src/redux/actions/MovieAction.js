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

// function getMovieDetail2(id){
//     return async (dispatch)=>{
//         try{
//             dispatch({type:"getMoviesRequest"})
//             const movieDetailApi = api.get(
//                 `/movie/${id}?api_key=${API_KEY}&language=en-US`
//             );
//             const movieReviewApi = api.get(
//                 `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             const movieRecommendApi = api.get(
//                 `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             const movieTrailerApi = api.get(
//                 `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
//             );
            
//             let [movieDetail, movieReview, movieRecommend, movieTrailer] = await Promise.all([
//                 movieDetailApi, 
//                 movieReviewApi, 
//                 movieRecommendApi,
//                 movieTrailerApi
//             ]);
            
//             dispatch({
//                 type: "GetMoviesSuccess",
//                 payload: {
//                     movieDetail: movieDetail.data,
//                     movieReview: movieReview.data,
//                     movieRecommend: movieRecommend.data,
//                     movieTrailer: movieTrailer.data
//                 }
//             })
//         }catch(error){
//             dispatch({type: "getMoviesFailure"})
//         }
//     }
// }

// function getMovieDetail(id){
//     return async (dispatch)=>{
//         try{
//             dispatch({type:"getMovieDetailRequest"})
//             const movieDetailApi = api.get(
//                 `/movie/${id}?api_key=${API_KEY}&language=en-US`
//             );
//             console.log('movieDetailApi>>',movieDetailApi)
//             let [movieDetail] = await Promise.all([
//                 movieDetailApi, 
//             ]);
            
//             dispatch({
//                 type: "getMovieDetailSuccess",
//                 payload: {
//                     movie: movieDetail.data,
//                 }
//             })
//         }catch(error){
//             dispatch({type: "getMovieDetailFailure"})
//         }
//     }
// }

// function getMovieReview(id){
//     return async (dispatch)=>{
//         try{
//             dispatch({type:"getMovieReviewRequest"})
//             const movieReviewApi = api.get(
//                 `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             console.log('getMovieReview>>',movieReviewApi)
//             let [movieReview] = await Promise.all([
//                 movieReviewApi, 
//             ]);
            
//             dispatch({
//                 type: "getMovieReviewSuccess",
//                 payload: {
//                     movieReview: movieReview.data,
//                 }
//             })
//         }catch(error){
//             dispatch({type: "getMovieReviewFailure"})
//         }
//     }
// }

// function getMovieRecommend(id){
//     return async (dispatch)=>{
//         try{
//             dispatch({type:"getMovieRecommendRequest"})
//             const movieRecommendApi = api.get(
//                 `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             console.log('getMovieRecommend>>',movieRecommendApi)
//             let [movieRecommend] = await Promise.all([
//                 movieRecommendApi, 
//             ]);
            
//             dispatch({
//                 type: "getMovieRecommendSuccess",
//                 payload: {
//                     movieRecommend: movieRecommend.data,
//                 }
//             })
//         }catch(error){
//             dispatch({type: "getMovieRecommendFailure"})
//         }
//     }
// }

// function getMovieTrailer(id){
//     return async (dispatch)=>{
//         try{
//             dispatch({type:"getMovieTrailerRequest"})
//             const movieTrailerApi = api.get(
//                 `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
//             );
//             console.log('getMovieTrailer>>',movieTrailerApi)
//             let [movieTrailer] = await Promise.all([
//                 movieTrailerApi, 
//             ]);
            
//             dispatch({
//                 type: "getMovieTrailerSuccess",
//                 payload: {
//                     movieTrailer: movieTrailer.data,
//                 }
//             })
//         }catch(error){
//             dispatch({type: "getMovieTrailerFailure"})
//         }
//     }
// }

export const movieAction = {
    getMovies, 
    // getMovieDetail, 
    // getMovieReview, 
    // getMovieRecommend, 
    // getMovieTrailer,
    // getMovieDetail2
}