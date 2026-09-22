import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = (): JSX.Element => {
  const items = [
    { name: "Stedfast Baptist Church", email: "stedfastbaptistkjv@gmail.com", phone: "(469) 454-0626" },
    { name: "Anchor Baptist Church", email: "abckjv1611@gmail.com", phone: "(405) 367-4002" },
    { name: "Faithful Word Baptist Church", email: "faithfulword1@gmail.com", phone: "(602) 456-1049" },
    { name: "Contact", email: "sodomitedeception@gmail.com" }
  ];

  const icons = [
    { Component: <FontAwesomeIcon icon={faYoutube} />, href: "https://www.youtube.com/@TheBaptistBias" },
    { Component: <FontAwesomeIcon icon={faFacebook} />, href: "https://www.facebook.com/bannedpastor/" },
    { Component: <FontAwesomeIcon icon={faTwitter} />, href: "https://x.com/bannedpastor" },
    { Component: <FontAwesomeIcon icon={faInstagram} />, href: "https://www.instagram.com/baptistbias/" }
  ]

  return (
    <footer>
      <h2>Representation</h2>
      <div className="items">
        {items.map(({ name, email, phone }) => (
          <div className="item" key={name}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        ))}
      </div>
      {/* <p>A project by <a target="_blank" href="http://sbckjv.com/">Stedfast Baptist Church</a></p> */}
      <div className="bottom">
        <p>Site inspired by Leviticus 20:13</p>
        <ul className="icons">
          {icons.map(({ href, Component }) => (
            <li className="icon" key={href}><a href={href} target="_blank" rel="noreferrer">{Component}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
