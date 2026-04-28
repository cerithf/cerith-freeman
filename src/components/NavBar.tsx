import React from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const PageArray = ["home", "about", "projects", "work", "education"];
  const Pages = PageArray.map((page) => {
    return { name: page, path: "/" + page };
  });
  useLocation().pathname == "/" ? Pages.shift() : (Pages[0]["path"] = "/");

  return (
    <>
      <ul
        className={useLocation().pathname == "/" ? "homePage NavBar" : "NavBar"}
      >
        {Pages.map((page) => (
          <li className={useLocation().pathname == page.path ? "active" : ""}>
            <a href={page.path}>{page.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;
