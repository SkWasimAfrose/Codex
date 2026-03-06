import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function CourseDetail() {
  return (
    <>
      <Helmet><title>EduGuru | CourseDetail</title></Helmet>
      <PageHero title="CourseDetail" subtitle="EduGuru CourseDetail page with responsive Tailwind layout and SEO-ready structure." imageKeyword="CourseDetail,education" />
    </>
  );
}
