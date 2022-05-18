export const fetchMovieList = async (payload) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${payload}&apikey=f695e887`
  );
  const data = await response.json();

  return data;
};
