export default function Button({ state, stateFunc, className }) {
  //   const labeling = () => {
  //     if (className === "Button__answerButton") {
  //       state ? "hide answer" : "show answer";
  //     }
  //   };

  return (
    <>
      <button
        onClick={() => {
          stateFunc(!state);
        }}
      >
        {className === "Button__answerButton"
          ? state
            ? "hide answer"
            : "show answer"
          : className === "Button__logout" && state
          ? "logout"
          : "login"}
      </button>
    </>
  );
}
