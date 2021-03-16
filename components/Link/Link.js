import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Link = ({ href, children, className, style }) => {
	const router = useRouter();

	return (
		<div style={style ?? {}} className={className} onClick={() => router.push(href)}>
			{children}
		</div>
	);
};

export default Link;

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
    style: PropTypes.object
};
