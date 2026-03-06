import { Card } from '../ui/Card';

export const UniversityCard = ({ university }) => (
  <Card>
    <h3 className="text-lg font-bold">{university.name}</h3>
    <p className="text-sm text-slate-500">{university.city}, {university.country}</p>
    <p className="mt-2 text-sm">QS-style ranking: #{university.ranking}</p>
  </Card>
);
