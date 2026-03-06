export const PageHero = ({ title, subtitle, imageKeyword = 'education' }) => (
  <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand to-accent p-10 text-white">
    <img className="absolute inset-0 h-full w-full object-cover opacity-20" src={`https://source.unsplash.com/1600x900/?${imageKeyword}`} alt={`${title} hero`} />
    <div className="relative z-10 max-w-2xl">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="mt-3 text-slate-100">{subtitle}</p>
    </div>
  </section>
);
