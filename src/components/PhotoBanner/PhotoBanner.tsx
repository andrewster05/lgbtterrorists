import * as React from "react";
import Pastor from "../../assets/PastorAnderson.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const PhotoBanner = (): JSX.Element => {
  return (
    <div className='photo-banner-container'>
      {/* {Placeholder IMG} */}
      <img className='pastor-img' src={Pastor} alt="pastor" />
      <div className='center-text-container'>
        <h3 className='film-name'>LGBT TERRORISTS</h3>
        <div className='watch-container'>
          <FontAwesomeIcon icon={faPlayCircle} style={{ fontSize: "32px" }} />
          &nbsp;&nbsp;
          <a className='watch-text' href="/trailer">Watch Trailer</a>
        </div>
      </div>
    </div>
  );
};

export default PhotoBanner;
