class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }


  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} /*appState={this.state}*//>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} /*appState={this.state}*//>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
