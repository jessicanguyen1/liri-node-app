# liri-node-app

This was a homework assigned for UC Berkeley Coding Bootcamp. Similarily to iPhone's SIRI, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node application that takes in parameters and responds back with data.

# How to Use

### Commands
To search Bands in Town: `node liri.js concert-this <artist/band name here>`

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

    Name of the venue

    Venue location

    Date of the Event (use moment to format this as "MM/DD/YYYY")


To search Spotify: `node liri.js spotify-this-song '<song name here>'`

This will show the following information about the song in your terminal/bash window

    Artist(s)

    The song's name

    A preview link of the song from Spotify

    The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

To search OMDB: `node liri.js movie-this '<movie name here>'`

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


# Application Demo Video


[Click here to view](https://youtu.be/DYWl_nJNFaE)

# Author

Jessica Nguyen

