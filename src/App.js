import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery.js";
import Searchbar from "./Components/Searchbar.js";
import AlbumView from "./Components/AlbumView";
import ArtistView from "./Components/ArtistView";
import Spinner from "./Components/Spinner";
import { createResource as fetchData } from "./helper";
function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      document.title = `${searchTerm} Music`;
      console.log(fetchData(searchTerm));
      setData(fetchData(searchTerm));
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;
