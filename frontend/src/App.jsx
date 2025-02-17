import { Header } from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

const App = () => {
  return (
    <>
     <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song:id" element={<Song />} />
      </Routes>
    </>
  );
};

export default App;
