export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="rounded-md px-4 py-2 bg-stone-700 text-stone-50 text-sm md:text-base hover:bg-stone-600 hover:text-stone-200"
    >
      {children}
    </button>
  );
};
