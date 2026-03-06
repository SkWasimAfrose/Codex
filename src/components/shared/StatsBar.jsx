import CountUp from 'react-countup';

const stats = [
  { label: 'Students Counselled', end: 12500, suffix: '+' },
  { label: 'University Partners', end: 300, suffix: '+' },
  { label: 'Visa Success', end: 98, suffix: '%' },
  { label: 'Destinations', end: 8, suffix: '+' },
];

export const StatsBar = () => (
  <div className="grid grid-cols-2 gap-4 rounded-xl bg-white p-6 shadow md:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.label}>
        <p className="text-2xl font-extrabold text-brand">
          <CountUp end={stat.end} duration={2} />
          {stat.suffix}
        </p>
        <p className="text-sm text-slate-500">{stat.label}</p>
      </div>
    ))}
  </div>
);
