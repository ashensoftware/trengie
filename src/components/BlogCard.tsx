import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
    const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-lg"
        >
            <time dateTime={post.date} className="text-xs font-medium text-neutral-500">
                {formattedDate}
            </time>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">
                {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{post.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
