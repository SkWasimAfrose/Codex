import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function Countries() {
  return (
    <>
      <Helmet><title>EduGuru | Countries</title></Helmet>
      <PageHero title="Countries" subtitle="EduGuru Countries page with responsive Tailwind layout and SEO-ready structure." imageKeyword="Countries,education" />
    </>
  );
}
