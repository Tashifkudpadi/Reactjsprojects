import React from "react";
import data from "./data.json";

function list() {
  return (
    <div>
      {data.map((d) => {
        return (
          <ul>
            <li>{d.id}</li>
            <li>
              <ul>
                <li></li>
              </ul>
            </li>
            <li></li>
          </ul>
        );
      })}
    </div>
  );
}

export default list;
