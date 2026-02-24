import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';
import { LABELS } from '@/lib/constants';

export const metadata: Metadata = {
    title: LABELS.sections.knowledgeHub,
    description: LABELS.meta.blogDesc,
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <section className="bg-dark px-4 pt-28 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-20">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {LABELS.sections.knowledgeHub}
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
                        {LABELS.subtitles.blog}
                    </p>
                </div>
            </section>

            <section className="bg-alabaster px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-5xl">
                    {posts.length === 0 ? (
                        <div className="rounded-xl border border-grey/50 bg-white p-8 text-center sm:p-12">
                            <p className="text-boulder">{LABELS.subtitles.blogEmpty}</p>
                        </div>
                    ) : (
                        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
