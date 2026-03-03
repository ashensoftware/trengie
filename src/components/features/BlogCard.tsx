import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { Icons } from '@/components/ui/Icons';

export default function BlogCard({ post }: { post: BlogPost }) {
    const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Simple reading time calculation based on content length
    const readingTime = Math.max(1, Math.ceil((post.content?.length || 800) / 1000));

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-[#1f1f1f] border border-[#3a3a3a] rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(239,126,36,0.15)] hover:-translate-y-2 hover:scale-[1.02] hover:border-orange/60 focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none relative"
        >
            {/* Cover Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-dark">
                {post.cover ? (
                    <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-dark-card border-b border-white/5">
                        <Icons.ImagePlaceholder className="h-12 w-12 text-white/10" />
                    </div>
                )}
                {/* Visual Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content Area */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    <time dateTime={post.date}>{formattedDate}</time>
                    <span className="h-1 w-1 rounded-full bg-orange" />
                    <span className="text-orange/60">{readingTime} min lectura</span>
                </div>

                <h3 className="mt-4 text-xl font-black leading-tight text-white transition-colors group-hover:text-orange uppercase tracking-tight">
                    {post.title}
                </h3>

                <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                    {post.summary}
                </p>

                {/* Tags as subtle tech dots */}
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-orange/40" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-orange group-hover:gap-5 transition-all">
                    <span>Continuar lectura</span>
                    <Icons.ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
}
