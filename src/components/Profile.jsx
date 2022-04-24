//import { useState } from "react";
import { StyledProfile } from "./Profile.styled";
import profilePic from "../img/danie-franco-l9I93gZKTG4-unsplash_square.jpg";

export default function Profile() {
  return (
    <StyledProfile>
      <article>
        <figure>
          <img src={profilePic} alt="famous profile avatar" />
          <figcaption>
            <h2>Eugenie Schlotterbeck</h2>
          </figcaption>
        </figure>
        <p>
          Das Leben ist kein Ponyhof. Lerne jeden Tag - denn was in deinem Kopf
          ist, das kann dir keiner nehmen.
        </p>
        <button></button>
      </article>
      <aside>
        <h2>Favorites</h2>
        <ul>
          <li>coding</li>
          <li>nature</li>
          <li>books</li>
          <li>coffee</li>
        </ul>
      </aside>
    </StyledProfile>
  );
}
