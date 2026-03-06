export const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    {subtitle ? <p className="mt-2 text-slate-500">{subtitle}</p> : null}
  </div>
);
