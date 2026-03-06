import { Card } from '../ui/Card';

export const TestimonialCard = ({ item }) => (
  <Card>
    <p className="text-sm italic">“{item.testimonial_text}”</p>
    <p className="mt-4 font-semibold">{item.student_name}</p>
    <p className="text-xs text-slate-500">Admitted to {item.university_admitted}</p>
  </Card>
);
