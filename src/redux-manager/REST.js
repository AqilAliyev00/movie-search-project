export const fetchMovieList = async (payload) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${payload}&apikey=f695e887`
  );
  const data = await response.json();

  return data;
};

export const saveFetchMovieList = async (payload) => {
  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data;
};

export const getFavoritmovieId = async (listId) => {
  const response = await fetch(
    `https://acb-api.algoritmika.org/api/movies/list/${listId}`
  );
  const data = await response.json();

  return data;
};

export const getMoviesInfo = async (filmId) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${filmId}&apikey=f695e887`
  );
  const data = await response.json();

  return data;
};
