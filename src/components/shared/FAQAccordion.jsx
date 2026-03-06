const faqs = [
  'How early should I start applications?',
  'Do you help with scholarships?',
  'Can EduGuru support visa filing?',
];

export const FAQAccordion = () => (
  <div className="space-y-3">
    {faqs.map((q) => (
      <details key={q} className="rounded-xl bg-white p-4 shadow">
        <summary className="cursor-pointer font-semibold">{q}</summary>
        <p className="mt-2 text-sm text-slate-600">Yes, our counsellors guide documentation, essay reviews, and deadlines end-to-end.</p>
      </details>
    ))}
  </div>
);
