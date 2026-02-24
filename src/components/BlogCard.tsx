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
            className="group rounded-xl border border-grey/50 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg"
        >
            <time dateTime={post.date} className="text-xs font-medium text-boulder">
                {formattedDate}
            </time>
            <h3 className="mt-2 text-lg font-semibold text-dune group-hover:text-orange transition-colors">
                {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-boulder">{post.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-orange/5 px-2.5 py-0.5 text-xs font-medium text-orange"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
