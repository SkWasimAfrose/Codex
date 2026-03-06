import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function Courses() {
  return (
    <>
      <Helmet><title>EduGuru | Courses</title></Helmet>
      <PageHero title="Courses" subtitle="EduGuru Courses page with responsive Tailwind layout and SEO-ready structure." imageKeyword="Courses,education" />
    </>
  );
}
