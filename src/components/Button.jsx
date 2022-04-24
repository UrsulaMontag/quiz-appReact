import useStore from "./useStore";

// eslint-disable-next-line react/prop-types
export default function Button({ className }) {
  const checked = useStore((state) => state.checked);
  const toggleAnswer = useStore((state) => state.toggleChecked);
  return (
    <>
      <button
        onClick={() => {
          toggleAnswer();
        }}
      >
        {className === "Button__answerButton"
          ? checked
            ? "hide answer"
            : "show answer"
          : className === "Button__logout" && checked
          ? "logout"
          : "login"}
      </button>
    </>
  );
}
