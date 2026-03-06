import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function CountryDetail() {
  return (
    <>
      <Helmet><title>EduGuru | CountryDetail</title></Helmet>
      <PageHero title="CountryDetail" subtitle="EduGuru CountryDetail page with responsive Tailwind layout and SEO-ready structure." imageKeyword="CountryDetail,education" />
    </>
  );
}
