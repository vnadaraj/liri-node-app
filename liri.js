/**

LIRI Bot application: LIRI will display your latest tweets.

As we do not want to display your personal account, or its keys, please make an alias account and add a few tweets to it!

Make a new GitHub repository called liri-node-app and clone it to your computer.

To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.
- Twitter
- Spotify
- Request You'll use Request to grab data from the OMDB API.
- DotEnv

**/

/**
vnadaraj@vick-1 MINGW64 ~/Documents/UofA_Class/homework/liri-node-app (master)
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (liri-node-app)
version: (1.0.0)
description: Liri Bot app - Homework #8
entry point: (index.js) liri.js
test command:
git repository: (https://github.com/vnadaraj/liri-node-app.git)
keywords:
author: Vick Nadarajan
license: (ISC)
About to write to C:\Users\vnadaraj\Documents\UofA_Class\homework\liri-node-app\
package.json:

{
  "name": "liri-node-app",
  "version": "1.0.0",
  "description": "Liri Bot app - Homework #8",
  "main": "liri.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vnadaraj/liri-node-app.git"
  },
  "author": "Vick Nadarajan",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vnadaraj/liri-node-app/issues"
  },
  "homepage": "https://github.com/vnadaraj/liri-node-app#readme"
}


Is this ok? (yes)

vnadaraj@vick-1 MINGW64 ~/Documents/UofA_Class/homework/liri-node-app (master)
$

-rw-r--r-- 1 vnadaraj 197121 498 Jan 16 20:31 package.json

vnadaraj@vick-1 MINGW64 ~/Documents/UofA_Class/homework/liri-node-app (master)
$ cat package.json
{
  "name": "liri-node-app",
  "version": "1.0.0",
  "description": "Liri Bot app - Homework #8",
  "main": "liri.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vnadaraj/liri-node-app.git"
  },
  "author": "Vick Nadarajan",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vnadaraj/liri-node-app/issues"
  },
  "homepage": "https://github.com/vnadaraj/liri-node-app#readme"
}

$ npm install twitter --save
$ npm install node-spotify-api --save
$ npm install request --save
$ npm install dotenv --save

**/

/**
- Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.
- Make a JavaScript file named keys.js
- Next, create a file named .env, add your API keys (no quotes) once you have them
**/

/**
Get your Twitter API keys by following these steps:
1. Set up a personal Twitter account
2. Then, visit https://apps.twitter.com/app/new
**/

/**
Get your Spotify API key by following these steps:
1. The first thing you will need is a Spotify user account (Premium or Free). To get one, simply sign up at www.spotify.com.
2. When you have a user account, go to the My Applications page at the Spotify Developer website:
https://developer.spotify.com/my-applications
and, if necessary, log in. Accept the latest Developer Terms of Use to complete the set-up of your account.
3. Then register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
**/



/**
Make a file called random.txt.
Inside of random.txt put the following in with no extra characters or white space:
spotify-this-song,"I Want it That Way"
**/


// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();


// // If we want to use command line user input, we can use:
// npm install inquirer --save
// // then load the NPM Package inquirer
// const inquirer = require("inquirer");

// then load the NPM Package request
const request = require("request");

// then load the NPM Package node-spotify-api
const Spotify = require("node-spotify-api");

// then load the NPM Package twitter
const Twitter = require('twitter');


// Import the keys.js file and store it in a variable
const keys = require("./key.js");

// then be able to access your keys information like this
//console.log(keys.spotify);
//console.log(keys.twitter);
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// take in one of the following commands from user input:
/**
* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`
**/

/**
inquirer.prompt([
	// Pass your questions in here
	{
		type: "list",
		name: "userCmd",
		message: "Please pick an action from this list : ",
		choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
	}
]).then(userinput => {
    // Use user feedback for... whatever!!
	if (userinput.userCmd == "my-tweets")
	{
		console.log("Getting your tweets from Twitter...");
	} else if (userinput.userCmd == "spotify-this-song")
	{
		console.log("Getting your song and info from Spotify...");
	} else if (userinput.userCmd == "movie-this")
	{
		console.log("Getting your movie info from OMDB API...");
	} else if (userinput.userCmd == "do-what-it-says")
	{
		console.log("Doing what it says...");
	}
});

**/

/** What Each Command Should Do:

node liri.js my-tweets
- This will show your last 20 tweets and when they were created at in your terminal/bash window.

node liri.js spotify-this-song '<song name here>'
- This will show the following information about the song in your terminal/bash window:
	+ Artist(s)
	+ The song's name
	+ A preview link of the song from Spotify
	+ The album that the song is from
	+ If no song is provided then your program will default to "The Sign" by Ace of Base.

node liri.js movie-this '<movie name here>'
- Output the following information to your terminal/bash window:
   + Title of the movie.
   + Year the movie came out.
   + IMDB Rating of the movie.
   + Rotten Tomatoes Rating of the movie.
   + Country where the movie was produced.
   + Language of the movie.
   + Plot of the movie.
   + Actors in the movie.
   + If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
   It's on Netflix!
   
   You'll use the request package to retrieve data from the OMDB API.
   The OMDB API requires an API key. You may use trilogy

node liri.js do-what-it-says
- Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as per the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.


**/


/**
Finally:
In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt:
- append each command you run to the log.txt file
- Do not overwrite your file each time you run a command

**/


console.log("====================================================================================");
console.log("");
console.log("");

let userInput = process.argv[2];
if (userInput == "my-tweets")
{
	// console.log(user_input);

	// Returns the 20 most recent mentions (Tweets containing a users’s @screen_name) for the authenticating user.
	var params = {
		screen_name: 'vicknadarajuofa',
		count: 20,
		include_rts: 1
	};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response)
	{
		if (!error) {
			console.log("Tweets from @" + params.screen_name + " : ");
			console.log("---------------------------------");
			for (let i = 0; i < tweets.length; i++ )
			{
        // To return the whole JSON object with prettify to identify object key names
        // console.log(JSON.stringify(tweets, null, 2));
        // Below is a cut down version of the JSON output:
				console.log("Tweet : " + tweets[i].text + "\t | " + "Created at : " + tweets[i].created_at);
			}
		}
		console.log("====================================================================================");
	}
	);

} else if (userInput == "spotify-this-song") {

  //  Default song handling
  let defSongName = "The Sign";
  
  // Check the user input at index 3
  let songName = process.argv[3];

  for (let sn = 4; sn < process.argv.length; sn++) {
    songName = songName + " " + process.argv[sn];
    console.log(songName);
  };

  if (songName) {
    // Call Spotify API
    spotify.search(
      {
        type: 'track', query: songName
      }, function(songErr, songData) {
        if (songErr) {
          return console.log('Error occurred: ' + songErr);
        }
        // console.log(songData);
        for (let i = 0; i < songData.tracks.items.length; i++) {
          console.log("-----------------------------------------------------------")
          // Artists
          // Song name
          // preview_url
          // album

          // To return the whole JSON object with prettify to identify object key names
          // console.log(JSON.stringify(songData, null, 2));

          // Below is a cut down version of the JSON output:
          for (let k = 0; k < songData.tracks.items[i].artists.length; k++) {
            //console.log(songData.tracks.items[i].artists);
            console.log("Artist(s)         : " + songData.tracks.items[i].artists[k].name);
          }
          console.log("Song Name         : " + songData.tracks.items[i].name);
          console.log("Album Preview URL : " + songData.tracks.items[i].preview_url);
          console.log("Album Name        : " + songData.tracks.items[i].album.name);
        };
      }
    );
  } else {

    // Call Spotify API with a default song name "The Sign" by "Ace of Base"
    spotify.search(
      {
        type: 'track', query: defSongName
      }, function(songErr, songData) {
        if (songErr) {
          return console.log('Error occurred: ' + songErr);
        }
        // console.log(songData);
        for (let i = 0; i < songData.tracks.items.length; i++) {
          console.log("-----------------------------------------------------------")
          // Artists
          // Song name
          // preview_url
          // album

          // To return the whole JSON object with prettify to identify object key names
          // console.log(JSON.stringify(songData, null, 2));

          // Below is a cut down version of the JSON output:
          for (let k = 0; k < songData.tracks.items[i].artists.length; k++) {
            //console.log(songData.tracks.items[i].artists);

            // If no song is provided then we default to "The Sign" by Ace of Base.
            if (songData.tracks.items[i].artists[k].name == "Ace of Base") {
              foundArtist = i;
              console.log("Artist(s)         : " + songData.tracks.items[i].artists[k].name);
          console.log("Song Name         : " + songData.tracks.items[i].name);
          console.log("Album Preview URL : " + songData.tracks.items[i].preview_url);
          console.log("Album Name        : " + songData.tracks.items[i].album.name);
            }
          }
        };
      }
    );
  }


} else if (userInput == "movie-this") {
  /**
  Output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
  **/

  // Check the user input at index 3
  let movieTitle = process.argv[3];

  for (let mn = 4; mn < process.argv.length; mn++) {
    movieTitle = movieTitle + "+" + process.argv[mn];
    //console.log(movieTitle);
  };

  if (movieTitle) {
    // Then run a request to the OMDB API with the movie specified
    let queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";
    //console.log(queryUrl);

    request(queryUrl, function(movieError, movieResponse, movieBody) {

      // To handle situations where there is a typo in the movie name
      let movieFound = JSON.parse(movieBody).Response.toLowerCase();
      //console.log(movieFound);

      // If the request is successful (i.e. if the response status code is 200)
      if (!movieError && movieResponse.statusCode === 200 && movieFound === "true") {
        //console.log("Error                : " + movieError);
        //console.log("Response Status Code : " + movieResponse.statusCode);
        //console.log("Body Response        : " + movieFound);
        //console.log("###############################");
        // Parse the body of the site and recover just these:
        // Title of the movie.
        // Year the movie came out.
        // IMDB Rating of the movie.
        // Rotten Tomatoes Rating of the movie.
        // Country where the movie was produced.
        // Language of the movie.
        // Plot of the movie.
        // Actors in the movie.

        // Use console.log(JSON.parse(movieBody)) to disect the JSON object returned

        console.log("Movie Title            : " + JSON.parse(movieBody).Title);
        console.log("Release Year           : " + JSON.parse(movieBody).Year);
        console.log("IMDB rating            : " + JSON.parse(movieBody).imdbRating);
        console.log("Rotten Tomatoes Rating : " + JSON.parse(movieBody).Ratings[1].Value);
        console.log("Country of Production  : " + JSON.parse(movieBody).Country);
        console.log("Language               : " + JSON.parse(movieBody).Language);
        console.log("Plot                   : " + JSON.parse(movieBody).Plot);

      } else {
        console.log(JSON.parse(movieBody));
      }
    });
  } else {
    // Set up default movie to query
    let movieTitle = "Mr.+Nobody"

    // Then run a request to the OMDB API with the movie specified
    let queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(movieError, movieResponse, movieBody) {

      // To handle situations where there is a typo in the movie name
      let movieFound = JSON.parse(movieBody).Response.toLowerCase();
      //console.log(movieFound);

      // If the request is successful (i.e. if the response status code is 200)
      if (!movieError && movieResponse.statusCode === 200 && movieFound === "true") {
        //console.log("Error                : " + movieError);
        //console.log("Response Status Code : " + movieResponse.statusCode);
        //console.log("Body Response        : " + movieFound);
        //console.log("###############################");
        // Parse the body of the site and recover just these:
        // Title of the movie.
        // Year the movie came out.
        // IMDB Rating of the movie.
        // Rotten Tomatoes Rating of the movie.
        // Country where the movie was produced.
        // Language of the movie.
        // Plot of the movie.
        // Actors in the movie.

        // Use console.log(JSON.parse(movieBody)) to disect the JSON object returned

        console.log("Movie Title            : " + JSON.parse(movieBody).Title);
        console.log("Release Year           : " + JSON.parse(movieBody).Year);
        console.log("IMDB Rating            : " + JSON.parse(movieBody).imdbRating);
        console.log("Rotten Tomatoes Rating : " + JSON.parse(movieBody).Ratings[1].Value);
        console.log("Country of Production  : " + JSON.parse(movieBody).Country);
        console.log("Language               : " + JSON.parse(movieBody).Language);
        console.log("Plot                   : " + JSON.parse(movieBody).Plot);

      }
    });
  }

} else {
	console.log("Invalid input! Please try again.");
}

