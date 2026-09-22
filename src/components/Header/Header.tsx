import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Header = (): JSX.Element => {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const CloseMenu = () => {
    setActive(false);
  };

  useEffect(() => {

    const handleResize = () => {
      CloseMenu();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div className={!isActive ? "header-container" : "header-container hc-drop-down"}>
      <Link to='/' className='header-title-tag'>
        <h1 className='header-title'><span className="header-title-sodomite">LGBT</span> TERRORISTS</h1>
      </Link>
      <div className={isActive ? "menu-popout" : "menu-popout close"} onClick={ToggleClass}>
        {!isActive ? <FaBars /> : <FaWindowClose />}
      </div>
      <div className={!isActive ? "header-tabs" : "header-tabs drop-down"}>
        <Link to='/about' onClick={CloseMenu}>ABOUT</Link>
        <Link to='/faq' onClick={CloseMenu}>FAQ</Link>
        <Link to='/news' onClick={CloseMenu}>NEWS</Link>
        <Link to='/bible' onClick={CloseMenu}>BIBLE</Link>
        {/* <Link to='/research'>RESEARCH</Link> */}
        <Link className="watch-film" to='/watch' onClick={CloseMenu}>WATCH FILM</Link>
        {/* <Link to='/trailer' onClick={CloseMenu}>WATCH TRAILER</Link> */}
      </div>
    </div>
  );
};

export default Header;
