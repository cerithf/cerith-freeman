import React from "react";
import { useLocation } from "react-router-dom";
import useIsViewportLessThan from "../hooks/useIsViewportLessThan";
import { BREAKPOINTS } from "../utils/constants";
import { Link } from "react-router";
import "../styles/components/nav_bar.scss";

function NavBar() {
  const PageArray = ["about", "projects", "work", "education"];
  const Pages = PageArray.map((page) => {
    return { name: page, path: "/" + page };
  });

  return (
    <nav>
      <ul
        className={useLocation().pathname == "/" ? "homePage NavBar" : "NavBar"}
      >
        {Pages.map((page) => (
          <li className={useLocation().pathname == page.path ? "active" : ""}>
            <Link to={page.path} viewTransition>
              {page.name == "education" &&
              useIsViewportLessThan(BREAKPOINTS.mobile) &&
              useLocation().pathname != "/"
                ? "edu"
                : page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
