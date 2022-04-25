import { StyledBookmark } from "./Bookmark.styled.js";
import { useState } from "react";

export default function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState("false");

  return (
    <button
      onClick={() => {
        setIsBookmarked(!isBookmarked);
        console.log("hallo");
      }}
    >
      <StyledBookmark />
    </button>
  );
}
