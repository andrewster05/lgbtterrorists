import React from "react";
import Fire from "assets/fire.jpg";
import Bible from "assets/bible.jpg";
import BLM from "assets/BLM.jpg";
import Trees from "assets/trees.jpg";

const ColumnsBanner = () => {
  return (
    <div className='columns-banner-container'>
      {/* <div className='column-wrapper'>
        <p className='column-text'><a href="/trailer">TRAILER</a></p>
        <img className='column' src={Fire} alt="fire" />
      </div> */}
      <div className='column-wrapper'>
        <p className='column-text'><a href="/bible">BIBLE</a></p>
        <img className='column' src={Bible} alt="bible" />
      </div>
      <div className='column-wrapper'>
        <p className='column-text'><a href="/news">NEWS</a></p>
        <img className='column' src={BLM} alt="blm" />
      </div>
      <div className='column-wrapper'>
        <p className='column-text'><a href="/faq">FAQS</a></p>
        <img className='column' src={Trees} alt="trees" />
      </div>
    </div>
  );
};

export default ColumnsBanner;
