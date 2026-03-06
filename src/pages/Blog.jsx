import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function Blog() {
  return (
    <>
      <Helmet><title>EduGuru | Blog</title></Helmet>
      <PageHero title="Blog" subtitle="EduGuru Blog page with responsive Tailwind layout and SEO-ready structure." imageKeyword="Blog,education" />
    </>
  );
}
