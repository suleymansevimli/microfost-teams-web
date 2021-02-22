import * as React from 'react';

function SvgArrowLeft(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 7 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.492.5c.14 0 .258.047.352.14.099.094.148.212.148.352 0 .14-.05.26-.148.36L2.195 6l4.649 4.64a.48.48 0 01.148.352c0 .136-.05.255-.148.36a.464.464 0 01-.352.148.48.48 0 01-.351-.148l-5-5a.49.49 0 01-.149-.36.48.48 0 01.149-.351l5-5A.477.477 0 016.492.5z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgArrowLeft;
