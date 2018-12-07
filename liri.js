// We are requiring a node_modules package call "dotenv"
// dotenv package has a method called .config() which we required to use
// var inquirer = require("inquirer");
require("dotenv").config();
var axios = require("axios");

// require fs for reading files
var fs = require("fs");
var Spotify = require("node-spotify-api");
// Require the keys.js file
var keys = require("./keys.js");

var whatToDo, song;

var spotify = new Spotify(keys);
var omdb = keys.omdb;
var bands = keys.bands;

var arguments;

if (process.argv[2] === "spotify-this-song") {

  /* *********************************** SPOTIFY  SEARCH ************************************* */

  // Splicing out index 0-2 out of the array and joining a + to every argument after index 4
  if (process.argv.length > 4) {
    arguments = process.argv.splice(3).join("+");
    console.log(arguments);
  }

  spotify.search({ type: "track", query: arguments, limit: 1 }, function (err, data) {
    // Error handler
    if (err) {
      return console.log(err);
    }

    // Spotify search results
    var track = data.tracks.items[0].name;
    var artist = data.tracks.items[0].artists[0].name;
    var album = data.tracks.items[0].album.name;
    var preview = data.tracks.items[0].external_urls.spotify;

    console.log(`Spotify search: 
    Artist: ${artist}
    Song: ${track}
    Album: ${album}
    Preview Song: ${preview}
    `);

  })

} else if (process.argv[2] === "concert-this") {

  /* ******************************** BAND IN TOWN SEARCH ********************************** */
  var bandName = process.argv.splice(3).join("+");
  var queryUrlBands = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=" + bands;
  console.log(queryUrlBands);
  console.log("Bands in town search");

} else if (process.argv[2] === "movie-this") {

  /* ************************************ OMDB SEARCH ************************************** */
  console.log("OMDB search");
  var movieName;

  if (process.argv.length <= 3) {
    movieName = "Mr. Nobody";
    console.log
      (`* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
* It's on Netflix!
    `)
  } else {
    movieName = process.argv.splice(3).join("+");

  };

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb;
  console.log(queryUrl);

  axios.get(queryUrl)
    .then(function (response) {
      console.log
        (`  
  * Title of the movie: ${response.data.Title}
  * Year the movie came out: ${response.data.Year}
  * IMDB Rating of the movie: ${response.data.imdbRating}
  * Rotten Tomatoes Rating of the movie: ${response.data.Ratings[1].Value}
  * Country where the movie was produced: ${response.data.Country}
  * Language of the movie: ${response.data.Language}
  * Plot of the movie: ${response.data.Plot}
  * Actors in the movie: ${response.data.Actors}
  `)
    })

    .catch(function (err) {
      console.log(err);
    });

};


















