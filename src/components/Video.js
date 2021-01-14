import React from "react";

import shaka from "shaka-player";

class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  componentDidMount() {
    var manifestUri =
      "http://www.bok.net/dash/tears_of_steel/cleartext/stream.mpd";
    // var licenseServer = 'https://cwip-shaka-proxy.appspot.com/no_auth';

    let video = this.video.current;

    var player = new shaka.Player(video);

    // player.configure({
    //     drm: {
    //       servers: { 'com.widevine.alpha': licenseServer }
    //     }
    //   });

    const onError = (error) => {
      // Log the error.
      console.error("Error code", error.code, "object", error);
    };

    player
      .load(manifestUri)
      .then(function () {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      })
      .catch(onError); // onError is executed if the asynchronous load fails.
  }

  render() {
    return (

        <div className="col-md-4 my-1 col-10 mx-auto">
          <div className="card " style={{ borderRadios:'23px'}}>
            <div className="card-body   ">
              <h3 className="card-title" >{this.props.title} </h3>
			  <div className="embed-responsive embed-responsive-21by9">
              <video
                className="embed-responsive-item"
                id="video"
                ref={this.video}
                width="100%"
                height="100%"
                poster= {this.props.thumbnail}
                controls
                autoplay></video>
				</div>
               <h6 className="card-title" >description</h6>
              <p className="card-text" >{this.props.description}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Video;