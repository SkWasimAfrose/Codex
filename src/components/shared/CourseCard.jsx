import { Card } from '../ui/Card';

export const CourseCard = ({ course }) => (
  <Card>
    <h3 className="text-lg font-bold">{course.title}</h3>
    <p className="mt-1 text-sm text-slate-500">{course.category} • {course.level}</p>
    <p className="mt-3 text-sm">Duration: {course.duration}</p>
    <p className="text-sm">Avg Salary: {course.avg_salary}</p>
  </Card>
);
