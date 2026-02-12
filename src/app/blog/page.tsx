import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Artículos sobre tecnología, desarrollo de software, automatización y buenas prácticas.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <section className="bg-neutral-900 px-6 py-20 text-center">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog</h1>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                        Ideas, tutoriales y reflexiones sobre tecnología y negocio.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    {posts.length === 0 ? (
                        <p className="text-center text-neutral-500">No hay artículos publicados aún.</p>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
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
