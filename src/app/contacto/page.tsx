import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { LABELS } from '@/lib/constants';

export const metadata: Metadata = {
    title: LABELS.sections.contacto,
    description: LABELS.meta.contactoDesc,
};

export default function ContactoPage() {
    return (
        <section className="bg-dark min-h-screen px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    label={LABELS.sections.contacto}
                    title={LABELS.headings.contacto}
                    light
                />
                <div className="mt-10 sm:mt-14">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
