import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full sm:px-6 sm:py-4 disabled:cursor-not-allowed hover:bg-yellow-300 text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
