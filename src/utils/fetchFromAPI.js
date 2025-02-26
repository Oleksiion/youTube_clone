import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "2899c37f5cmsh8797e09b310ca1bp1111fejsn91d76b4643b6",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "Cache-Control": "no-cache",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//ЭТО РАБОТАЕТ

// const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "2899c37f5cmsh8797e09b310ca1bp1111fejsn91d76b4643b6",
//     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const response = await fetch(`${BASE_URL}/${url}`, options);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);

//   return data;
// };
