import * as React from 'react';

function SvgMore(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 16 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.75 2a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM9.75 2a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM14 3.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgMore;
