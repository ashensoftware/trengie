import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <section className="bg-neutral-900 px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Volver al blog
                    </Link>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {post.title}
                    </h1>
                    <div className="mt-4 flex items-center gap-4">
                        <time dateTime={post.date} className="text-sm text-neutral-400">
                            {formattedDate}
                        </time>
                        <div className="flex gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <article className="px-6 py-16">
                <div className="prose mx-auto max-w-3xl">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </>
    );
}
