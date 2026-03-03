import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/features/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { LABELS } from '@/lib/constants';

export const metadata: Metadata = {
    title: LABELS.sections.contacto,
    description: LABELS.meta.contactoDesc,
};

export default function ContactoPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-dark flex items-center justify-center text-white/50">Cargando formulario...</div>}>
            <section className="bg-dark px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24">
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
        </Suspense>
    );
}
