export const Button = ({ children, className = '', ...props }) => (
  <button className={`rounded-xl bg-brand px-4 py-2 text-white shadow-md transition hover:scale-[1.02] ${className}`} {...props}>
    {children}
  </button>
);
