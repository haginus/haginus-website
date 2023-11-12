import React from "react";
import "./Header.scss";
import { getDominantColor } from "../lib/utils";
import { Fab, Tooltip, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";

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
          <div className="social">
            <SocialLink 
              title="GitHub" 
              icon={<GitHub />} 
              link="https://github.com/haginus"
            />
            <SocialLink 
              title="LinkedIn"
              icon={<LinkedIn />} 
              link="https://linkedin.com/in/haginus"
            />
            <SocialLink 
              title="Email"
              icon={<Email />} 
              text="hagiandrei.ah@gmail.com"
              link="mailto:hagiandrei.ah@gmail.com"
            />
            <SocialLink 
              title="Phone"
              icon={<Phone />} 
              text="+40764070525"
              link="tel:+40764070525"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

interface SocialLinkProps {
  title: string;
  icon: React.ReactElement;
  link: string;
  text?: string;
}

function SocialLink({ title, icon, link, text }: SocialLinkProps) {
  return (
    <Tooltip title={title}>
      <Fab
        href={link}
        target="_blank" 
        size="small" 
        variant={text ? 'extended' : 'circular'}
        sx={{ height: 40 }}
      >
        {icon}
        {text && <Typography sx={{ textTransform: 'none', ml: 0.25, fontSize: '0.8rem' }}>{text}</Typography>}
      </Fab>
    </Tooltip>
  )
}