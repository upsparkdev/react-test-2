import React from "react";

const Competition = props => (
  <header className="competition">
    <h1>
	  <span>{props.title}</span>
    </h1>
    <h3 className="closing-date">
      <span>{props.closing-date}</span>
    </h3>
  </header>
);

export default Competition;