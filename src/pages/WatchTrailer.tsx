import Video from "components/Video/Video";

export default function WatchTrailer() {
  return (
    <div className="main">
      <h1 id="basic-header">Watch Trailer</h1>
      <div className="basic-container">
        <p>
          The trailer is no longer available. Watch the full documentary instead.
        </p>
        <div className="watch-page-container">
          <Video />
        </div>
      </div>
    </div>
  );
}
