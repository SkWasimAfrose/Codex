import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';
import { ContactForm } from '../components/shared/ContactForm';
import { FAQAccordion } from '../components/shared/FAQAccordion';
import { BRAND } from '../lib/constants';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How early should I start applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideally 10-12 months before your target intake.',
      },
    },
  ],
};

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>EduGuru | Contact</title>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <PageHero title="Contact EduGuru" subtitle="Talk to our global admissions experts today." imageKeyword="education,consulting" />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow"><ContactForm sourcePage="contact" /></div>
        <div className="space-y-4 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">Reach us</h2>
          <p className="text-slate-600">{BRAND.address}</p>
          <p className="text-slate-600">{BRAND.phone}</p>
          <p className="text-slate-600">{BRAND.email}</p>
          <iframe title="EduGuru location map" className="h-56 w-full rounded-xl border" src="https://maps.google.com/maps?q=Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed" />
        </div>
      </div>
      <div className="mt-8"><FAQAccordion /></div>
    </>
  );
}
