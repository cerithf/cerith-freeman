import React, { useState } from "react";
import KnittingData from "../data/knitting_projects.json";

const Knitting = () => {
  function displayDate(givenDate: string) {
    return new Date(givenDate).toDateString();
  }
  return (
    <div className="KnittingPage">
      <h1>Knitting</h1>
      <p>This is a page to show off my knitting projects.</p>
      <div className="knittingProjectsContainer">
        {KnittingData.map((item) => {
          return (
            <div className="knittingProject">
              <a href={item.url}>
                <img src={"../src/assets/" + item.img + ".jpeg"} />
              </a>
              <ul>
                <li>
                  <b>Name:</b> {item.name}
                </li>
                <li>
                  <b>Start:</b> {displayDate(item.start)}
                </li>
                <li>
                  <b>End:</b> {displayDate(item.end)}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Knitting;
