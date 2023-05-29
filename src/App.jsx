import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImage from "./api";

function App() {
  const [image, setImage] = useState([]);

  const handleSubmit = async (searchText) => {
    const result = await searchImage(searchText);
    setImage(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList image={image} />
    </>
  );
}

export default App;
