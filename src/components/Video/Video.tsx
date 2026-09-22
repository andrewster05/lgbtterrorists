import * as React from "react";
import { useHistory } from "react-router-dom";
import VideoPoster from "../../assets/lgbt_terrorists_poster.jpg";

export default function Video(): JSX.Element {
    const history = useHistory()
    
    function handleWatchNow (){
        history.push("/watch")
    }

    return (
        <div className="video-container">
            <img src={VideoPoster} className="main-poster" alt="LGBT TERRORISTS Trailer" />
            <div className="landing-page-image">
                {/* <video className="video" src="https://video.wixstatic.com/video/9c608a_ab0cd13143ac4839ac48e1cb88f55425/1080p/mp4/file.mp4" /> */}

                {/* <video crossOrigin="anonymous" className="video" loop muted autoPlay src={VideoSrc}></video> */}
                {/* <video crossOrigin="anonymous" className="video" loop muted autoPlay src="https://video.wixstatic.com/video/9c608a_ab0cd13143ac4839ac48e1cb88f55425/1080p/mp4/file.mp4"></video> */}
                {/* <div className="video-filter"></div>
                <div className="video-overlay"></div> */}
                <h1 className="video-title ops-hide">LGBT <span className="video-title-sodomite">TERRORISTS</span></h1>
                <h2 className="video-subtitle ops-hide">And we know that the whole world lieth in wickedness.</h2>
                <div className="video-action-container">
                    <button className="video-action-button" onClick={handleWatchNow}>Watch Now</button>
                </div>
                {/* <iframe
                    id="youtube"
                    src="https://www.youtube.com/embed/ZeGHhA9i7vk"
                    frameBorder="0"
                    allowFullScreen
                    title="LGBT Terrorists"
                    width="560"
                    height="349"
                /> */}
            </div>
            <div className="landing-page-background" />
        </div>
    )
}