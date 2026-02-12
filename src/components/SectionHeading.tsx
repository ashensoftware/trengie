interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
    return (
        <div className={centered ? 'text-center' : ''}>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{title}</h2>
            {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
