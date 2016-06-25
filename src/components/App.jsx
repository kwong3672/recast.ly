class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      currentVideo: {
        snippet: {
          description: '',
          title: ''},
        id: {VideoId: ''}
      }
    };
    this.titleClicked = this.titleClicked.bind(this);
  }

  titleClicked (video) {
    this.setState({
      currentVideo: video
    });
  }

  searchChangeHandler (q) {
    console.log('Search changed!', q.target.value);
    this.props.searchYouTube({
      query: q.target.value
    }, data => this.setState({videoList: data}) );
  }

  render () {
    // this.props.searchYouTubeYouTube({}, () => {});
    return (
      <div>
        <Nav searchChangeHandler={this.searchChangeHandler.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} /*appState={this.state}*//>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickHandler={this.titleClicked}/>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.props.searchYouTube({}, (data) => this.setState({ 
      videoList: data,
      // currentVideo: data[0]
    }));
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
