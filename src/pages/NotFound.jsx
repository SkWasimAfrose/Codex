import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Helmet><title>EduGuru | Page Not Found</title></Helmet>
      <section className="rounded-2xl bg-white p-10 text-center shadow">
        <img src="https://source.unsplash.com/1600x900/?lost,road" alt="Page not found illustration" className="mx-auto mb-6 h-56 w-full max-w-xl rounded-xl object-cover" />
        <h1 className="text-3xl font-bold">Oops! This page does not exist.</h1>
        <p className="mt-2 text-slate-600">Let us get you back to your study abroad journey.</p>
        <Link to="/" className="mt-6 inline-block"><Button>Back to Home</Button></Link>
      </section>
    </>
  );
}
