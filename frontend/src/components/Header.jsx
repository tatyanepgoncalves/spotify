import logoSpotify from "../assets/images/spotify-logo.png";
import { Link } from "react-router";
import h from "../styles/header.module.scss";

export const Header = () => {
  return (
    <header className={h.header}>
      <Link to="/" className={h.logo}>
        <img src={logoSpotify} alt="Logo Spotify" />
      </Link>

      <Link to="/" className={h.logoLink}>
        <h1>Spotify</h1>
      </Link>
    </header>
  );
};