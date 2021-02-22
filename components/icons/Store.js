import * as React from 'react';

function SvgStore(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15.492 1.33l3.179 3.179a2.25 2.25 0 010 3.182l-2.423 2.423A2.501 2.501 0 0118 12.5v5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 010 17.5v-13A2.5 2.5 0 012.5 2h5c1.121 0 2.07.738 2.387 1.754L12.31 1.33a2.25 2.25 0 013.182 0zM8 12H2v5.5a.5.5 0 00.5.5H8v-6zm7.5 0H10v6h5.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm-4.06-2L10 8.56V10h1.44zM7.5 4h-5a.5.5 0 00-.5.5V10h6V4.5a.5.5 0 00-.5-.5z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgStore;
