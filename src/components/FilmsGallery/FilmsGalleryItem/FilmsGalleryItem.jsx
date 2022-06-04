import PropTypes from "prop-types";

export default function FilmsGalleryItem({
  title,
  img,
  id,
  isWatched,
  onToggleWatched,
}) {
  return (
    <li id={id}>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
      <p onClick={() => onToggleWatched(id)}>Watched: {isWatched.toString()}</p>
    </li>
  );
}

FilmsGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isWatched: PropTypes.bool.isRequired,
  onToggleWatched: PropTypes.func.isRequired,
};
