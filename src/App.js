import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery.js";
import Searchbar from "./Components/Searchbar.js";
import AlbumView from "./Components/AlbumView";
import ArtistView from "./Components/ArtistView";

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for Music");
  const [data, setData] = useState([]);

  const API_URL = "https://itunes.apple.com/search?term=";

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`;
        const response = await fetch(API_URL + search);
        const resData = await response.json();
        if (resData.results.length > 0) {
          return setData(resData.results);
        } else {
          return setMessage("Not Found");
        }
      };

      fetchData();
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };
  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Searchbar handleSearch={handleSearch} />
                <Gallery data={data} />
              </Fragment>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
