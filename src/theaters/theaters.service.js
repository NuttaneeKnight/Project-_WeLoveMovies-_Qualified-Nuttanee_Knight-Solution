const knex = require('../db/connection')
const reduceProperties = require('../utils/reduce-properties');

//"movie_id": ["movies", null, "movie_id"]
// title: "Spirited Away",
// runtime_in_minutes: 125,
// rating: "PG",
// description:
//   "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
// image_url:
//   "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
//is_showing: true, ->mt
const reduceMovies = reduceProperties('theater_id', {
  movie_id: ['movies', null, 'movie_id'],
  title: ['movies', null, 'title'],
  runtime_in_minutes: ['movies', null, 'runtime_in_minutes'],
  rating: ['movies', null, 'rating'],
  description: ['movie', null, 'description'],
  image_url: ['movies', null, 'image_url'],
  is_showing: ['movies', null, 'is_showing'],
})

function list() {
  return knex('theaters')
    .join('movies_theaters as mt', "mt.theater_id", 'theaters.theater_id')
    .join('movies', 'movies.movie_id', 'mt.movie_id')
    .select('*')
    .then(reduceMovies); //can we use async await?
}

module.exports = {
  list,
}