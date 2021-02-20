import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.75 0A3.25 3.25 0 0118 3.25v11.5A3.25 3.25 0 0114.75 18H3.25A3.25 3.25 0 010 14.75V3.25A3.25 3.25 0 013.25 0h11.5zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 001.75-1.75V5.5zm-11.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm4.25 0A1.25 1.25 0 119 14a1.25 1.25 0 010-2.5zm-4.25-4a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM9 7.5A1.25 1.25 0 119 10a1.25 1.25 0 010-2.5zm4.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1.5-6H3.25A1.75 1.75 0 001.5 3.25V4h15v-.75a1.75 1.75 0 00-1.75-1.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendar;
