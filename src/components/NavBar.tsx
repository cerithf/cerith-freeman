import React from "react";
import { useLocation } from "react-router-dom";
import useIsViewportLessThan from "../hooks/useIsViewportLessThan";
import { BREAKPOINTS } from "../utils/constants";

function NavBar() {
  const PageArray = ["about", "projects", "work", "education"];
  const Pages = PageArray.map((page) => {
    return { name: page, path: "/" + page };
  });

  return (
    <>
      <ul
        className={useLocation().pathname == "/" ? "homePage NavBar" : "NavBar"}
      >
        {Pages.map((page) => (
          <li className={useLocation().pathname == page.path ? "active" : ""}>
            <a href={page.path}>
              {page.name == "education" &&
              useIsViewportLessThan(BREAKPOINTS.mobile) &&
              useLocation().pathname != "/"
                ? "edu"
                : page.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;
