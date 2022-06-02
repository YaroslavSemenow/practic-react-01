export const mapper = (movies) =>
  movies.map(({ id, title, backdrop_path: img }) => ({
    id,
    title,
    img,
  }));
