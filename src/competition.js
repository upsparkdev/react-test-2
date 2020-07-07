import React from "react";

const Competition = ({title,closingdate}) => (
	<competition className="competition">
		<h1>
			<span>{title}</span>
		</h1>
		<h3 className="closing-date">
			<span>{closingdate}</span>
		</h3>
	</competition>
);

export default Competition;