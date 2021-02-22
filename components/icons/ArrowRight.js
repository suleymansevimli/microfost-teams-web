import * as React from 'react';

function SvgArrowRight(props) {
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
				d="M.508.5a.477.477 0 00-.352.14.464.464 0 00-.148.352c0 .14.05.26.148.36L4.805 6 .156 10.64a.48.48 0 00-.148.352c0 .136.05.255.148.36.094.098.211.148.352.148a.48.48 0 00.351-.148l5-5a.49.49 0 00.149-.36.48.48 0 00-.149-.351l-5-5A.477.477 0 00.508.5z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgArrowRight;
