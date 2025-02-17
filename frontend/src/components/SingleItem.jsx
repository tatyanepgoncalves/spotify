import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import "../styles/singleItem.scss";

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <article className="imageBtn">
        <picture className="btnImage">
          <img src={image} alt={`Imagem do ${name}`} />
        </picture>
        <FontAwesomeIcon icon={faCirclePlay} className="singleIcon" />
      </article>

      <article className="singleText">
        <div className="twoLines">
          <p>{name}</p>
        </div>
        <p className="type">{artist ?? "Artista"}</p>
      </article>
    </Link>
  );
};

export default SingleItem;
