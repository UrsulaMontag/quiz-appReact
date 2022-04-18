import homeIcon from "../img/home_black_24dp.svg";
import bookmarkIcon from "../img/bookmark_black_24dp.svg";
import createIcon from "../img/edit_note_black_24dp.svg";
import profileIcon from "../img/account_box_black_24dp.svg";

export default function Footer() {
  return (
    <article>
      <nav>
        <button>
          <img src={homeIcon} alt="switch to home-site" />
        </button>
        <button>
          <img src={bookmarkIcon} alt="switch to bookmark-site" />
        </button>
        <button>
          <img src={createIcon} alt="switch to create-question-site" />
        </button>
        <button>
          <img src={profileIcon} alt="switch to your profile-site" />
        </button>
      </nav>
    </article>
  );
}
