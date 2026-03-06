import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/shared/SectionHeader';
import { StatsBar } from '../components/shared/StatsBar';
import { CountryCard } from '../components/shared/CountryCard';
import { CourseCard } from '../components/shared/CourseCard';
import { UniversityCard } from '../components/shared/UniversityCard';
import { BlogCard } from '../components/shared/BlogCard';
import { TestimonialCard } from '../components/shared/TestimonialCard';
import { useCountries } from '../hooks/useCountries';
import { useCourses } from '../hooks/useCourses';
import { useUniversities } from '../hooks/useUniversities';
import { useBlogs } from '../hooks/useBlogs';
import { useTestimonials } from '../hooks/useTestimonials';
import { BRAND, SEO } from '../lib/constants';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function Home() {
  const { data: countries = [] } = useCountries();
  const { data: courses = [] } = useCourses();
  const { data: universities = [] } = useUniversities();
  const { data: blogs = [] } = useBlogs();
  const { data: testimonials = [] } = useTestimonials();

  return (
    <>
      <Helmet>
        <title>{SEO.defaultTitle}</title>
        <meta name="description" content={SEO.defaultDescription} />
      </Helmet>
      <motion.section {...fadeUp} className="rounded-2xl bg-gradient-to-r from-brand to-accent p-10 text-white">
        <h1 className="text-4xl font-extrabold">{BRAND.tagline}</h1>
        <p className="mt-3 max-w-2xl">Personalized admissions guidance for Indian students targeting top universities across the world.</p>
      </motion.section>
      <div className="my-8"><StatsBar /></div>

      <SectionHeader title="Top Study Destinations" />
      <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-4">{countries.map((c) => <CountryCard key={c.id} country={c} />)}</motion.div>

      <SectionHeader title="Popular Courses" />
      <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-4">{courses.map((c) => <CourseCard key={c.id} course={c} />)}</motion.div>

      <SectionHeader title="Featured Universities" />
      <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-2">{universities.map((u) => <UniversityCard key={u.id} university={u} />)}</motion.div>

      <SectionHeader title="Student Success Stories" />
      <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-3">{testimonials.map((t) => <TestimonialCard key={t.id} item={t} />)}</motion.div>

      <SectionHeader title="Latest Insights" />
      <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-2">{blogs.map((b) => <BlogCard key={b.id} blog={b} />)}</motion.div>
    </>
  );
}
