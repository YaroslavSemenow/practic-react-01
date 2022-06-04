import PropTypes from "prop-types";

export default function Button({ onToggle, isShown }) {
  return <button onClick={onToggle}>{isShown ? "Hide" : "Show"} movies</button>;
}

Button.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};
