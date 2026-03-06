export const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl bg-white p-5 shadow-md transition hover:scale-[1.02] ${className}`}>{children}</div>
);
