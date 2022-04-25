import PropTypes from "prop-types";

export default function Button({ className, toggleCheck, isChecked }) {
  return (
    <>
      <button
        onClick={() => {
          toggleCheck();
        }}
      >
        {className === "Button__answerButton"
          ? isChecked
            ? "hide answer"
            : "show answer"
          : className === "Button__logout" && isChecked
          ? "logout"
          : "login"}
      </button>
    </>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  toggleCheck: PropTypes.func,
  isChecked: PropTypes.bool,
};
