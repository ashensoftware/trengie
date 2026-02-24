import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog';
import BrandImage from '@/components/BrandImage';
import BlogCard from '@/components/BlogCard';

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

    const allPosts = getAllPosts();
    const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        author: { '@type': 'Organization', name: 'Trengie' },
        publisher: { '@type': 'Organization', name: 'Trengie' },
        ...(post.cover ? { image: `https://trengie.com${post.cover}` } : {}),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <section className="relative min-h-[50vh] flex flex-col justify-end px-6 pt-32 pb-16 sm:pb-20 overflow-hidden bg-dark">
                {post.cover && (
                    <div className="absolute inset-0 pointer-events-none">
                        <BrandImage
                            src={post.cover}
                            alt={post.title}
                            fill
                            className="object-cover opacity-30"
                            fallbackWidth={1200}
                            fallbackHeight={630}
                            fallbackLabel="Blog Cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/20" />
                    </div>
                )}

                <div className="relative z-10 mx-auto w-full max-w-3xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Volver al blog
                    </Link>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <time dateTime={post.date} className="text-sm text-white/70 font-medium">
                            {formattedDate}
                        </time>
                        <span className="text-white/30 text-xs">·</span>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/90"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
                        {post.title}
                    </h1>
                </div>
            </section>

            <article className="bg-alabaster px-6 py-16 sm:py-20">
                <div className="prose prose-lg prose-orange mx-auto max-w-3xl text-dune">
                    <MDXRemote source={post.content} />
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className="bg-white border-t border-grey/20 px-6 py-16 sm:py-24">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="text-2xl font-bold text-dune sm:text-3xl text-center mb-10">
                            Otras entradas que podrían interesarte
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost.slug} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
