interface SectionHeadingProps {
    label: string;
    title: string;
    subtitle?: string;
    light?: boolean;
}

export default function SectionHeading({
    label,
    title,
    subtitle,
    light = false,
}: SectionHeadingProps) {
    return (
        <div>
            <span className={`section-label ${light ? 'text-orange' : 'text-orange'}`}>
                {label}
            </span>
            <h2
                className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-dune'
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-4 max-w-2xl text-lg leading-relaxed ${light ? 'text-white/70' : 'text-boulder'
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
