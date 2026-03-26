import { Head, Link } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const heroImg = '/images/merzouga/merzouga2.jpg';
const aboutImg = '/images/merzouga/merzouga6.jpg';

interface PageProps {
    lang?: 'es' | 'en';
}

export default function AboutPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    return (
        <>
            <Head>
                <title>{t('Nosotros | Aventuras con Esencia', 'About Us | Aventuras con Esencia')}</title>
                <meta
                    name="description"
                    content={t(
                        'Conoce nuestra historia y compromiso con viajes auténticos por Marruecos.',
                        'Learn about our history and commitment to authentic travels through Morocco.',
                    )}
                />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-80 items-center justify-center overflow-hidden">
                <div className="bg-dark z-1 absolute inset-0" style={{ opacity: 0.5 }} />
                <img src={heroImg} alt="Morocco desert" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="font-heading mb-4 text-5xl font-bold">{t('Sobre Nosotros', 'About Us')}</h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        {t(
                            'Compartimos nuestra pasión por descubrir la magia de Marruecos',
                            'We share our passion for discovering the magic of Morocco',
                        )}
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="font-heading mb-6 text-3xl font-bold">{t('Nuestra Historia', 'Our Story')}</h2>
                            <p className="text-text-secondary mb-4">
                                {t(
                                    'Aventuras con Esencia nació de nuestra pasión por Marruecos y su gente. Fundamos esta empresa con la misión de mostrar el verdadero alma del Maghreb, más allá de los circuitos turísticos convencionales.',
                                    'Aventuras con Esencia was born from our passion for Morocco and its people. We founded this company with the mission to show the true soul of the Maghreb, beyond conventional tourist circuits.',
                                )}
                            </p>
                            <p className="text-text-secondary mb-4">
                                {t(
                                    'Cada viaje que organizamos es una oportunidad para conectar con la cultura local, descubrir parajes naturales únicos y vivir experiencias transformadoras que te marcarán para siempre.',
                                    'Each trip we organize is an opportunity to connect with local culture, discover unique natural landscapes and have transformative experiences that will mark you forever.',
                                )}
                            </p>
                            <p className="text-text-secondary">
                                {t(
                                    'Nuestro equipo está formado por guías locales apasionados y certificados que conocen cada rincón de este hermoso país.',
                                    'Our team is made up of passionate and certified local guides who know every corner of this beautiful country.',
                                )}
                            </p>
                        </div>
                        <div className="relative">
                            <img src={aboutImg} alt="Our team in Morocco" className="rounded-xl shadow-xl" />
                            <div className="bg-primary absolute -bottom-6 -left-6 rounded-xl p-6 text-white shadow-lg">
                                <div className="text-4xl font-bold">500+</div>
                                <div className="text-sm">{t('Viajeros satisfechos', 'Satisfied travelers')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-cream-dark">
                <div className="container-custom">
                    <h2 className="font-heading mb-12 text-center text-3xl font-bold">{t('Nuestros Valores', 'Our Values')}</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-6 text-center">
                            <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-heading mb-2 text-xl font-semibold">{t('Autenticidad', 'Authenticity')}</h3>
                            <p className="text-text-secondary text-sm">
                                {t(
                                    'Experiencias reales que conectan con la esencia de Marruecos',
                                    'Real experiences that connect with the essence of Morocco',
                                )}
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-heading mb-2 text-xl font-semibold">{t('Comunidad', 'Community')}</h3>
                            <p className="text-text-secondary text-sm">
                                {t('Apoyo a las comunidades locales y tourism sostenible', 'Supporting local communities and sustainable tourism')}
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-heading mb-2 text-xl font-semibold">{t('Seguridad', 'Safety')}</h3>
                            <p className="text-text-secondary text-sm">
                                {t('Guías certificados y protocolos de seguridad rigurosos', 'Certified guides and rigorous safety protocols')}
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-heading mb-2 text-xl font-semibold">{t('Pasión', 'Passion')}</h3>
                            <p className="text-text-secondary text-sm">
                                {t(
                                    'Amor por descubrir y compartir la belleza de Marruecos',
                                    'Love for discovering and sharing the beauty of Morocco',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-2 gap-8 text-center text-white md:grid-cols-4">
                        <div>
                            <div className="font-heading text-accent mb-2 text-4xl font-bold md:text-5xl">500+</div>
                            <div>{t('Viajes realizados', 'Trips completed')}</div>
                        </div>
                        <div>
                            <div className="font-heading text-accent mb-2 text-4xl font-bold md:text-5xl">98%</div>
                            <div>{t('Clientes satisfechos', 'Satisfied clients')}</div>
                        </div>
                        <div>
                            <div className="font-heading text-accent mb-2 text-4xl font-bold md:text-5xl">8</div>
                            <div>{t('Destinos', 'Destinations')}</div>
                        </div>
                        <div>
                            <div className="font-heading text-accent mb-2 text-4xl font-bold md:text-5xl">15+</div>
                            <div>{t('Guías expertos', 'Expert guides')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <h2 className="font-heading mb-12 text-center text-3xl font-bold">{t('Nuestro Equipo', 'Our Team')}</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-xl bg-white p-6 text-center shadow-md">
                            <div className="bg-primary/20 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
                                <span className="text-4xl">👩‍💼</span>
                            </div>
                            <h3 className="font-heading mb-1 text-xl font-semibold">Cheska </h3>
                            <p className="text-primary mb-2 text-sm">{t('Fundador y Director', 'Founder & Director')}</p>
                            <p className="text-text-secondary text-sm">
                                {t(
                                    'más de 15 años organizando aventuras por todo Marruecos.',
                                    'over 15 years organizing adventures throughout Morocco.',
                                )}
                            </p>
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-md">
                            <div className="bg-primary/20 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
                                <span className="text-4xl">👨‍💼</span>
                            </div>
                            <h3 className="font-heading mb-1 text-xl font-semibold">El Mahjoub AIT-HAMMI</h3>
                            <p className="text-primary mb-2 text-sm">{t('Guía de Cultura', 'Culture Guide')}</p>
                            <p className="text-text-secondary text-sm">
                                {t(
                                    'Especialista en historia marroquí y experta en medinas antiguas.',
                                    'Specialist in Moroccan history and expert in ancient medinas.',
                                )}
                            </p>
                        </div>
                        {/* <div className="rounded-xl bg-white p-6 text-center shadow-md">
                            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                                <span className="text-4xl">👨‍🏫</span>
                            </div>
                            <h3 className="mb-1 font-heading text-xl font-semibold">Youssef Tazi</h3>
                            <p className="mb-2 text-sm text-primary">{t('Guía de Montaña', 'Mountain Guide')}</p>
                            <p className="text-sm text-text-secondary">
                                {t('Certificado en alpinismo, experto en trekking por el Atlas.', 'Certified in alpinism, expert in Atlas trekking.')}
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-earth text-center text-white">
                <div className="container-custom">
                    <h2 className="font-heading mb-4 text-3xl font-bold">
                        {t('¿Listo para tu aventura en Marruecos?', 'Ready for your adventure in Morocco?')}
                    </h2>
                    <p className="text-stone-light mx-auto mb-8 max-w-xl">
                        {t(
                            'Contáctanos y descubre todo lo que Marruecos tiene para ofrecerte.',
                            'Contact us and discover everything Morocco has to offer you.',
                        )}
                    </p>
                    <Link href="/contacto" className="btn-secondary">
                        {t('Contáctanos', 'Contact Us')}
                    </Link>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}
