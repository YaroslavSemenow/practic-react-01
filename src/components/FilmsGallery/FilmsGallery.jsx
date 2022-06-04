import PropTypes from "prop-types";
import FilmsGalleryItem from "./FilmsGalleryItem/FilmsGalleryItem";

export default function FilmsGallery({ movies, onToggleWatched }) {
  return (
    <ul>
      {movies.map(({ id, title, img, isWatched }) => (
        <FilmsGalleryItem
          key={id}
          id={id}
          title={title}
          img={img}
          isWatched={isWatched}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </ul>
  );
}

FilmsGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      isWatched: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleWatched: PropTypes.func.isRequired,
};
