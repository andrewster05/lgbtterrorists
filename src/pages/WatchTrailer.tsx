import Video from "components/Video/Video";
import VideoSrc from "../assets/Trailer.mp4";

export default function WatchTrailer() {
  return (
    <div className="main">
      <h1 id="basic-header">Watch Trailer</h1>
      <div className="basic-container">
        <p>
          Watch the trailer for LGBT TERRORISTS, a documentary exposing the
          lies of the LGBTQ+ movement.
        </p>
        <div className="watch-page-container">
          <div className="landing-page-video">
             <video
              controls
              src={VideoSrc}
            ></video>
            {/* <video controls className="video-player" width="1080" height="480">
              <source src={VideoSrc} type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
}
