import { Head, Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { experiencesData } from '@/lib/experiences';
import type { Experience } from '@/types';

interface PageProps {
    lang?: 'es' | 'en';
    experiences?: Experience[];
}

export default function ExperiencesPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    const initialExperiences = props.experiences || experiencesData;
  
    const [sortOption, setSortOption] = useState<string>('popular');
    const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>(initialExperiences);

    useEffect(() => {
        const currentFilteredExperiences = [...initialExperiences];

        

        switch (sortOption) {
            case 'price_asc':
                currentFilteredExperiences.sort((a, b) => a.price_from_usd - b.price_from_usd);
                break;
            case 'price_desc':
                currentFilteredExperiences.sort((a, b) => b.price_from_usd - a.price_from_usd);
                break;
            case 'rating':
                currentFilteredExperiences.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
            default:
                currentFilteredExperiences.sort((a, b) => b.reviews_count - a.reviews_count);
                break;
        }

        setFilteredExperiences(currentFilteredExperiences);
    }, [sortOption, initialExperiences]);

    return (
        <>
            <Head>
                <title>{t('Experiencias en Marruecos | Aventuras con Esencia', 'Experiences in Morocco | Aventuras con Esencia')}</title>
                <meta
                    name="description"
                    content={t(
                        'Descubre experiencias únicas en Marruecos: rutas por el desierto, ciudades imperiales, montañas del Atlas y más.',
                        'Discover unique experiences in Morocco: desert routes, imperial cities, Atlas mountains and more.',
                    )}
                />
                
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-100 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dark z-10" style={{ opacity: 0.5 }} />
                <img src="/images/all/jeison-higuita-OTbsPvXlLoc-unsplash.jpg" alt="Morocco" className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-4 font-heading text-5xl font-bold">{t('Experiencias en Marruecos', 'Experiences in Morocco')}</h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        {t(
                            'Descubre la magia del Maghreb con nuestras aventuras únicas',
                            'Discover the magic of the Maghreb with our unique adventures',
                        )}
                    </p>
                </div>
            </section>


            {/* Experiences Grid */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="mb-8 flex items-center justify-between">
                        <p className="text-text-secondary">
                            {filteredExperiences.length} {t('experiencias encontradas', 'experiences found')}
                        </p>
                        <select className="rounded-lg border border-stone/20 p-2" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                            <option value="popular">{t('Más popular', 'Most popular')}</option>
                            <option value="price_asc">{t('Precio: menor a mayor', 'Price: low to high')}</option>
                            <option value="price_desc">{t('Precio: mayor a menor', 'Price: high to low')}</option>
                            <option value="rating">{t('Mejor valorado', 'Best rated')}</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredExperiences.map((exp, idx) => (
                            <div key={idx} className="card-hover group overflow-hidden rounded-xl bg-white shadow-md">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={exp.image}
                                        alt={t(exp.title_es, exp.title_en)}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {exp.badge_es ? (
                                        <span
                                            className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
                                            style={{ backgroundColor: exp.badge_color || '#2D6A4F' }}
                                        >
                                            {t(exp.badge_es, exp.badge_en || '')}
                                        </span>
                                    ) : null}
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

            <Footer lang={lang} />
        </>
    );
}
