import { nanoid } from "nanoid";
import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";
import PropTypes from "prop-types";

const useStore = create(
  persist((set) => ({
    questions: [],

    addQuestion: (question, correct_answer, tags = []) =>
      set(
        produce((draft) => {
          draft.questions.push({
            id: nanoid(),
            question,
            correct_answer,
            category: tags[0],
            type: tags[1],
            difficulty: tags[2],
          });
        })
      ),
    fetchQuestions: async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        set({ questions: data.results });
      } catch (error) {
        console.error(`Upps das war ein Fehler: ${error}`);
      }
    },
  }))
);
export default useStore;

useStore.propTypes = {
  question: PropTypes.string,
  correct_answer: PropTypes.string,
  type: PropTypes.string,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  incorrect_answers: PropTypes.array,
  isBookmarked: PropTypes.bool,
};
