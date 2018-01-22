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


// Core node package for reading and writing files
// already included as part of core Node.js
const fs = require("fs");

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

// Set up a global variable to store process.argv
let userCmdArr = process.argv;

// Set a timestamp to log time when user ran the program
// A Number representing the milliseconds elapsed since the UNIX epoch.
let logTime = new Date();

// Collect command line arguments

let myAppendLog = "====================================================================================\n";

myAppendLog = myAppendLog + logTime.toString() + ": " + userCmdArr + "\n";
myAppendLog = myAppendLog + "====================================================================================\n";

console.log(myAppendLog);

fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
  if (myAppendError) {
    console.log(myAppendError);    
  }
});

// Write or append the log data into the log.txt file
// If the file didn't exist then it gets created on the fly.

let userInput = userCmdArr[2];


// Call this main function to decide approriate action to perform based on user input
function selectAction() {
  if (!userInput) {
    userInput = ""
  };

  if (userInput.toLowerCase() == "my-tweets") {
    myTweets();
  } else if (userInput.toLowerCase() == "spotify-this-song") {
    mySpotify();
  } else if (userInput.toLowerCase() == "movie-this") {
    myMovie();
  } else if (userInput.toLowerCase() == "do-what-it-says") {
    myDoWhat();
  } else {
    console.log("Invalid input! Please try again.");
    myAppendLog = "\nInvalid input! Please try again.\n";
    fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
      if (myAppendError) {
        console.log(myAppendError);    
      }
    });
  };
};

// This piece of code will read from the "log.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents read inside the variable myReadData
// fs.readFileSync("log.txt", "utf8");


function myTweets () {
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
        myAppendLog = "\nTweets from @" + params.screen_name + " : \n";
        myAppendLog = myAppendLog + "---------------------------------\n";

  			for (let i = 0; i < tweets.length; i++ )
  			{
          // To return the whole JSON object with prettify to identify object key names
          // console.log(JSON.stringify(tweets, null, 2));
          // Below is a cut down version of the JSON output:
  				console.log("Tweet : " + tweets[i].text + "\t | " + "Created at : " + tweets[i].created_at);
          myAppendLog = myAppendLog + "Tweet : " + tweets[i].text + "\t | " + "Created at : " + tweets[i].created_at + "\n";
  			}
  		}
      fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
        if (myAppendError) {
          console.log(myAppendError);    
        }
      });
  	}
  	);
};

function mySpotify() {

  //  Default song handling
  let defSongName = "The Sign";
  
  // Check the user input at index 3
  let songName = userCmdArr[3];

  for (let sn = 4; sn < userCmdArr.length; sn++) {
    songName = songName + " " + userCmdArr[sn];
    //console.log(songName);
  };

  if (songName) {
    // Call Spotify API
    spotify.search(
      {
        type: 'track', query: songName
      }, function(songErr, songData) {
        if (songErr) {
          myAppendLog = "\nError occurred: " + songErr + "\n";
          fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
            if (myAppendError) {
              console.log(myAppendError);    
            }
          });
          return console.log('Error occurred: ' + songErr);
        }
        // console.log(songData);
        myAppendLog = "\n";
        for (let i = 0; i < songData.tracks.items.length; i++) {
          console.log("-----------------------------------------------------------");
          myAppendLog = myAppendLog + "-----------------------------------------------------------\n";
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
            myAppendLog = myAppendLog + "Artist(s)         : " + songData.tracks.items[i].artists[k].name + "\n";
          }
          console.log("Song Name         : " + songData.tracks.items[i].name);
          myAppendLog = myAppendLog + "Song Name         : " + songData.tracks.items[i].name + "\n";
          console.log("Album Preview URL : " + songData.tracks.items[i].preview_url);
          myAppendLog = myAppendLog + "Album Preview URL : " + songData.tracks.items[i].preview_url + "\n";
          console.log("Album Name        : " + songData.tracks.items[i].album.name);
          myAppendLog = myAppendLog + "Album Name        : " + songData.tracks.items[i].album.name + "\n";
        };
        fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
          if (myAppendError) {
            console.log(myAppendError);
          }
        });
      }
    );
  } else {

    // Call Spotify API with a default song name "The Sign" by "Ace of Base"
    spotify.search(
      {
        type: 'track', query: defSongName
      }, function(songErr, songData) {
        if (songErr) {
          myAppendLog = "\nError occurred: " + songErr + "\n";
          fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
            if (myAppendError) {
              console.log(myAppendError);    
            }
          });
          return console.log('Error occurred: ' + songErr);
        }
        // console.log(songData);
        myAppendLog = "\n";
        for (let i = 0; i < songData.tracks.items.length; i++) {
          console.log("-----------------------------------------------------------");
          myAppendLog = myAppendLog + "-----------------------------------------------------------\n";
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
              myAppendLog = myAppendLog + "Artist(s)         : " + songData.tracks.items[i].artists[k].name + "\n";
              console.log("Song Name         : " + songData.tracks.items[i].name);
              myAppendLog = myAppendLog + "Song Name         : " + songData.tracks.items[i].name + "\n";
              console.log("Album Preview URL : " + songData.tracks.items[i].preview_url);
              myAppendLog = myAppendLog + "Album Preview URL : " + songData.tracks.items[i].preview_url + "\n";
              console.log("Album Name        : " + songData.tracks.items[i].album.name);
              myAppendLog = myAppendLog + "Album Name        : " + songData.tracks.items[i].album.name + "\n";
            }
          }
        };
        fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
          if (myAppendError) {
            console.log(myAppendError);
          }
        });
      }
    );
  }
};

function myMovie() {
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
  let movieTitle = userCmdArr[3];

  for (let mn = 4; mn < userCmdArr.length; mn++) {
    movieTitle = movieTitle + "+" + userCmdArr[mn];
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

      myAppendLog = "\n";
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
        myAppendLog = myAppendLog + "Movie Title            : " + JSON.parse(movieBody).Title + "\n";
        console.log("Release Year           : " + JSON.parse(movieBody).Year);
        myAppendLog = myAppendLog + "Release Year           : " + JSON.parse(movieBody).Year + "\n";
        console.log("IMDB rating            : " + JSON.parse(movieBody).imdbRating);
        myAppendLog = myAppendLog + "IMDB rating            : " + JSON.parse(movieBody).imdbRating + "\n";
        let rotten = JSON.parse(movieBody).Ratings[1];
        if (rotten) {
          console.log("Rotten Tomatoes Rating : " + rotten.Value);
          myAppendLog = myAppendLog + "Rotten Tomatoes Rating : " + rotten.Value + "\n";
        } else {
          console.log("Rotten Tomatoes Rating : " + "Not available");
          myAppendLog = myAppendLog + "Rotten Tomatoes Rating : " + "Not available\n";
        };
        console.log("Country of Production  : " + JSON.parse(movieBody).Country);
        myAppendLog = myAppendLog + "Country of Production  : " + JSON.parse(movieBody).Country + "\n";
        console.log("Language               : " + JSON.parse(movieBody).Language);
        myAppendLog = myAppendLog + "Language               : " + JSON.parse(movieBody).Language + "\n";
        console.log("Plot                   : " + JSON.parse(movieBody).Plot);
        myAppendLog = myAppendLog + "Plot                   : " + JSON.parse(movieBody).Plot + "\n";

      } else {
        console.log(JSON.parse(movieBody));
        myAppendLog = myAppendLog + JSON.stringify(movieBody, null, 2) + "\n";
      }
      fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
        if (myAppendError) {
          console.log(myAppendError);    
        }
      });      
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

      myAppendLog = "\n";
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
        myAppendLog = myAppendLog + "Movie Title            : " + JSON.parse(movieBody).Title + "\n";
        console.log("Release Year           : " + JSON.parse(movieBody).Year);
        myAppendLog = myAppendLog + "Release Year           : " + JSON.parse(movieBody).Year + "\n";
        console.log("IMDB Rating            : " + JSON.parse(movieBody).imdbRating);
        myAppendLog = myAppendLog + "IMDB rating            : " + JSON.parse(movieBody).imdbRating + "\n";
        console.log("Rotten Tomatoes Rating : " + JSON.parse(movieBody).Ratings[1].Value);
        myAppendLog = myAppendLog + "Rotten Tomatoes Rating : " + JSON.parse(movieBody).Ratings[1].Value + "\n";
        console.log("Country of Production  : " + JSON.parse(movieBody).Country);
        myAppendLog = myAppendLog + "Country of Production  : " + JSON.parse(movieBody).Country + "\n";
        console.log("Language               : " + JSON.parse(movieBody).Language);
        myAppendLog = myAppendLog + "Language               : " + JSON.parse(movieBody).Language + "\n";
        console.log("Plot                   : " + JSON.parse(movieBody).Plot);
        myAppendLog = myAppendLog + "Plot                   : " + JSON.parse(movieBody).Plot + "\n";
      };
      fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
        if (myAppendError) {
          console.log(myAppendError);    
        }
      });
    });
  }
};

function myDoWhat() {
  /**
  Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

  It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

  Feel free to change the text in that document to test out the feature for other commands.

  BONUS:
  In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
  Make sure you append each command you run to the log.txt file.
  Do not overwrite your file each time you run a command.

  **/

  // Read file random.txt and check the data for instructions to execute
  fs.readFile("random.txt", "utf8", function(ReadError, ReadData) {

    // If the code experiences any errors it will log the error to the console.
    if (ReadError) {
        return console.log(ReadError);
    }

    // We will then print the contents of data
    console.log("+++++++++++++++++++");
    let arr1 = [];
    let arr2 = [];
    arr1.push(process.argv[0], process.argv[1]);
    arr2 = ReadData.split(",");
    userCmdArr = arr1.concat(arr2);
    console.log(userCmdArr);
    userInput = userCmdArr[2];
    console.log("+++++++++++++++++++");

    if (!userInput) {
      userInput = "";
    };

    if (userInput.toLowerCase() == "my-tweets") {
      myTweets();
    } else if (userInput.toLowerCase() == "spotify-this-song") {
      mySpotify();
    } else if (userInput.toLowerCase() == "movie-this") {
      myMovie();
    } else {
      console.log("Invalid input! Please try again.");
      myAppendLog = "\nInvalid input! Please try again.\n";
      fs.appendFile("log.txt", myAppendLog, function(myAppendError) {
        if (myAppendError) {
          console.log(myAppendError);    
        }
      });
    };

  });

};

selectAction();
