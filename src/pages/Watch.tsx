import * as React from "react";

export default function Watch() {
  const myComponentStyle = {};

  return (
    <div className="main">
      <h1 id="basic-header">LGBT Terrorists</h1>
      <div className="basic-container">
        <p>
          Watch the full documentary for LGBT Terrorists, a documentary exposing the
          lies of the LGBTQ+ movement.
        </p>
        <div className="watch-page-container">
          <div className="landing-page-video">
          <iframe src="https://embed.godresource.com/#documentaries?streamUrlKey=29c38f9ab96" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
