import React from "react";
import "./Header.scss";
import { getDominantColor } from "../lib/utils";

export default function Header() {

  const profilePictureRef = React.useRef<HTMLImageElement>(null);
  
  React.useEffect(() => {
    (async () => {
      if(!profilePictureRef.current) return;
      const color = await getDominantColor(profilePictureRef.current);
      profilePictureRef.current.style.filter = `drop-shadow(0 0 180px ${color})`;
    })();
  }, []);
  
  return (
    <header>
      <div className="cover">
        <div className="nsl">
          <img className="profile-picture" ref={profilePictureRef} src="pp.jpeg" />
        </div>
        <div className="profile-description">
          <h1>
            <span>Andrei Hagi&nbsp;</span>
            <span className="aka">aka Haginus</span>
          </h1>
          <h2 className="role">Software Engineer</h2>
          <h3 className="location">Bucharest, RO 🇷🇴</h3>
        </div>
      </div>
    </header>
  )
}