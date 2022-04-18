import { StyledBookmark } from "./Bookmark.styled.js";

export default function Bookmark({ isBookmarked, setIsBookmarked }) {
  return (
    <StyledBookmark
      onClick={() => {
        setIsBookmarked(!isBookmarked);
      }}
    />
  );
}
