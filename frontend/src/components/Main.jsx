import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs"
import ItemList from "./ItemList";
import m from "../styles/main.module.scss";

const Main = () => {
  return (
    <main className={m.main}>
      <ItemList 
        title="Artistas populares"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      <ItemList 
        title="Músicas populares"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </main>
  );
};

export default Main;
