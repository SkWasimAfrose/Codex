import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';

export default function About() {
  return (
    <>
      <Helmet><title>EduGuru | About</title></Helmet>
      <PageHero title="About" subtitle="EduGuru About page with responsive Tailwind layout and SEO-ready structure." imageKeyword="About,education" />
    </>
  );
}
