import { Link } from "react-router-dom";
import clasess from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={clasess.header}>
      <div className={clasess.logo}>React Router</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeatUp</Link>
          </li>
          <li>
            <Link to="/new">NewMeatUp</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <a href="https://www.you.com" target={"_blank"} rel="noreferrer">
              External Link
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
