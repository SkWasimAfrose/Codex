import { Card } from '../ui/Card';

export const CountryCard = ({ country }) => (
  <Card>
    <p className="text-3xl">{country.flag_emoji}</p>
    <h3 className="mt-2 text-xl font-bold">{country.name}</h3>
    <p className="mt-2 text-sm text-slate-600">{country.overview}</p>
  </Card>
);
