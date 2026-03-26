import { Link } from '@inertiajs/react';

interface FooterProps {
    lang?: 'es' | 'en';
    site?: { name: string; email: string; whatsapp: string };
    footer?: {
        tagline_es: string;
        tagline_en: string;
        columns: { title_es: string; title_en: string; links: { label_es: string; label_en?: string; path: string }[] }[];
        social_media: { platform: string; url: string; icon: string }[];
        copyright_es: string;
        copyright_en: string;
    };
    contact?: { email: string; whatsapp_number: string; response_time_es: string; response_time_en: string };
}

export default function Footer({ lang = 'es', site = defaultSite, footer = defaultFooter, contact = defaultContact }: FooterProps) {
    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    return (
        <footer className="bg-dark text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                <img src="/logo.png" alt="" />
                            </div>
                            <span className="font-heading text-xl font-bold">{site.name}</span>
                        </div>
                        <p className="mb-6 max-w-md text-stone-light">{t(footer.tagline_es, footer.tagline_en)}</p>
                        <div className="flex flex-col gap-2">
                            <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-stone-light transition-colors hover:text-accent">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                {site.email}
                            </a>
                            <p className="text-sm text-stone-light">{t(contact.response_time_es, contact.response_time_en)}</p>
                        </div>
                    </div>

                    {footer.columns.map((column, idx) => (
                        <div key={idx}>
                            <h4 className="mb-4 font-heading text-lg font-semibold text-accent">{t(column.title_es, column.title_en)}</h4>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link href={link.path} className="text-stone-light transition-colors hover:text-white">
                                            {link.label_en ? t(link.label_es, link.label_en) : link.label_es}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stone/30 pt-8 md:flex-row">
                    <p className="text-sm text-stone-light">{t(footer.copyright_es, footer.copyright_en)}</p>
                    <div className="flex items-center gap-4">
                        {footer.social_media.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone/20 text-stone-light transition-colors hover:bg-primary hover:text-white"
                            >
                                {social.platform === 'instagram' && (
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                )}
                                {social.platform === 'facebook' && (
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                )}
                                {social.platform === 'youtube' && (
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                )}
                                {social.platform === 'tiktok' && (
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                    </svg>
                                )}
                                {social.platform === 'whatsapp' && (
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

const defaultSite = {
    name: 'Aventuras con Esencia',
    email: 'info@aventurasconesencia.com',
    whatsapp: '+1000000000',
};

const defaultContact = {
    email: 'info@aventurasconesencia.com',
    whatsapp_number: '+1000000000',
    response_time_es: 'Respondemos en menos de 24 horas',
    response_time_en: 'We respond in less than 24 hours',
};

const defaultFooter = {
    tagline_es: 'Aventuras que transforman. Experiencias con alma.',
    tagline_en: 'Adventures that transform. Experiences with soul.',
    columns: [
        {
            title_es: 'Experiencias',
            title_en: 'Experiences',
            links: [
                { label_es: 'Senderismo y Trekking', path: '/experiencias/categoria/senderismo' },
                { label_es: 'Aventura en el Desierto', path: '/experiencias/categoria/desierto' },
                { label_es: 'Tours Culturales', path: '/experiencias/categoria/cultura' },
                { label_es: 'Excursiones Costeras', path: '/experiencias/categoria/costa' },
                { label_es: 'Montañismo', path: '/experiencias/categoria/montana' },
                { label_es: 'Experiencias Locales', path: '/experiencias/categoria/locales' },
            ],
        },
        {
            title_es: 'Destinos',
            title_en: 'Destinations',
            links: [
                { label_es: 'Marrakech', path: '/destinos/marrakech' },
                { label_es: 'Fez', path: '/destinos/fez' },
                { label_es: 'Casablanca', path: '/destinos/casablanca' },
                { label_es: 'Tangier', path: '/destinos/tangier' },
                { label_es: 'Essaouira', path: '/destinos/essaouira' },
                { label_es: 'Ouarzazate', path: '/destinos/ouarzazate' },
                { label_es: 'Merzouga', path: '/destinos/merzouga' },
                { label_es: 'Rabat', path: '/destinos/rabat' },
            ],
        },
        {
            title_es: 'Compañía',
            title_en: 'Company',
            links: [
                { label_es: 'Nosotros', label_en: 'About', path: '/nosotros' },
                { label_es: 'Blog', path: '/blog' },
                { label_es: 'Contacto', label_en: 'Contact', path: '/contacto' },
                { label_es: 'Reservar Aventura', label_en: 'Book Adventure', path: '/reservar' },
            ],
        },
        {
            title_es: 'Legal',
            title_en: 'Legal',
            links: [
                { label_es: 'Términos y condiciones', path: '/terminos' },
                { label_es: 'Política de privacidad', path: '/privacidad' },
                { label_es: 'Política de cookies', path: '/cookies' },
                { label_es: 'Política de cancelación', path: '/cancelacion' },
            ],
        },
    ],
    social_media: [
        { platform: 'instagram', url: 'https://instagram.com/aventurasconesencia', icon: 'instagram' },
        { platform: 'facebook', url: 'https://facebook.com/aventurasconesencia', icon: 'facebook' },
        { platform: 'youtube', url: 'https://youtube.com/aventurasconesencia', icon: 'youtube' },
        { platform: 'tiktok', url: 'https://tiktok.com/@aventurasconesencia', icon: 'tiktok' },
        { platform: 'whatsapp', url: 'https://wa.me/212661234567', icon: 'message-circle' },
    ],
    copyright_es: '© 2025 Aventuras con Esencia. Todos los derechos reservados.',
    copyright_en: '© 2025 Aventuras con Esencia. All rights reserved.',
};
