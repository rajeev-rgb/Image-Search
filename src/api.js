import axios from "axios";

const searchImage = async (searchText) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID 9BmRTOVlApPSWOBfkumFgaCro7X-mtcjk6MKedig9wo`,
    },
    params: { query: searchText },
  });

  return response.data.results;
};

export default searchImage;
