import React from "react";
import { FaTerminal } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const pwgen = () => {
  document.location.href = "https://github.com/codenor/pwgen";
};

const website = () => {
  document.location.href = "https://github.com/codenor/arbnor.xyz";
};

function Cards() {
  return (
    <div className="row-container">
      <div>
        <p>Some of my projects</p>
      </div>
      <div className="column">
        <div className="card" onClick={pwgen}>
          <div className="centered-icon">
            <h1>
              <FaTerminal className="icon" />
            </h1>
            <h2>pwgen</h2>
            <empty></empty>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card" onClick={website}>
          <div className="centered-icon">
            <h1>
              <BsGlobe className="icon" />
            </h1>
            <h2>arbnor.xyz</h2>
            <empty></empty>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
