import { Head, Link } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Experience {
    slug: string;
    title_es: string;
    title_en: string;
    destination: string;
    difficulty: string;
    duration_days: number;
    price_from_usd: number;
    rating: number;
    reviews_count: number;
    image: string;
}

interface Category {
    id: string;
    name_es: string;
    name_en: string;
    description_es: string;
    description_en: string;
    heroImage: string;
    color: string;
}

interface PageProps {
    lang?: 'es' | 'en';
    category?: string;
    experiences?: Experience[];
}

const categoriesData: Record<string, Category> = {
    senderismo: {
        id: 'senderismo',
        name_es: 'Senderismo y Trekking',
        name_en: 'Hiking and Trekking',
        description_es:
            'Explora las montañas del Alto Atlas, los valles ocultos y los senderos ancestrales de Marruecos. Desde caminatas suaves hasta expediciones de varios días, descubre la naturaleza marroquí a pie. El atlas ofrece paisajes únicos, desde cascadas cristalinas hasta aldeas bereberes donde el tiempo parece detenido.',
        description_en:
            'Explore the High Atlas mountains, hidden valleys, and ancestral trails of Morocco. From gentle walks to multi-day expeditions, discover Moroccan nature on foot. The Atlas offers unique landscapes, from crystal-clear waterfalls to Berber villages where time seems to stand still.',
        heroImage: '/images/trekking-atlas/trekking-atlas7.webp',
        color: '#2D6A4F',
    },
    desierto: {
        id: 'desierto',
        name_es: 'Aventura en el Desierto',
        name_en: 'Desert Adventure',
        description_es:
            'Vive la magia del Sáhara marroquí. Paseos en camello, noches bajo las estrellas en camps tradicionales, amaneceres en las dunas de Erg Chebbi y experiencias nómadas auténticas. El desierto de Merzouga te espera con sus dunas doradas que cambian de color con la luz del sol.',
        description_en:
            'Experience the magic of the Moroccan Sahara. Camel rides, nights under the stars in traditional camps, sunrises on the Erg Chebbi dunes, and authentic nomadic experiences. The Merzouga desert awaits you with its golden dunes that change color with the sunlight.',
        heroImage: '/images/merzouga/merzouga1.jpg',
        color: '#F4A261',
    },
    cultura: {
        id: 'cultura',
        name_es: 'Tours Culturales',
        name_en: 'Cultural Tours',
        description_es:
            'Sumérgete en la rica herencia cultural de Marruecos. Visita ciudades imperiales, experiencias locales, talleres de artesanía y descubre la historia milenaria del Maghreb. Marrakech, Fez, Meknès y Rabat te fascinarán con sus palacios, mezquitas y medinas declarado Patrimonio de la UNESCO.',
        description_en:
            'Immerse yourself in the rich cultural heritage of Morocco. Visit imperial cities, local experiences, artisan workshops, and discover the millennia-old history of the Maghreb. Marrakech, Fez, Meknès and Rabat will fascinate you with their palaces, mosques and UNESCO World Heritage medinas.',
        heroImage: '/images/fes/fes12.webp',
        color: '#E76F51',
    },
    costa: {
        id: 'costa',
        name_es: 'Excursiones Costeras',
        name_en: 'Coastal Excursions',
        description_es:
            'Descubre la costa atlántica y mediterránea de Marruecos. Desde Essaouira con sus vientos ideales para surf y kitesurf, hasta bahías ocultas y pueblos pesqueros auténticos como El Jadida y Asilah. Disfruta de pescados frescos y atardeceres espectaculares sobre el océano.',
        description_en:
            'Discover the Atlantic and Mediterranean coasts of Morocco. From Essaouira with its ideal winds for surfing and kitesurfing, to hidden bays and authentic fishing villages like El Jadida and Asilah. Enjoy fresh fish and spectacular sunsets over the ocean.',
        heroImage: '/images/essaouira/essaouira14.jpg',
        color: '#457B9D',
    },
    montana: {
        id: 'montana',
        name_es: 'Montañismo',
        name_en: 'Mountain Climbing',
        description_es:
            'Desafía las cumbres más altas del norte de África. Desde la ascensión al Toubkal (4167m), la montaña más alta de Marruecos y del Magreb, hasta rutas de escalada en las gargantas del Dades y Todra. Las montañas del Atlas ofrecen experiencias únicas para montañeros de todos los niveles.',
        description_en:
            'Challenge the highest peaks in North Africa. From the ascent to Toubkal (4167m), the highest mountain in Morocco and the Maghreb, to climbing routes in the Dades and Todra gorges. The Atlas mountains offer unique experiences for climbers of all levels.',
        heroImage: '/images/trekking-atlas/trekking-atlas5.webp',
        color: '#264653',
    },
    locales: {
        id: 'locales',
        name_es: 'Experiencias Locales',
        name_en: 'Local Experiences',
        description_es:
            'Conecta con las comunidades locales de Marruecos. Comparte hogares bereberes, aprende tradiciones ancestrales, disfruta de la gastronomía casera y vive la hospitalidad marroquí. Desde clases de cocina hasta baños tradicionales hammam, estas experiencias te permitirán conocer el verdadero espíritu de Marruecos.',
        description_en:
            'Connect with local Berber communities. Share homes, learn ancestral traditions, enjoy home-cooked cuisine, and experience Moroccan hospitality. From cooking classes to traditional hammam baths, these experiences will allow you to discover the true spirit of Morocco.',
        heroImage: '/images/merzouga/merzouga5.jpg',
        color: '#A8DADC',
    },
};

const experiencesByCategory: Record<string, Experience[]> = {
    senderismo: [
        {
            slug: 'trekking-atlas',
            title_es: 'Trekking por el Alto Atlas',
            title_en: 'High Atlas Trekking',
            destination: 'Marrakech',
            difficulty: 'moderado',
            duration_days: 3,
            price_from_usd: 280,
            rating: 4.9,
            reviews_count: 67,
            image: '/images/trekking-atlas/trekking-atlas1.webp',
        },
        {
            slug: 'cascadas-ouirgane',
            title_es: 'Ruta por las Cascadas de Ouirgane',
            title_en: 'Route to Ouirgane Waterfalls',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 55,
            rating: 4.6,
            reviews_count: 43,
            image: '/images/trekking-atlas/trekking-atlas2.webp',
        },
        {
            slug: 'valle-imlil',
            title_es: 'Valle de Imlil y Monte Toubkal',
            title_en: 'Imlil Valley and Mount Toubkal',
            destination: 'Marrakech',
            difficulty: 'dificil',
            duration_days: 2,
            price_from_usd: 190,
            rating: 4.8,
            reviews_count: 52,
            image: '/images/trekking-atlas/trekking-atlas17.webp',
        },
        {
            slug: 'souss-massa',
            title_es: 'Senderismo en el Parque Nacional Souss-Massa',
            title_en: 'Hiking in Souss-Massa National Park',
            destination: 'Essaouira',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 65,
            rating: 4.5,
            reviews_count: 28,
            image: '/images/essaouira/essaouira14.jpg',
        },
        {
            slug: 'tif-nou-ourika',
            title_es: 'Ruta de los 7 Pozos de Ourika',
            title_en: 'Route of the 7 Wells of Ourika',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 50,
            rating: 4.7,
            reviews_count: 89,
            image: '/images/trekking-atlas/trekking-atlas3.webp',
        },
        {
            slug: 'trek-marrakech-essaouira',
            title_es: 'Trekking entre Marrakech y Essaouira',
            title_en: 'Trekking between Marrakech and Essaouira',
            destination: 'Marrakech',
            difficulty: 'moderado',
            duration_days: 4,
            price_from_usd: 450,
            rating: 4.9,
            reviews_count: 34,
            image: '/images/trekking-atlas/trekking-atlas4.webp',
        },
    ],
    desierto: [
        {
            slug: 'desierto-merzouga',
            title_es: 'Aventura en el Desierto de Merzouga',
            title_en: 'Merzouga Desert Adventure',
            destination: 'Merzouga',
            difficulty: 'facil',
            duration_days: 2,
            price_from_usd: 180,
            rating: 4.8,
            reviews_count: 124,
            image: '/images/merzouga/merzouga1.jpg',
        },
        {
            slug: 'noche-desierto',
            title_es: 'Noche Estrellada en el Sáhara',
            title_en: 'Starry Night in the Sahara',
            destination: 'Merzouga',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 120,
            rating: 4.9,
            reviews_count: 89,
            image: '/images/merzouga/merzouga6.jpg',
        },
        {
            slug: 'merzouga-erg-chebbi',
            title_es: 'Amanecer en Erg Chebbi',
            title_en: 'Sunrise in Erg Chebbi',
            destination: 'Merzouga',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 95,
            rating: 4.7,
            reviews_count: 156,
            image: '/images/merzouga/merzouga7.jpg',
        },
        {
            slug: 'merzouga-fez',
            title_es: 'Ruta del Desierto: Merzouga a Fez',
            title_en: 'Desert Route: Merzouga to Fez',
            destination: 'Merzouga',
            difficulty: 'moderado',
            duration_days: 3,
            price_from_usd: 320,
            rating: 4.8,
            reviews_count: 67,
            image: '/images/merzouga/merzouga1.jpg',
        },
        {
            slug: 'atv-desierto',
            title_es: 'Aventura en ATV por las Dunas',
            title_en: 'ATV Adventure through the Dunes',
            destination: 'Merzouga',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 85,
            rating: 4.6,
            reviews_count: 92,
            image: '/images/merzouga/merzouga1.jpg',
        },
        {
            slug: 'camel-trekking',
            title_es: 'Camel Trekking de 3 Días',
            title_en: '3-Day Camel Trekking',
            destination: 'Merzouga',
            difficulty: 'facil',
            duration_days: 3,
            price_from_usd: 280,
            rating: 4.9,
            reviews_count: 78,
            image: '/images/merzouga/merzouga1.jpg',
        },
    ],
    cultura: [
        {
            slug: 'tour-fez',
            title_es: 'Tour Guiado por Fez Medina',
            title_en: 'Guided Tour of Fez Medina',
            destination: 'Fez',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 75,
            rating: 4.9,
            reviews_count: 89,
            image: '/images/fes/fes3.webp',
        },
        {
            slug: 'tour-marrakech',
            title_es: 'Descubre Marrakech',
            title_en: 'Discover Marrakech',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 65,
            rating: 4.8,
            reviews_count: 134,
            image: '/images/marrakech/marrakech6.jpg',
        },
        {
            slug: 'tour-casablanca-rabat',
            title_es: 'Tour Casablanca y Rabat',
            title_en: 'Casablanca and Rabat Tour',
            destination: 'Casablanca',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 85,
            rating: 4.5,
            reviews_count: 32,
            image: '/images/casa & rabat/casa1.jpg',
        },
        {
            slug: 'tour-tangier',
            title_es: 'Tour Completo por Tanger',
            title_en: 'Complete Tour of Tangier',
            destination: 'Tangier',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 70,
            rating: 4.6,
            reviews_count: 45,
            image: '/images/tanger/tanger1.jpg',
        },
        {
            slug: 'tour-imperial-cities',
            title_es: 'Tour por las Ciudades Imperiales',
            title_en: 'Imperial Cities Tour',
            destination: 'Fez',
            difficulty: 'facil',
            duration_days: 5,
            price_from_usd: 650,
            rating: 4.9,
            reviews_count: 56,
            image: '/images/fes/fes12.webp',
        },
        {
            slug: 'tour-marrakech-esensial',
            title_es: 'Marrakech Esencial: Medina y Jardines',
            title_en: 'Essential Marrakech: Medina and Gardens',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 55,
            rating: 4.7,
            reviews_count: 98,
            image: '/images/marrakech/marrakech1.jpg',
        },
    ],
    costa: [
        {
            slug: 'essaouira',
            title_es: 'Excursión a Essaouira',
            title_en: 'Excursion to Essaouira',
            destination: 'Essaouira',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 65,
            rating: 4.7,
            reviews_count: 156,
            image: '/images/essaouira/essaouira1.jpg',
        },
        {
            slug: 'sur-essaouira',
            title_es: 'Clase de Surf en Essaouira',
            title_en: 'Surf Class in Essaouira',
            destination: 'Essaouira',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 45,
            rating: 4.9,
            reviews_count: 78,
            image: '/images/essaouira/essaouira2.jpg',
        },
        {
            slug: 'kitesurf-essaouira',
            title_es: 'Curso de Kitesurf en Essaouira',
            title_en: 'Kitesurf Course in Essaouira',
            destination: 'Essaouira',
            difficulty: 'moderado',
            duration_days: 3,
            price_from_usd: 280,
            rating: 4.8,
            reviews_count: 42,
            image: '/images/essaouira/essaouira4.jpg',
        },
        {
            slug: 'asilah',
            title_es: 'Excursión a Asilah desde Tanger',
            title_en: 'Excursion to Asilah from Tangier',
            destination: 'Tangier',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 55,
            rating: 4.6,
            reviews_count: 34,
            image: '/images/tanger/tanger2.jpg',
        },
        {
            slug: 'el-jadida',
            title_es: 'Descubre El Jadida y Porto',
            title_en: 'Discover El Jadida and Porto',
            destination: 'Casablanca',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 60,
            rating: 4.5,
            reviews_count: 28,
            image: '/images/casa & rabat/casa2.jpg',
        },
        {
            slug: 'dakhla',
            title_es: 'Aventura en Dakhla: Kitesurf Paradise',
            title_en: 'Dakhla Adventure: Kitesurf Paradise',
            destination: 'Dakhla',
            difficulty: 'moderado',
            duration_days: 5,
            price_from_usd: 550,
            rating: 4.9,
            reviews_count: 67,
            image: '/images/essaouira/essaouira1.jpg',
        },
    ],
    montana: [
        {
            slug: 'trekking-toubkal',
            title_es: 'Ascensión al Toubkal (4167m)',
            title_en: 'Toubkal Ascent (4167m)',
            destination: 'Marrakech',
            difficulty: 'dificil',
            duration_days: 2,
            price_from_usd: 220,
            rating: 5.0,
            reviews_count: 28,
            image: '/images/trekking-atlas/trekking-atlas5.jpg',
        },
        {
            slug: 'valley-dades',
            title_es: 'Ruta de las Mil Kasbahs',
            title_en: 'Route of the Thousand Kasbahs',
            destination: 'Ouarzazate',
            difficulty: 'moderado',
            duration_days: 2,
            price_from_usd: 165,
            rating: 4.7,
            reviews_count: 51,
            image: '/images/trekking-atlas/trekking-atlas3.jpg',
        },
        {
            slug: 'gorgas-todra',
            title_es: 'Excursión a las Gargantas del Todra',
            title_en: 'Todra Gorges Excursion',
            destination: 'Ouarzazate',
            difficulty: 'moderado',
            duration_days: 1,
            price_from_usd: 95,
            rating: 4.6,
            reviews_count: 67,
            image: '/images/trekking-atlas/trekking-atlas3.jpg',
        },
        {
            slug: 'escalada-todra',
            title_es: 'Escalada en las Gargantas del Todra',
            title_en: 'Climbing in Todra Gorges',
            destination: 'Ouarzazate',
            difficulty: 'dificil',
            duration_days: 2,
            price_from_usd: 180,
            rating: 4.8,
            reviews_count: 23,
            image: '/images/trekking-atlas/trekking-atlas3.jpg',
        },
        {
            slug: 'marrakech-toubkal-invierno',
            title_es: 'Toubkal en Invierno con Piolet',
            title_en: 'Winter Toubkal with Ice Axe',
            destination: 'Marrakech',
            difficulty: 'extremo',
            duration_days: 3,
            price_from_usd: 380,
            rating: 4.9,
            reviews_count: 15,
            image: '/images/trekking-atlas/trekking-atlas5.jpg',
        },
        {
            slug: 'rifugio-toubkal',
            title_es: 'Trekking al Refugio de Toubkal',
            title_en: 'Trekking to Toubkal Refuge',
            destination: 'Marrakech',
            difficulty: 'moderado',
            duration_days: 2,
            price_from_usd: 175,
            rating: 4.8,
            reviews_count: 45,
            image: '/images/trekking-atlas/trekking-atlas5.jpg',
        },
    ],
    locales: [
        {
            slug: 'cocina-marroqui',
            title_es: 'Clase de Cocina Marroquí',
            title_en: 'Moroccan Cooking Class',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 55,
            rating: 4.9,
            reviews_count: 112,
            image: '/images/marrakech/marrakech2.jpg',
        },
        {
            slug: 'cena-familia',
            title_es: 'Cena con Familia Local',
            title_en: 'Dinner with Local Family',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 40,
            rating: 4.8,
            reviews_count: 89,
            image: '/images/marrakech/marrakech2.jpg',
        },
        {
            slug: 'hammam',
            title_es: 'Experiencia de Hammam Tradicional',
            title_en: 'Traditional Hammam Experience',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 35,
            rating: 4.7,
            reviews_count: 145,
            image: '/images/marrakech/marrakech2.jpg',
        },
        {
            slug: 'taller-zellige',
            title_es: 'Taller de Azulejos Zellige',
            title_en: 'Zellige Tiles Workshop',
            destination: 'Fez',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 65,
            rating: 4.9,
            reviews_count: 56,
            image: '/images/marrakech/marrakech2.jpg',
        },
        {
            slug: 'noche-berber',
            title_es: 'Noche Tradicional Bereber',
            title_en: 'Traditional Berber Night',
            destination: 'Merzouga',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 75,
            rating: 4.8,
            reviews_count: 92,
            image: '/images/marrakech/marrakech2.jpg',
        },
        {
            slug: 'visita-berber',
            title_es: 'Visita a Aldea Bereber y Cerveza de Menta',
            title_en: 'Berber Village Visit and Mint Tea',
            destination: 'Marrakech',
            difficulty: 'facil',
            duration_days: 1,
            price_from_usd: 45,
            rating: 4.7,
            reviews_count: 134,
            image: '/images/marrakech/marrakech2.jpg',
        },
    ],
};

export default function ExperienceCategoryPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    const categoryKey = props.category || 'senderismo';
    const category = categoriesData[categoryKey] || categoriesData.senderismo;
    const experiences = props.experiences || experiencesByCategory[categoryKey] || [];

    return (
        <>
            <Head>
                <title>{t(`Experiencias de ${category.name_es}`, `${category.name_en} Experiences`) + ' | Aventuras con Esencia'}</title>
                <meta name="description" content={t(category.description_es, category.description_en)} />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dark" style={{ opacity: 0.5 }} />
                <img src={category.heroImage} alt={t(category.name_es, category.name_en)} className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-4 font-heading text-5xl font-bold">{t(category.name_es, category.name_en)}</h1>
                    <p className="mx-auto max-w-2xl text-xl">{t(category.description_es, category.description_en)}</p>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-dark">
                            {t('¿Por qué elegir estas experiencias?', 'Why choose these experiences?')}
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 font-heading text-lg font-semibold">{t('Guías Expertos', 'Expert Guides')}</h3>
                                <p className="text-sm text-text-secondary">
                                    {t(
                                        'Todos nuestros guías están certificados y tienen años de experiencia local.',
                                        'All our guides are certified and have years of local experience.',
                                    )}
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 font-heading text-lg font-semibold">{t('Mejor Precio Garantizado', 'Best Price Guaranteed')}</h3>
                                <p className="text-sm text-text-secondary">
                                    {t(
                                        'Precios transparentes sin sorpresas. Incluye todo lo necesario.',
                                        'Transparent prices without surprises. Includes everything you need.',
                                    )}
                                </p>
                            </div>
                            <div className="text-center">
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
                                <h3 className="mb-2 font-heading text-lg font-semibold">{t('Experiencias Únicas', 'Unique Experiences')}</h3>
                                <p className="text-sm text-text-secondary">
                                    {t(
                                        'Momentos auténticos que no encontrarás en las guías turísticas.',
                                        "Authentic moments you won't find in travel guides.",
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="mb-8 flex items-center justify-between">
                        <p className="text-text-secondary">
                            {experiences.length} {t('experiencias disponibles', 'experiences available')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="card-hover group overflow-hidden rounded-xl bg-white shadow-md">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={exp.image}
                                        alt={t(exp.title_es, exp.title_en)}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark">
                                        {exp.destination}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="text-sm text-accent">★</span>
                                        <span className="text-sm text-text-secondary">
                                            {exp.rating} ({exp.reviews_count} {t('reseñas', 'reviews')})
                                        </span>
                                    </div>
                                    <h3 className="mb-2 font-heading text-xl font-semibold transition-colors group-hover:text-primary">
                                        {t(exp.title_es, exp.title_en)}
                                    </h3>
                                    <div className="mb-4 flex items-center gap-4 text-sm text-text-secondary">
                                        <span className="flex items-center gap-1">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            {exp.duration_days} {exp.duration_days === 1 ? t('día', 'day') : t('días', 'days')}
                                        </span>
                                        <span
                                            className={`rounded px-2 py-0.5 text-xs font-medium ${
                                                exp.difficulty === 'facil'
                                                    ? 'bg-green-100 text-green-700'
                                                    : exp.difficulty === 'moderado'
                                                      ? 'bg-yellow-100 text-yellow-700'
                                                      : exp.difficulty === 'dificil'
                                                        ? 'bg-orange-100 text-orange-700'
                                                        : 'bg-red-100 text-red-700'
                                            }`}
                                        >
                                            {t(
                                                exp.difficulty === 'facil'
                                                    ? 'Fácil'
                                                    : exp.difficulty === 'moderado'
                                                      ? 'Moderado'
                                                      : exp.difficulty === 'dificil'
                                                        ? 'Difícil'
                                                        : 'Extremo',
                                                exp.difficulty === 'facil'
                                                    ? 'Easy'
                                                    : exp.difficulty === 'moderado'
                                                      ? 'Moderate'
                                                      : exp.difficulty === 'dificil'
                                                        ? 'Difficult'
                                                        : 'Extreme',
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm text-text-secondary">{t('Desde', 'From')}</span>
                                            <span className="ml-1 text-2xl font-bold text-primary">${exp.price_from_usd}</span>
                                        </div>
                                        <Link href={`/experiencias/${exp.slug}`} className="btn-outline py-2 text-sm">
                                            {t('Ver más', 'See more')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practical Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-xl bg-cream p-8">
                            <h3 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Qué llevar', 'What to bring')}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-text-secondary">{t('Calzado cómodo de montaña', 'Comfortable hiking shoes')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-text-secondary">
                                        {t('Ropa adaptable a cambios de temperatura', 'Clothes adaptable to temperature changes')}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-text-secondary">{t('Protector solar y gorra', 'Sunscreen and hat')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-text-secondary">{t('Botella de agua reutilizable', 'Reusable water bottle')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-text-secondary">{t('Cámara fotográfica', 'Camera')}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-xl bg-cream p-8">
                            <h3 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Mejor época para viajar', 'Best time to travel')}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-text-secondary">
                                        {t(
                                            'Primavera (Marzo-Mayo): Temperaturas ideales, paisajes florecidos',
                                            'Spring (March-May): Ideal temperatures, blooming landscapes',
                                        )}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-text-secondary">
                                        {t(
                                            'Otoño (Septiembre-Noviembre): Clima agradable, menos turistas',
                                            'Autumn (September-November): Pleasant weather, fewer tourists',
                                        )}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <span className="text-text-secondary">
                                        {t(
                                            'Evitar verano (Julio-Agosto) por el calor extremo en el sur',
                                            'Avoid summer (July-August) due to extreme heat in the south',
                                        )}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="container-custom text-center">
                    <h2 className="mb-4 font-heading text-3xl font-bold text-white">
                        {t('¿Listo para vivir la aventura?', 'Ready to live the adventure?')}
                    </h2>
                    <p className="mb-8 text-white/80">
                        {t(
                            'Reserva tu experiencia ahora y descubre lo mejor de Marruecos',
                            'Book your experience now and discover the best of Morocco',
                        )}
                    </p>
                    <Link href="/reservar" className="btn-secondary inline-block">
                        {t('Reservar Ahora', 'Book Now')}
                    </Link>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}
