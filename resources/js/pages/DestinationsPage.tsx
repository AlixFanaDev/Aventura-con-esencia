import { Head, Link } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Destination {
    id: string;
    name: string;
    tagline_es: string;
    tagline_en: string;
    tagline?: string;
    description_es: string;
    description_en: string;
    image: string;
    flag: string;
    experiences_count: number;
    highlights: string[];
    best_season: string;
}

interface PageProps {
    lang?: 'es' | 'en';
    destinations?: Destination[];
}

export default function DestinationsPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);
    const destinations = props.destinations || destinationsData;

    return (
        <>
            <Head>
                <title>{t('Destinos en Marruecos | Aventuras con Esencia', 'Destinations in Morocco | Aventuras con Esencia')}</title>
                <meta
                    name="description"
                    content={t(
                        'Explora los destinos más increíbles de Marruecos: Marrakech, Fez, Casablanca, Tanger y más.',
                        'Explore the most incredible destinations in Morocco: Marrakech, Fez, Casablanca, Tangier and more.',
                    )}
                />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dark" style={{ opacity: 0.5 }} />
                <img src="/images/marrakech/marrakech8.jpg" alt="Morocco destinations" className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-4 font-heading text-5xl font-bold">{t('Destinos en Marruecos', 'Destinations in Morocco')}</h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        {t('Explora las ciudades más fascinantes del Maghreb', 'Explore the most fascinating cities of the Maghreb')}
                    </p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {destinations.map((dest, idx) => (
                            <div key={idx} className="card-hover group overflow-hidden rounded-xl bg-white shadow-md">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 right-4 text-4xl">{dest.flag}</span>
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                                    <div className="absolute right-0 bottom-0 left-0 p-6">
                                        <h3 className="mb-1 font-heading text-2xl font-bold text-white">{dest.name}</h3>
                                        <p className="text-sm text-white/80">{t(dest.tagline_es, dest.tagline_en)}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="mb-4 text-text-secondary">{t(dest.description_es, dest.description_en)}</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {dest.highlights.slice(0, 3).map((h, i) => (
                                            <span key={i} className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">
                                            {dest.experiences_count} {t('experiencias', 'experiences')}
                                        </span>
                                        <Link href={`/destinos/${dest.id}`} className="btn-outline py-2 text-sm">
                                            {t('Ver experiencias', 'View experiences')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-cream-dark py-16">
                <div className="container-custom text-center">
                    <h2 className="mb-4 font-heading text-3xl font-bold">{t('¿Por qué visitar Marruecos?', 'Why visit Morocco?')}</h2>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="p-6">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-semibold">{t('Cultura Milenaria', 'Millennial Culture')}</h3>
                            <p className="text-text-secondary">
                                {t(
                                    'Más de 12 siglos de historia, imperios marroquíes y tradiciones ancestrales.',
                                    'Over 12 centuries of history, Moroccan empires and ancestral traditions.',
                                )}
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-semibold">{t('Diversidad Geográfica', 'Geographic Diversity')}</h3>
                            <p className="text-text-secondary">
                                {t(
                                    'Desiertos, montañas, costas atlánticas y mediterráneas en un solo país.',
                                    'Deserts, mountains, Atlantic and Mediterranean coasts in one country.',
                                )}
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-semibold">{t('Hospitalidad Legendaria', 'Legendary Hospitality')}</h3>
                            <p className="text-text-secondary">
                                {t(
                                    'El famoso客人 (khedou) marroquí te hará sentir como en casa.',
                                    'The famous Moroccan hospitality will make you feel at home.',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}

const destinationsData = [
    {
        id: 'marrakech',
        name: 'Marrakech',
        tagline_es: 'La Ciudad Roja',
        tagline_en: 'The Red City',
        description_es: 'Capital cultural de Marruecos, conocida por sus zocos, jardines exóticos y la famosa Plaza Jemaa el-Fna.',
        description_en: 'Cultural capital of Morocco, known for its souks, exotic gardens and the famous Jemaa el-Fna Square.',
        image: '/images/marrakech/marrakech4.jpg',

        experiences_count: 24,
        highlights: ['Plaza Jemaa el-Fna', 'Medina', 'Jardín Majorelle', 'Palacio Bahia'],
        best_season: 'Mar-May, Sep-Nov',
    },
    {
        id: 'fez',
        name: 'Fez',
        tagline_es: 'La Ciudad Imperial',
        tagline_en: 'The Imperial City',
        description_es: 'La ciudad más antigua de Marruecos, hogar de la universidad más antigua del mundo y una medina declarada Patrimonio UNESCO.',
        description_en: 'The oldest city in Morocco, home to the oldest university in the world and a UNESCO World Heritage medina.',
        image: '/images/fes/fes7.webp',

        experiences_count: 18,
        highlights: ['Medina de Fez', 'Universidad Al-Qarawiyyin', 'Tanneries', 'Bab Bou Jeloud'],
        best_season: 'Mar-May, Sep-Nov',
    },
    {
        id: 'casablanca',
        name: 'Casablanca',
        tagline_es: 'La Ciudad Blanca',
        tagline_en: 'The White City',
        description_es: 'La ciudad más grande de Marruecos, conocida por su arquitectura art déco y la icónica Mezquita Hassan II.',
        description_en: 'The largest city in Morocco, known for its art deco architecture and the iconic Hassan II Mosque.',
        image: '/images/casa & rabat/casa1.jpg',

        experiences_count: 12,
        highlights: ['Mezquita Hassan II', 'Corniche', 'Viejo Puerto', 'Place des Nations'],
        best_season: 'Year-round',
    },
    {
        id: 'tangier',
        name: 'Tangier',
        tagline_es: 'La Puerta de África',
        tagline_en: 'The Gateway to Africa',
        description_es: 'Ciudad estratégica en el Estrecho de Gibraltar, mezcla de culturas europea y africana.',
        description_en: 'Strategic city at the Strait of Gibraltar, a blend of European and African cultures.',
        image: '/images/tanger/tanger1.jpg',

        experiences_count: 15,
        highlights: ['Cueva de Hercules', 'Medina', 'Cap Spartel', 'Puerto'],
        best_season: 'Apr-Jun, Sep-Nov',
    },
    {
        id: 'essaouira',
        name: 'Essaouira',
        tagline_es: 'La Perla del Atlántico',
        tagline_en: 'The Pearl of the Atlantic',
        description_es: 'Puerto pesquero histórico con una medina白色的 encantadora, conocido por sus vientos ideales para surf y kite.',
        description_en: 'Historic fishing port with a charming white medina, known for its ideal winds for surfing and kitesurfing.',
        image: '/images/essaouira/essaouira23.jpg',

        experiences_count: 16,
        highlights: ['Puerto pesquero', 'Medina UNESCO', 'Surf', 'Marraños'],
        best_season: 'Apr-Oct',
    },
    {
        id: 'ouarzazate',
        name: 'Ouarzazate',
        tagline_es: 'La puerta del Desierto',
        tagline_en: 'The Door to the Desert',
        description_es: 'Conocida como el "Hollywood de África", rodeada de kasbahs spectaculaires y cercano al desierto del Sáhara.',
        description_en: 'Known as the "Hollywood of Africa", surrounded by spectacular kasbahs and close to the Sahara desert.',
        image: '/images/ouarzazate/ourzazate1.webp',

        experiences_count: 14,
        highlights: ['Kasbah Ait Benhaddou', 'Valle del Dades', 'Cine Studios', 'Desierto'],
        best_season: 'Mar-May, Sep-Nov',
    },
    {
        id: 'merzouga',
        name: 'Merzouga',
        tagline_es: 'El Desierto de Erg Chebbi',
        tagline_en: 'Erg Chebbi Desert',
        description_es: 'Pequeño pueblo en los límites del desierto de Erg Chebbi, con las dunas más altas de Marruecos.',
        description_en: 'Small village on the edge of the Erg Chebbi desert, with the highest dunes in Morocco.',
        image: '/images/merzouga/merzouga1.jpg',

        experiences_count: 10,
        highlights: ['Dunas de Erg Chebbi', 'Camel Trekking', 'Noche en el desierto', 'Amanecer en dunas'],
        best_season: 'Oct-Apr',
    },
    {
        id: 'rabat',
        name: 'Rabat',
        tagline_es: 'Capital Moderna',
        tagline_en: 'Modern Capital',
        description_es: 'Capital administrativa de Marruecos, con una medina histórica y bellezas arquitectónicas modernas.',
        description_en: 'Administrative capital of Morocco, with a historic medina and modern architectural beauties.',
        image: '/images/casa & rabat/rabat1.jpg',

        experiences_count: 8,
        highlights: ['Torre Hassan', 'Kasbah des Oudaias', 'Mausoleo Mohamed V', 'Medina'],
        best_season: 'Year-round',
    },
];
