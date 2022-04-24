import { StyledBookmark } from "./Bookmark.styled.js";
import { useState } from "react";

export default function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState("false");

  return (
    <StyledBookmark
      onClick={() => {
        setIsBookmarked(!isBookmarked);
      }}
    />
  );
}
