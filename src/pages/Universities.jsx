import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function Universities() {
  return (
    <>
      <Helmet><title>EduGuru | Universities</title></Helmet>
      <PageHero title="Universities" subtitle="EduGuru Universities page with responsive Tailwind layout and SEO-ready structure." imageKeyword="Universities,education" />
    </>
  );
}
