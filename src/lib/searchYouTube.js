var searchYouTube = (options, callback) => {

  // var URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + YOUTUBE_API_KEY;
  // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=cats&key={YOUR_API_KEY}
  var URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' 
    + options.key 
    + '&q=' + options.query
    + '&maxResults=' + options.max
    + '&type=video&videoEmbeddable=true';
    // console.log(URL);

    // console.log ( options );
  console.log('example: \n', exampleVideoData);
  $.ajax(URL, {
    success: data => callback(data.items),
    error: () => console.log('error!')
  });

};
window.searchYouTube = searchYouTube;
