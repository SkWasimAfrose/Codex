import { Card } from '../ui/Card';

export const BlogCard = ({ blog }) => (
  <Card>
    <img src={blog.thumbnail_url} alt={blog.title} className="mb-3 h-40 w-full rounded-lg object-cover" />
    <h3 className="text-lg font-bold">{blog.title}</h3>
    <p className="text-sm text-slate-500">{blog.category} • {blog.read_time}</p>
  </Card>
);
