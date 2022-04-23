import { nanoid } from "nanoid";
import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";
import PropTypes from "prop-types";

const useStore = create(
  persist((set) => ({
    questions: [
      {
        id: nanoid(),
        question: "",
        correct_answer: "",
        type: "",
        difficulty: "",
        category: "",
        incorrect_answers: [],
        isBookmarked: false,
      },
    ],
    checked: false,
    // toggleBookmark: (index) =>
    //   set(
    //     produce((draft) => {
    //       draft[index].isBookmarked = !draft[index].isBookmarked;
    //     })
    //   ),
    addQuestion: (question, correct_answer, tags = []) =>
      set(
        produce((draft) => {
          draft.push({
            id: nanoid(),
            question,
            correct_answer,
            category: tags[0],
            type: tags[1],
            difficulty: tags[2],
          });
        })
      ),
    toggleChecked: () => set((state) => (state.checked = !state.checked)),
  }))
);
export default useStore;

useStore.prototype = {
  question: PropTypes.string,
  correct_answer: PropTypes.string,
  type: PropTypes.string,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  incorrect_answers: PropTypes.array,
  isBookmarked: PropTypes.bool,
};
