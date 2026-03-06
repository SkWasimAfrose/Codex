import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function UniversityDetail() {
  return (
    <>
      <Helmet><title>EduGuru | UniversityDetail</title></Helmet>
      <PageHero title="UniversityDetail" subtitle="EduGuru UniversityDetail page with responsive Tailwind layout and SEO-ready structure." imageKeyword="UniversityDetail,education" />
    </>
  );
}
