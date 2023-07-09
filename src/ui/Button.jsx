import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full disabled:cursor-not-allowed hover:bg-yellow-300 text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2";

  const styles = {
    primary: `${base} px-4 py-3 sm:px-6 sm:py-4`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary:
      "inline-block text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 tracking-wide uppercase transition-colors duration-300 border-2 border-stone-300 rounded-full disabled:cursor-not-allowed hover:bg-stone-400 hover:text-stone-700 text-stone-400 focus:outline-none focus:ring focus:ring-stone-300 focus:bg-stone-400 focus:text-stone-700 focus:ring-offset-2",
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-xs`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
