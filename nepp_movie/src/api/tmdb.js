// src/api/tmdb.js
import axios from "axios";

export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d57203ff00ea90c015eca21638f4116e",
  },
});

// tmdbAxios.get("trending/tv/week")
//  => "https://api.themoviedb.org/3/"
