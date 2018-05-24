import axios from 'axios'
// define the api info
const API_KEY = 'cfe422613b250f702980a3bbf9e90716'
const API_URL = 'https://api.themoviedb.org/3'
const THEMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/'

export function getMovieInfo() {
  return axios.get(
    `${API_URL}/movie/popular?&api_key=${API_KEY}`
  ).then( (response) => {
    const data = response.data
    return data
  })
  
}
export function getImageUrl(imagePath, imgWidth=300) {
  return `${THEMDB_IMAGE_URL}/w${imgWidth}/${imagePath}`
}