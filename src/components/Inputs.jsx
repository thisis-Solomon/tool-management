import { forwardRef } from "react";

const Input = forwardRef(function Inputs({ label, textarea, ...props }, ref) {
  const classes =
    "bg-stone-300 rounded-sm px-2 py-1 focus:bg-stone-200 w-full focus:outline-none";
  return (
    <p className="mb-4">
      <label
        className="text-stone-400 uppercase font-bold text-sm block"
        htmlFor={label}
      >
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={classes} ref={ref} />
      ) : (
        <input className={classes} {...props} ref={ref} />
      )}
    </p>
  );
});

export default Input;
