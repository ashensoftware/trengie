import { siteConfig } from '@/lib/config';
import { NAV_LINKS } from '@/lib/constants';

export default function JsonLd() {
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/assets/logo-trengie.png`,
        description: siteConfig.description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Medellin',
            addressCountry: 'CO',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: siteConfig.email,
            telephone: siteConfig.phone,
            contactType: 'customer service',
            availableLanguage: ['Spanish', 'English'],
        },
        sameAs: [siteConfig.social.linkedin],
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${siteConfig.url}/blog?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    const siteNavigation = {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        name: NAV_LINKS.map((link) => link.label),
        url: NAV_LINKS.map((link) => `${siteConfig.url}${link.href}`),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigation) }}
            />
        </>
    );
}

