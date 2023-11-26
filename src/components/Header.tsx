import React from "react";
import styles from "./Header.module.scss";
import { Fab, Tooltip, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
import DropShadowImage from "./DropShadowImage";

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.cover}>
        <div className="nsl">
          <DropShadowImage 
            className={styles["profile-picture"]} 
            width={200}
            height={200}
            priority
            src="/images/pp.jpeg" 
            alt="Profile picture" 
          />
        </div>
        <div className={styles["profile-description"]}>
          <h1>
            <span>Andrei Hagi </span>
            <span className={styles.aka}>aka&nbsp;Haginus</span>
          </h1>
          <h2 className={styles.role}>Software Engineer</h2>
          <h3 className={styles.location}>Bucharest, RO 🇷🇴</h3>
          <div className={styles.social}>
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
        {text && (
          <Typography sx={{ textTransform: 'none', ml: 0.25, fontSize: '0.8rem', display: { xs: 'none', md: 'unset' } }}>
            {text}
          </Typography>
        )}
      </Fab>
    </Tooltip>
  )
}