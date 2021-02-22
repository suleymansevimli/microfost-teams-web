import * as React from 'react';

function SvgActivity(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 18 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9 .996a7.49 7.49 0 017.496 7.25l.004.25v4.097l1.38 3.156a1.249 1.249 0 01-1.145 1.751L12 17.502a3 3 0 01-5.995.176L6 17.499l-4.725.001a1.25 1.25 0 01-1.147-1.748L1.5 12.594V8.496c0-4.155 3.352-7.5 7.5-7.5zM10.5 17.5l-3 .003a1.5 1.5 0 002.993.144l.007-.147zM9 2.496c-3.32 0-6 2.674-6 6v4.41L1.656 16h14.697L15 12.907V8.509l-.004-.225A5.988 5.988 0 009 2.496z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgActivity;
