import { Head, Link } from '@inertiajs/react';
import { FormEvent, useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NewsletterToast from '@/components/NewsletterToast';
import { postNewsletterSubscribe, postNewsletterUnsubscribe, showNewsletterToast } from '@/lib/newsletter';

interface BlogPost {
    id: string;
    slug: string;
    title_es: string;
    title_en: string;
    excerpt_es: string;
    excerpt_en: string;
    category: string;
    category_es: string;
    category_en: string;
    image: string;
    read_time: number;
    date: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'mejores-epocas-visitar-marruecos',
        title_es: 'Mejor época para visitar Marruecos: Guía completa',
        title_en: 'Best time to visit Morocco: Complete guide',
        excerpt_es: 'Descubre cuándo es el mejor momento para viajar a Marruecos según tus intereses: clima, festivales y ventajas de cada estación.',
        excerpt_en:
            'Find out when is the best time to travel to Morocco according to your interests: weather, festivals, and advantages of each season.',
        category: 'consejos',
        category_es: 'Consejos de Viaje',
        category_en: 'Travel Tips',
        image: '/images/trekking-atlas/trekking-atlas1.webp',
        read_time: 8,
        date: '2026-02-15',
    },
    {
        id: '2',
        slug: 'que-empaizar-marruecos',
        title_es: 'Qué empacar para tu viaje a Marruecos',
        title_en: 'What to pack for your trip to Morocco',
        excerpt_es: 'La lista definitiva de cosas que necesitas llevar a Marruecos: desde ropa adecuada hasta artículos esenciales.',
        excerpt_en: 'The ultimate list of things you need to bring to Morocco: from appropriate clothing to essential items.',
        category: 'consejos',
        category_es: 'Consejos de Viaje',
        category_en: 'Travel Tips',
        image: '/images/marrakech/marrakech3.jpg',
        read_time: 6,
        date: '2026-02-10',
    },
    {
        id: '3',
        slug: 'cultura-bereber-marruecos',
        title_es: 'Guía de la cultura bereber en Marruecos',
        title_en: 'Guide to Berber culture in Morocco',
        excerpt_es: 'Descubre la rica herencia de los pueblos bereberes, su historia, tradiciones y cómo experimentarla durante tu viaje.',
        excerpt_en: 'Discover the rich heritage of the Berber people, their history, traditions, and how to experience it during your trip.',
        category: 'cultura',
        category_es: 'Cultura',
        category_en: 'Culture',
        image: '/images/marrakech/marrakech1.jpg',
        read_time: 10,
        date: '2026-02-05',
    },
    {
        id: '4',
        slug: 'gastronomia-marroqui-tradicional',
        title_es: 'Gastronomía marroquí: Platos típicos que debes probar',
        title_en: 'Moroccan cuisine: Typical dishes you must try',
        excerpt_es: 'Desde el tagine hasta el cuscús, descubre los platos tradicionales de la cocina marroquí que deleitarán tu paladar.',
        excerpt_en: 'From tagine to couscous, discover traditional Moroccan dishes that will delight your palate.',
        category: 'gastronomia',
        category_es: 'Gastronomía',
        category_en: 'Gastronomy',
        image: '/images/marrakech/marrakech2.jpg',
        read_time: 7,
        date: '2026-01-28',
    },
    {
        id: '5',
        slug: 'trekking-atlas-para-principiantes',
        title_es: 'Trekking en el Atlas: Guía para principiantes',
        title_en: 'Trekking in the Atlas: Guide for beginners',
        excerpt_es: 'Todo lo que necesitas saber para hacer trekking en las montañas del Atlas: rutas, dificultad y consejos.',
        excerpt_en: 'Everything you need to know to trek in the Atlas mountains: routes, difficulty, and tips.',
        category: 'naturaleza',
        category_es: 'Naturaleza',
        category_en: 'Nature',
        image: '/images/trekking-atlas/trekking-atlas5.webp',
        read_time: 9,
        date: '2026-01-20',
    },
    {
        id: '6',
        slug: 'visitar-desierto-merzouga',
        title_es: 'Guía para visitar el desierto de Merzouga',
        title_en: 'Guide to visiting the Merzouga desert',
        excerpt_es: 'Experiencias, consejos y qué esperar cuando visitas las impresionantes dunas de Erg Chebbi en el Sáhara marroquí.',
        excerpt_en: 'Experiences, tips, and what to expect when visiting the impressive Erg Chebbi dunes in the Moroccan Sahara.',
        category: 'naturaleza',
        category_es: 'Naturaleza',
        category_en: 'Nature',
        image: '/images/merzouga/merzouga1.jpg',
        read_time: 8,
        date: '2026-01-15',
    },
];

interface PageProps {
    lang?: 'es' | 'en';
    posts?: BlogPost[];
    flash?: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function BlogPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);
    const posts = props.posts || blogPosts;

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

    const categories = [
        { id: 'all', label_es: 'Todos', label_en: 'All' },
        { id: 'consejos', label_es: 'Consejos de Viaje', label_en: 'Travel Tips' },
        { id: 'cultura', label_es: 'Cultura', label_en: 'Culture' },
        { id: 'gastronomia', label_es: 'Gastronomía', label_en: 'Gastronomy' },
        { id: 'naturaleza', label_es: 'Naturaleza', label_en: 'Nature' },
    ];

    return (
        <>
            <Head>
                <title>{t('Blog de Viajes | Aventuras con Esencia', 'Travel Blog | Aventuras con Esencia')}</title>
                <meta
                    name="description"
                    content={t(
                        'Descubre consejos de viaje, cultura marroquí, gastronomía y más en el blog de Aventuras con Esencia.',
                        'Discover travel tips, Moroccan culture, gastronomy, and more in the Aventuras con Esencia blog.',
                    )}
                />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-80 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10 bg-dark" style={{ opacity: 0.5 }} />
                <img src="/images/all/sergey-pesterev-i-P1lmY_e1w-unsplash.jpg" alt="Blog" className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-4 font-heading text-5xl font-bold">{t('Blog de Viajes', 'Travel Blog')}</h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        {t('Consejos, cultura y experiencias sobre Marruecos', 'Tips, culture and experiences about Morocco')}
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="bg-cream py-8">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={cat.id === 'all' ? '/blog' : `/blog?category=${cat.id}`}
                                className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                                {t(cat.label_es, cat.label_en)}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={t(post.title_es, post.title_en)}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                                        {t(post.category_es, post.category_en)}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="mb-3 flex items-center gap-3 text-sm text-text-secondary">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>
                                            {post.read_time} {t('minutos de lectura', 'min read')}
                                        </span>
                                    </div>
                                    <h2 className="mb-3 font-heading text-xl font-semibold transition-colors group-hover:text-primary">
                                        {t(post.title_es, post.title_en)}
                                    </h2>
                                    <p className="mb-4 text-text-secondary">{t(post.excerpt_es, post.excerpt_en)}</p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                                    >
                                        {t('Leer más', 'Read more')}
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-padding bg-primary">
                <div className="container-custom text-center">
                    <h2 className="mb-4 font-heading text-3xl font-bold text-white">{t('Suscríbete a nuestro blog', 'Subscribe to our blog')}</h2>
                    <p className="mx-auto mb-8 max-w-xl text-white/80">
                        {t(
                            'Recibe los últimos artículos y consejos de viaje directamente en tu correo',
                            'Receive the latest articles and travel tips directly in your email',
                        )}
                    </p>
                    <form
                        className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                        onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                            e.preventDefault();

                            if (!newsletterEmail || newsletterLoading) return;

                            setNewsletterLoading(true);

                            try {
                                const result = await postNewsletterSubscribe({ email: newsletterEmail, name: '' });

                                if (result.ok) {
                                    showNewsletterToast(setToast, {
                                        message:
                                            result.message ||
                                            t('Te has suscrito al newsletter.', 'You have subscribed to the newsletter.'),
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
                            placeholder={t('Tu correo electrónico', 'Your email')}
                            className="flex-1 rounded-lg bg-white/90 px-4 py-3 text-dark focus:ring-2 focus:ring-primary focus:outline-none"
                            value={newsletterEmail}
                            onChange={(event) => setNewsletterEmail(event.target.value)}
                        />
                        <button type="submit" className="btn-secondary" disabled={newsletterLoading}>
                            {newsletterLoading ? t('Suscribiendo...', 'Subscribing...') : t('Suscribirse', 'Subscribe')}
                        </button>
                    </form>

                    <details className="mx-auto mt-6 max-w-md text-left">
                        <summary className="cursor-pointer text-sm text-white/80 underline-offset-2 hover:underline">
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
                                                t(
                                                    'Te has dado de baja del newsletter.',
                                                    'You have been unsubscribed from the newsletter.',
                                                ),
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
                                className="flex-1 rounded-lg bg-white/90 px-4 py-3 text-sm text-dark focus:ring-2 focus:ring-primary focus:outline-none"
                                value={unsubscribeEmail}
                                onChange={(event) => setUnsubscribeEmail(event.target.value)}
                            />
                            <button
                                type="submit"
                                className="rounded-lg border border-white/50 bg-transparent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                                disabled={unsubscribeLoading}
                            >
                                {unsubscribeLoading
                                    ? t('Procesando...', 'Processing...')
                                    : t('Darme de baja', 'Unsubscribe')}
                            </button>
                        </form>
                    </details>
                </div>
            </section>

            <NewsletterToast toast={toast} />

            <Footer lang={lang} />
        </>
    );
}
