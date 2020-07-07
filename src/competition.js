import React from "react";

const Competition = props => (
	let props = {
		title:"-",
		closingdate:"-"
	}
	<competition className="competition">
		<h1>
			<span>{props.title}</span>
		</h1>
		<h3 className="closing-date">
			<span>{props.closingdate}</span>
		</h3>
	</competition>
);

export default Competition;