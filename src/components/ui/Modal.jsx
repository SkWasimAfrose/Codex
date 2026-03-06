export const Modal = ({ open, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <h3 className="mb-3 text-lg font-bold">{title}</h3>
        {children}
      </div>
    </div>
  );
};
