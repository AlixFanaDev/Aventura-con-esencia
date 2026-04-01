import { Head, Link } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NewsletterToast from '@/components/NewsletterToast';
import { postNewsletterSubscribe, postNewsletterUnsubscribe, showNewsletterToast } from '@/lib/newsletter';

interface HomePageProps {
    lang?: 'es' | 'en';
    flash?: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function HomePage(props: HomePageProps) {
    const lang = props.lang || 'es';
    const [currentSlide, setCurrentSlide] = useState(0);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterLoading, setNewsletterLoading] = useState(false);
    const [unsubscribeEmail, setUnsubscribeEmail] = useState('');
    const [unsubscribeLoading, setUnsubscribeLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        if (props.flash?.success) {
            setToast({ message: props.flash.success, type: 'success' });
            const timer = setTimeout(() => setToast(null), 5000);
            return () => clearTimeout(timer);
        }
        if (props.flash?.error) {
            setToast({ message: props.flash.error, type: 'error' });
            const timer = setTimeout(() => setToast(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [props.flash?.success, props.flash?.error]);

    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    const heroImages = [
        '/images/merzouga/merzouga1.jpg',
        '/images/trekking-atlas/trekking-atlas1.webp',
        '/images/marrakech/marrakech1.jpg',
        '/images/essaouira/essaouira1.jpg',
    ];

    const heroData = [
        {
            title_es: 'Aventuras con Esencia',
            title_en: 'Adventures with Essence',
            subtitle_es: 'Descubre la magia de Marruecos',
            subtitle_en: 'Discover the magic of Morocco',
            overlay_opacity: 0.45,
        },
        {
            title_es: 'El Desierto te Espera',
            title_en: 'The Desert Awaits You',
            subtitle_es: 'Vive la aventura en las dunas de Merzouga',
            subtitle_en: 'Experience adventure in the Merzouga dunes',
            overlay_opacity: 0.4,
        },
        {
            title_es: 'Montañas del Atlas',
            title_en: 'Mountains of the Atlas',
            subtitle_es: 'Trekking y naturaleza extrema',
            subtitle_en: 'Trekking and extreme nature',
            overlay_opacity: 0.5,
        },
        {
            title_es: 'Ciudades Imperiales',
            title_en: 'Imperial Cities',
            subtitle_es: 'Historia y cultura milenaria',
            subtitle_en: 'History and ancient culture',
            overlay_opacity: 0.42,
        },
    ];

    const philosophyItems = [
        {
            icon: 'leaf',
            title_es: 'Naturaleza Auténtica',
            title_en: 'Authentic Nature',
            description_es: 'Destinos vírgenes y rutas fuera de lo convencional',
            description_en: 'Pristine destinations and off-the-beaten-path routes',
        },
        {
            icon: 'compass',
            title_es: 'Guías Expertos Locales',
            title_en: 'Expert Local Guides',
            description_es: 'Certificados, apasionados y conocedores de cada territorio',
            description_en: 'Certified, passionate and knowledgeable about every territory',
        },
        {
            icon: 'recycle',
            title_es: 'Turismo Responsable',
            title_en: 'Responsible Tourism',
            description_es: 'Comprometidos con el medio ambiente y las comunidades locales',
            description_en: 'Committed to the environment and local communities',
        },
        {
            icon: 'heart',
            title_es: 'Experiencias Personalizadas',
            title_en: 'Personalized Experiences',
            description_es: 'Cada aventura adaptada a tus necesidades e intereses',
            description_en: 'Every adventure tailored to your needs and interests',
        },
    ];

    return (
        <>
            <Head>
                <title>{t('Aventuras con Esencia | Viajes a Marruecos', 'Aventuras con Esencia | Trips to Morocco')}</title>
                <meta
                    name="description"
                    content={t(
                        'Vive experiencias únicas en Marruecos: trekking por el Atlas, aventura en el desierto de Merzouga, tours por ciudades imperiales y más.',
                        'Experience unique adventures in Morocco: trekking in the Atlas, desert adventure in Merzouga, tours of imperial cities and more.',
                    )}
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar lang={lang} />

            {/* Hero Section */}
            <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="absolute inset-0 bg-dark" style={{ opacity: heroData[idx].overlay_opacity }} />
                        <img src={img} alt="" className="h-full w-full object-cover " />
                    </div>
                ))}
                ;
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="animate-fade-in font-heading mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
                        {t('Aventuras con Esencia', 'Adventures with Essence')}
                    </h1>
                    <p className="animate-slide-up mx-auto mb-10 max-w-2xl text-xl md:text-2xl">
                        {t(
                            'Descubre la magia de Marruecos: desierto, montañas y cultura',
                            'Discover the magic of Morocco: desert, mountains and culture',
                        )}
                    </p>
                    <div className="animate-slide-up stagger-2 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/experiencias" className="btn-primary text-lg">
                            {t('Descubrir Aventuras', 'Discover Adventures')}
                        </Link>
                        <Link href="/contacto" className="btn-secondary text-lg">
                            {t('Contactar Ahora', 'Contact Now')}
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 z-130 flex -translate-x-1/2 gap-2">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-3 w-3 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-accent' : 'bg-dark/50'}`}
                        />
                    ))}
                </div>
                <div className="bg-gradient-to-top absolute right-0 bottom-0 left-0 h-24 from-cream to-transparent" />
            </section>

            {/* Philosophy Strip */}
            <section className="mt-12 bg-primary py-12 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {philosophyItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                                    {item.icon === 'leaf' && (
                                        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    )}
                                    {item.icon === 'compass' && (
                                        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    )}
                                    {item.icon === 'recycle' && (
                                        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                    )}
                                    {item.icon === 'heart' && (
                                        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-heading mb-1 font-semibold">{t(item.title_es, item.title_en)}</h3>
                                    <p className="text-sm text-white/80">{t(item.description_es, item.description_en)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Experiences */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-4 text-4xl font-bold text-dark">
                            {t('Experiencias que te marcarán', 'Experiences that will mark you')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-text-secondary">
                            {t('Descubre aventuras únicas en el mágico Marruecos', 'Discover unique adventures in magical Morocco')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {experiencesData.map((exp, idx) => (
                            <div key={idx} className="card-hover group overflow-hidden rounded-xl bg-white shadow-md">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={exp.image}
                                        alt={t(exp.title_es, exp.title_en)}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {exp.badge && (
                                        <span
                                            className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
                                            style={{ backgroundColor: exp.badgeColor }}
                                        >
                                            {t(exp.badge_es, exp.badge_en)}
                                        </span>
                                    )}
                                    <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark">
                                        {exp.destination}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="text-sm text-accent">★</span>
                                        <span className="text-sm text-text-secondary">
                                            {exp.rating} ({exp.reviews} {t('reseñas', 'reviews')})
                                        </span>
                                    </div>
                                    <h3 className="font-heading mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
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
                                            {t(exp.duration_es, exp.duration_en)}
                                        </span>
                                        <span
                                            className={`rounded px-2 py-0.5 text-xs font-medium ${
                                                exp.difficultyLevel === 'easy'
                                                    ? 'bg-green-100 text-green-700'
                                                    : exp.difficultyLevel === 'moderate'
                                                      ? 'bg-yellow-100 text-yellow-700'
                                                      : exp.difficultyLevel === 'difficult'
                                                        ? 'bg-orange-100 text-orange-700'
                                                        : 'bg-red-100 text-red-700'
                                            }`}
                                        >
                                            {t(exp.difficulty_es, exp.difficulty_en)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm text-text-secondary">{t('Desde', 'From')}</span>
                                            <span className="ml-1 text-2xl font-bold text-primary">${exp.price_from_usd}</span>
                                        </div>{' '}
                                        <Link href={`/experiencias/${exp.slug}`} className="btn-outline py-2 text-sm">
                                            {t('Ver más', 'See more')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/experiencias" className="btn-primary">
                            {t('Ver todas las experiencias', 'View all experiences')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section className="section-padding bg-cream-dark">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-4 text-4xl font-bold text-dark">
                            {t('¿A dónde quieres escapar?', 'Where do you want to escape?')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-text-secondary">
                            {t('Explora las ciudades más fascinantes de Marruecos', 'Explore the most fascinating cities of Morocco')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {destinationsData.map((dest, idx) => (
                            <Link key={idx} href={`/destinos/${dest.id}`} className="group relative h-80 overflow-hidden rounded-xl">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                                <div className="absolute right-0 bottom-0 left-0 p-6">
                                    <h3 className="font-heading mb-1 text-2xl font-bold text-white">{dest.name}</h3>
                                    <p className="mb-2 text-sm text-white/80">{dest.tagline}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {dest.activities.slice(0, 2).map((act, i) => (
                                            <span key={i} className="rounded bg-white/20 px-2 py-1 text-xs text-white">
                                                {act}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Link href="/destinos" className="mt-12 inline-block text-center text-primary">
                        {t('Ver todos los destinos', 'View all destinations')}
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        <div>
                            <div className="font-heading mb-2 text-4xl font-bold text-accent md:text-5xl">500+</div>
                            <div className="text-white/80">{t('Viajes realizados', 'Trips completed')}</div>
                        </div>
                        <div>
                            <div className="font-heading mb-2 text-4xl font-bold text-accent md:text-5xl">98%</div>
                            <div className="text-white/80">{t('Clientes satisfechos', 'Satisfied clients')}</div>
                        </div>
                        <div>
                            <div className="font-heading mb-2 text-4xl font-bold text-accent md:text-5xl">8</div>
                            <div className="text-white/80">{t('Destinos', 'Destinations')}</div>
                        </div>
                        <div>
                            <div className="font-heading mb-2 text-4xl font-bold text-accent md:text-5xl">15+</div>
                            <div className="text-white/80">{t('Guías expertos', 'Expert guides')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-dark text-white">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-4 text-4xl font-bold">
                            {t('Historias reales. Aventuras auténticas.', 'Real stories. Authentic adventures.')}
                        </h2>
                        <p className="text-stone-light mx-auto max-w-2xl">
                            {t(
                                'Lo que dicen nuestros viajeros sobre sus experiencias en Marruecos.',
                                'What our travelers say about their experiences in Morocco.',
                            )}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {testimonialsData.map((test, idx) => (
                            <div key={idx} className="bg-stone/20 rounded-xl p-6">
                                <div className="mb-4 flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mb-4 text-white/90">"{t(test.quote_es, test.quote_en)}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                                        <span className="text-lg">{test.flag}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{test.name}</div>
                                        <div className="text-stone-light text-sm">{test.country}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-4 text-4xl font-bold text-dark">{t('¿Por qué elegirnos?', 'Why choose us?')}</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {whyUsData.map((item, idx) => (
                            <div key={idx} className="p-6 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    {item.icon === 'users' && (
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    )}
                                    {item.icon === 'shield' && (
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                    )}
                                    {item.icon === 'map' && (
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                            />
                                        </svg>
                                    )}
                                    {item.icon === 'leaf' && (
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="font-heading mb-2 text-xl font-semibold">{t(item.title_es, item.title_en)}</h3>
                                <p className="text-sm text-text-secondary">{t(item.description_es, item.description_en)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="section-padding bg-cream-dark">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-4 text-4xl font-bold text-dark">
                            {t('Inspiración para tu próximo viaje', 'Inspiration for your next trip')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {blogData.map((post, idx) => (
                            <article key={idx} className="card-hover group overflow-hidden rounded-xl bg-white shadow-md">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={t(post.title_es, post.title_en)}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-heading mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                                        {t(post.title_es, post.title_en)}
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-text-secondary">{t(post.excerpt_es, post.excerpt_en)}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-text-light text-sm">{post.readTime} min read</span>
                                        <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                                            {t('Leer más', 'Read more')} →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/blog" className="btn-outline">
                            {t('Ver todas las publicaciones', 'View all posts')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-padding bg-earth text-white">
                <div className="container-custom text-center">
                    <h2 className="font-heading mb-4 text-4xl font-bold">{t('Únete a nuestra tribu aventurera', 'Join our adventure tribe')}</h2>
                    <p className="text-stone-light mx-auto mb-8 max-w-xl">
                        {t(
                            'Recibe inspiración, ofertas exclusivas y guías de viaje a Marruecos directamente en tu correo.',
                            'Receive inspiration, exclusive offers and travel guides to Morocco directly in your inbox.',
                        )}
                    </p>
                    <form
                        className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
                        onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                            e.preventDefault();

                            if (!newsletterEmail || newsletterLoading) return;

                            setNewsletterLoading(true);

                            try {
                                const result = await postNewsletterSubscribe({ email: newsletterEmail, name: '' });

                                if (result.ok) {
                                    showNewsletterToast(setToast, {
                                        message: result.message || t('Te has suscrito al newsletter.', 'You have subscribed to the newsletter.'),
                                        type: 'success',
                                    });
                                    setNewsletterEmail('');
                                } else {
                                    showNewsletterToast(setToast, {
                                        message:
                                            result.message ||
                                            t(
                                                'No se ha podido completar la suscripción. Inténtalo de nuevo.',
                                                'Subscription could not be completed. Please try again.',
                                            ),
                                        type: 'error',
                                    });
                                }
                            } catch {
                                showNewsletterToast(setToast, {
                                    message: t(
                                        'Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.',
                                        'An unexpected error occurred. Please try again later.',
                                    ),
                                    type: 'error',
                                });
                            } finally {
                                setNewsletterLoading(false);
                            }
                        }}
                    >
                        <input
                            type="email"
                            placeholder={t('Tu correo electrónico', 'Your email address')}
                            className="flex-1 rounded-lg bg-white px-4 py-3 text-dark focus:border-transparent focus:ring-2 focus:ring-accent"
                            value={newsletterEmail}
                            onChange={(event) => setNewsletterEmail(event.target.value)}
                        />
                        <button type="submit" className="btn-secondary whitespace-nowrap" disabled={newsletterLoading}>
                            {newsletterLoading ? t('Suscribiendo...', 'Subscribing...') : t('Suscribirme', 'Subscribe')}
                        </button>
                    </form>
                    <p className="text-stone-light mt-4 text-sm">
                        {t(
                            'Sin spam. Solo aventuras. Puedes darte de baja en cualquier momento.',
                            'No spam. Just adventures. You can unsubscribe anytime.',
                        )}
                    </p>

                    <details className="mx-auto mt-6 max-w-md text-left">
                        <summary className="text-stone-light cursor-pointer text-sm underline-offset-2 hover:underline">
                            {t('Darte de baja de la lista', 'Unsubscribe from the list')}
                        </summary>
                        <form
                            className="mt-4 flex flex-col gap-3 sm:flex-row"
                            onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();

                                if (!unsubscribeEmail || unsubscribeLoading) return;

                                setUnsubscribeLoading(true);

                                try {
                                    const result = await postNewsletterUnsubscribe({ email: unsubscribeEmail });

                                    if (result.ok) {
                                        showNewsletterToast(setToast, {
                                            message:
                                                result.message ||
                                                t('Te has dado de baja del newsletter.', 'You have been unsubscribed from the newsletter.'),
                                            type: 'success',
                                        });
                                        setUnsubscribeEmail('');
                                    } else {
                                        showNewsletterToast(setToast, {
                                            message:
                                                result.message ||
                                                t(
                                                    'No se ha podido completar la baja. Comprueba el correo.',
                                                    'Unsubscribe could not be completed. Check the email address.',
                                                ),
                                            type: 'error',
                                        });
                                    }
                                } catch {
                                    showNewsletterToast(setToast, {
                                        message: t(
                                            'Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.',
                                            'An unexpected error occurred. Please try again later.',
                                        ),
                                        type: 'error',
                                    });
                                } finally {
                                    setUnsubscribeLoading(false);
                                }
                            }}
                        >
                            <input
                                type="email"
                                required
                                placeholder={t('Correo suscrito', 'Subscribed email')}
                                className="flex-1 rounded-lg bg-white px-4 py-3 text-sm text-dark focus:border-transparent focus:ring-2 focus:ring-accent"
                                value={unsubscribeEmail}
                                onChange={(event) => setUnsubscribeEmail(event.target.value)}
                            />
                            <button
                                type="submit"
                                className="rounded-lg border border-white/40 bg-transparent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                                disabled={unsubscribeLoading}
                            >
                                {unsubscribeLoading ? t('Procesando...', 'Processing...') : t('Darme de baja', 'Unsubscribe')}
                            </button>
                        </form>
                    </details>
                </div>
            </section>

            {/* WhatsApp Float */}
            <a href="https://wa.me/212661234567" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>

            <NewsletterToast toast={toast} />

            <Footer lang={lang} />
        </>
    );
}

const experiencesData = [
    {
        slug: 'trekking-atlas',
        title_es: 'Trekking por el Alto Atlas',
        title_en: 'High Atlas Trekking',
        destination: 'Marrakech',
        duration_es: '3 días',
        duration_en: '3 days',
        difficulty_es: 'Moderado',
        difficulty_en: 'Moderate',
        difficultyLevel: 'moderate',
        price_from_usd: 280,
        rating: 4.9,
        reviews: 67,
        badge: 'Más popular',
        badge_es: 'Más popular',
        badge_en: 'Most Popular',
        badgeColor: '#F4A261',
        image: '/images/trekking-atlas/trekking-atlas1.webp',
    },
    {
        slug: 'desierto-merzouga',
        title_es: 'Aventura en el Desierto de Merzouga',
        title_en: 'Merzouga Desert Adventure',
        destination: 'Merzouga',
        duration_es: '2 días',
        duration_en: '2 days',
        difficulty_es: 'Fácil',
        difficulty_en: 'Easy',
        difficultyLevel: 'easy',
        price_from_usd: 180,
        rating: 4.8,
        reviews: 124,
        badge: 'Top Rated',
        badge_es: 'Top Rated',
        badge_en: 'Top Rated',
        badgeColor: '#2D6A4F',
        image: '/images/merzouga/merzouga1.jpg',
    },
    {
        slug: 'tour-fez',
        title_es: 'Tour Guiado por Fez Medina',
        title_en: 'Guided Tour of Fez Medina',
        destination: 'Fez',
        duration_es: '1 día',
        duration_en: '1 day',
        difficulty_es: 'Fácil',
        difficulty_en: 'Easy',
        difficultyLevel: 'easy',
        price_from_usd: 75,
        rating: 4.9,
        reviews: 89,
        image: '/images/fes/fes1.webp',
    },
    {
        slug: 'essaouira',
        title_es: 'Excursión a Essaouira',
        title_en: 'Excursion to Essaouira',
        destination: 'Essaouira',
        duration_es: '1 día',
        duration_en: '1 day',
        difficulty_es: 'Fácil',
        difficulty_en: 'Easy',
        difficultyLevel: 'easy',
        price_from_usd: 65,
        rating: 4.7,
        reviews: 156,
        image: '/images/essaouira/essaouira1.jpg',
    },
    {
        slug: 'tour-casablanca-rabat',
        title_es: 'Tour Casablanca y Rabat',
        title_en: 'Casablanca and Rabat Tour',
        destination: 'Casablanca',
        duration_es: '1 día',
        duration_en: '1 day',
        difficulty_es: 'Fácil',
        difficulty_en: 'Easy',
        difficultyLevel: 'easy',
        price_from_usd: 85,
        rating: 4.5,
        reviews: 32,
        image: '/images/casa & rabat/casa1.jpg',
    },
    {
        slug: 'trekking-toubkal',
        title_es: 'Ascensión al Toubkal (4167m)',
        title_en: 'Toubkal Ascent (4167m)',
        destination: 'Marrakech',
        duration_es: '2 días',
        duration_en: '2 days',
        difficulty_es: 'Difícil',
        difficulty_en: 'Difficult',
        difficultyLevel: 'difficult',
        price_from_usd: 220,
        rating: 5.0,
        reviews: 28,
        badge: 'Para expertos',
        badge_es: 'Para expertos',
        badge_en: 'For experts',
        badgeColor: '#D62828',
        image: '/images/merzouga/merzouga5.jpg',
    },
];

const destinationsData = [
    {
        id: 'marrakech',
        name: 'Marrakech',
        tagline: 'La Ciudad Roja',
        image: '/images/marrakech/marrakech1.jpg',
        activities: ['Plaza Jemaa el-Fna', 'Medina', 'Jardín Majorelle'],
    },
    {
        id: 'fez',
        name: 'Fez',
        tagline: 'Ciudad Imperial',
        image: '/images/fes/fes1.webp',
        activities: ['Medina', 'Universidad', 'Tanneries'],
    },
    {
        id: 'casablanca',
        name: 'Casablanca',
        tagline: 'Ciudad Blanca',
        image: '/images/casa & rabat/casa1.jpg',
        activities: ['Mezquita Hassan II', 'Corniche'],
    },
    {
        id: 'essaouira',
        name: 'Essaouira',
        tagline: 'Perla del Atlántico',
        image: '/images/essaouira/essaouira1.jpg',
        activities: ['Puerto', 'Medina', 'Surf'],
    },
    {
        id: 'ouarzazate',
        name: 'Ouarzazate',
        tagline: 'Puerta del Desierto',
        image: '/images/ouarzazate/ourzazate1.webp',
        activities: ['Kasbah', 'Cine', 'Valle'],
    },
    {
        id: 'merzouga',
        name: 'Merzouga',
        tagline: 'Dunas de Erg Chebbi',
        image: '/images/merzouga/merzouga1.jpg',
        activities: ['Desierto', 'Camel Trek', 'Amanecer'],
    },
];

const testimonialsData = [
    {
        name: 'María García',
        country: 'España',
        flag: '🇪🇸',
        quote_es: 'Una experiencia increíble. El desierto de Merzouga es mágico y los guías fueron fantásticos.',
        quote_en: 'An incredible experience. The Merzouga desert is magical and the guides were fantastic.',
    },
    {
        name: 'John Smith',
        country: 'UK',
        flag: '🇬🇧',
        quote_es: 'El trekking por el Atlas fue lo más destacado de mi viaje a Marruecos. ¡Totalmente recomendado!',
        quote_en: 'Trekking in the Atlas was the highlight of my trip to Morocco. Highly recommended!',
    },
    {
        name: 'Pierre Dubois',
        country: 'Francia',
        flag: '🇫🇷',
        quote_es: 'Fez me sorprendió. La medina es increíble y la gente muy amable.',
        quote_en: 'Fez surprised me. The medina is incredible and the people are very friendly.',
    },
    {
        name: 'Ana Silva',
        country: 'Portugal',
        flag: '🇵🇹',
        quote_es: 'La organización fue perfecta. Marrakech, el desierto y Essaouira - todo increíblo.',
        quote_en: 'The organization was perfect. Marrakech, the desert and Essaouira - all incredible.',
    },
];

const whyUsData = [
    {
        icon: 'users',
        title_es: 'Grupos Pequeños y Exclusivos',
        title_en: 'Small & Exclusive Groups',
        description_es: 'Máximo 12 personas por aventura para una experiencia más íntima.',
        description_en: 'Maximum 12 people per adventure for a more intimate experience.',
    },
    {
        icon: 'shield',
        title_es: 'Seguridad Certificada',
        title_en: 'Certified Safety',
        description_es: 'Guías certificados con experiencia en montaña y desierto.',
        description_en: 'Certified guides with experience in mountains and desert.',
    },
    {
        icon: 'map',
        title_es: 'Conocimiento Local',
        title_en: 'Local Knowledge',
        description_es: 'Guías nativos que conocen cada rincón de Marruecos.',
        description_en: 'Native guides who know every corner of Morocco.',
    },
    {
        icon: 'leaf',
        title_es: 'Turismo Sostenible',
        title_en: 'Sustainable Tourism',
        description_es: 'Compromiso con las comunidades locales y el medio ambiente.',
        description_en: 'Commitment to local communities and the environment.',
    },
];

const blogData = [
    {
        slug: 'guia-marrakech',
        title_es: 'Guía completa de Marrakech',
        title_en: 'Complete guide to Marrakech',
        category: 'Destinos',
        image: '/images/marrakech/marrakech1.jpg',
        excerpt_es: 'Todo lo que necesitas saber para visitar la Ciudad Roja.',
        excerpt_en: 'Everything you need to know to visit the Red City.',
        readTime: 8,
    },
    {
        slug: 'trekking-atlas',
        title_es: 'Trekking en el Alto Atlas',
        title_en: 'Trekking in the High Atlas',
        category: 'Aventura',
        image: '/images/trekking-atlas/trekking-atlas1.webp',
        excerpt_es: 'Rutas y consejos para hacer trekking en las montañas del Atlas.',
        excerpt_en: 'Routes and tips for trekking in the Atlas mountains.',
        readTime: 10,
    },
    {
        slug: 'desierto-merzouga',
        title_es: 'Vivir el desierto de Merzouga',
        title_en: 'Living the Merzouga desert',
        category: 'Experiencia',
        image: '/images/merzouga/merzouga1.jpg',
        excerpt_es: 'Una noche mágica en las dunas del Sáhara.',
        excerpt_en: 'A magical night in the Sahara dunes.',
        readTime: 6,
    },
];
