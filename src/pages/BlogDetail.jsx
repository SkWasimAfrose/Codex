import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogs } from '../hooks/useBlogs';
import { BRAND } from '../lib/constants';

export default function BlogDetail() {
  const { slug } = useParams();
  const { data: blogs = [] } = useBlogs();

  const blog = useMemo(() => blogs.find((item) => item.slug === slug) ?? blogs[0], [blogs, slug]);

  if (!blog) {
    return <p className="rounded-xl bg-white p-6 shadow">No article found.</p>;
  }

  const sanitizedHtml = DOMPurify.sanitize(blog.content || '');
  const shareUrl = encodeURIComponent(`https://eduguru.example.com/blog/${blog.slug}`);

  return (
    <>
      <Helmet>
        <title>{`${blog.title} | ${BRAND.name}`}</title>
        <meta name="description" content={`${blog.title} - ${blog.category}`} />
      </Helmet>
      <article className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-xl bg-white p-6 shadow">
          <img src={blog.thumbnail_url} alt={blog.title} className="mb-4 h-64 w-full rounded-xl object-cover" />
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="mt-2 text-sm text-slate-500">{blog.author} • {blog.read_time}</p>
          <div className="prose mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-lg font-bold">Share</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <a className="rounded bg-green-100 px-3 py-1" href={`https://wa.me/?text=${shareUrl}`}>WhatsApp</a>
              <a className="rounded bg-blue-100 px-3 py-1" href={`https://twitter.com/intent/tweet?url=${shareUrl}`}>Twitter</a>
              <a className="rounded bg-slate-200 px-3 py-1" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}>LinkedIn</a>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-lg font-bold">Need admission help?</h2>
            <p className="mt-2 text-sm text-slate-600">Talk to EduGuru counsellors for personalized university shortlisting.</p>
          </div>
        </aside>
      </article>
    </>
  );
}
