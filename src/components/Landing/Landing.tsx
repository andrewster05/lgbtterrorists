import * as React from "react";

export default function Landing() {
  return (
    <div className="landing">
      <div id="landing-inner">
        <h1>LGBT TERRORISTS</h1>
        {/* <div className="embed-container">
          <iframe
            id="youtube"
            src="https://www.youtube.com/embed/jeoAQN66JXY"
            className="landing-video-iframe"
            frameBorder="0"
            allowFullScreen
            title="LGBT Terrorists"
          />
        </div> */}
        <div
          style={{ position: "relative", overflow: "hidden", width: "100%", paddingTop: "56.25%" }}>
          <iframe
            src="https://tv.gab.com/channel/stedfastbaptist/embed/the-sodomite-deception-60355262ba72cb63ac029f04"
            width="960"
            height="540"
            style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: "100%", height: "100%" }}>
          </iframe>
        </div>
        {/* <div className="embed-container">
          <iframe
            id="rumble-fullmovie"
            src="https://rumble.com/embed/vf94uz/?pub=bfyuf"
            frameBorder="0"
            allowFullScreen
            title="LGBT Terrorists"
          />
        </div>  */}
        <div className="embed-container">
          <iframe title="LGBT Terrorists Full Movie" src="https://archive.org/embed/new-baptist-documentary-film-preaching-baptist-movie-720p" width="640" height="480" frameBorder="0" allowFullScreen></iframe>
        </div>
        <h2>Watch the Trailer here:</h2>
        <div className="embed-container">
          <iframe
            id="rumble-trailer"
            src="https://rumble.com/embed/v9p7bn/?pub=4"
            frameBorder="0"
            allowFullScreen
            title="LGBT Terrorists"
          />
        </div>
        <div id="form-container">
          <p>Subscribe to be notified about the film:</p>
          <div id="mc_embed_signup">
            <form
              action="https://sbckjv.us7.list-manage.com/subscribe/post?u=dbf184e3d28085287804252a5&amp;id=1a81e2b33b"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                  style={{ marginRight: "1em" }}
                />
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    type="text"
                    name="b_dbf184e3d28085287804252a5_1a81e2b33b"
                    tabIndex={-1}
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <form id='email-form'>
                    <label>
                        Be notified when the film is released.
                        <input type='email' placeholder='Email address' />
                    </label>
                    <input type='submit' value='Sign up' />
                </form> */}
      </div>
    </div >
  );
}
