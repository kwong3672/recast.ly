var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: options.query || 'dogs',
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: 'true',
      key: options.key || YOUTUBE_API_KEY
    },
    success: data => callback(data.items),
    error: data => console.log('error \n', JSON.stringify(data))
  });

};
window.searchYouTube = searchYouTube;
