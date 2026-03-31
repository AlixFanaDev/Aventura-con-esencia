import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Alert from '@/components/Alert';
import FormError from '@/components/FormError';
import SuccessCard from '@/components/SuccessCard';

const heroImg = '/images/merzouga/merzouga2.jpg';

interface PageProps {
    lang?: 'es' | 'en';
    flash?: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function ContactPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);
    const [showSuccess, setShowSuccess] = useState(!!props.flash?.success);
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        experience: '',
        message: '',
    });

    useEffect(() => {
        if (props.flash?.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [props.flash?.success]);

    const experiences = [
        { id: 'general', label_es: 'Consulta general', label_en: 'General inquiry' },
        { id: 'marrakech', label_es: 'Experiencia en Marrakech', label_en: 'Marrakech experience' },
        { id: 'desierto', label_es: 'Aventura en el desierto', label_en: 'Desert adventure' },
        { id: 'trekking', label_es: 'Trekking por el Atlas', label_en: 'Atlas trekking' },
        { id: 'fez', label_es: 'Tour por Fez', label_en: 'Fez tour' },
        { id: 'custom', label_es: 'Viaje personalizado', label_en: 'Custom trip' },
    ];

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                experience: data.experience,
                message: data.message,
            },
            onSuccess: () => {
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    experience: '',
                    message: '',
                });
            },
            onError: (errors) => {
                console.error('Contact form errors:', errors);
            },
        });
    };

    return (
        <>
            <Head>
                <title>{t('Contacto | Aventuras con Esencia', 'Contact | Aventuras con Esencia')}</title>
                <meta
                    name="description"
                    content={t(
                        'Contáctanos para planificar tu aventura perfecta en Marruecos.',
                        'Contact us to plan your perfect adventure in Morocco.',
                    )}
                />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-70 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-1 bg-dark" style={{ opacity: 0.5 }} />
                <img src={heroImg} alt="Contact Morocco" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="font-heading mb-4 text-5xl font-bold">{t('Contacto', 'Contact')}</h1>
                    <p className="text-xl">
                        {t('Estamos aquí para ayudarte a planificar tu aventura', 'We are here to help you plan your adventure')}
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div className="rounded-xl bg-white dark:bg-gray-900 p-8 shadow-lg dark:shadow-dark/20 transition-all hover:shadow-xl">
                            <h2 className="font-heading mb-6 text-2xl font-bold text-dark dark:text-white">{t('Envíanos un mensaje', 'Send us a message')}</h2>
                            {showSuccess && (
                                <SuccessCard
                                    title={t('¡Perfecto!', 'Perfect!')}
                                    message={props.flash?.success || t(
                                        '¡Mensaje enviado con éxito! Te responderemos en breve.',
                                        'Message sent successfully! We will respond shortly.',
                                    )}
                                    subtitle={t(
                                        'Gracias por contactarnos',
                                        'Thank you for contacting us',
                                    )}
                                />
                            )}
                            {!showSuccess && (
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-dark dark:text-gray-200">
                                        {t('Nombre completo', 'Full name')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        placeholder={t('Tu nombre', 'Your name')}
                                        value={data.name}
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                    />
                                    {errors.name && <FormError message={errors.name} />}
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-dark dark:text-gray-200">{t('Correo electrónico', 'Email')} <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        placeholder={t('tu@email.com', 'your@email.com')}
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                    />
                                    {errors.email && <FormError message={errors.email} />}
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-dark dark:text-gray-200">
                                        {t('Teléfono / WhatsApp', 'Phone / WhatsApp')}
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        placeholder="+212 6XX XXX XXX"
                                        value={data.phone}
                                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                                    />
                                    {errors.phone && <FormError message={errors.phone} />}
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-dark dark:text-gray-200">
                                        {t('¿En qué experiencia estás interesado?', 'Which experience are you interested in?')}
                                    </label>
                                    <select
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-dark dark:text-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        value={data.experience}
                                        onChange={(e) => setData({ ...data, experience: e.target.value })}
                                    >
                                        <option value="">{t('Selecciona una opción', 'Select an option')}</option>
                                        {experiences.map((exp) => (
                                            <option key={exp.id} value={exp.id}>
                                                {t(exp.label_es, exp.label_en)}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.experience && <FormError message={errors.experience} />}
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-dark dark:text-gray-200">{t('Mensaje', 'Message')} <span className="text-red-500">*</span></label>
                                    <textarea
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                                        rows={5}
                                        placeholder={t('Cuéntanos sobre tu aventura soñada...', 'Tell us about your dream adventure...')}
                                        value={data.message}
                                        onChange={(e) => setData({ ...data, message: e.target.value })}
                                    />
                                    {errors.message && <FormError message={errors.message} />}
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full rounded-lg bg-primary hover:bg-primary/90 dark:bg-primary/80 dark:hover:bg-primary px-6 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" 
                                    disabled={processing}
                                >
                                    {processing ? t('Enviando...', 'Sending...') : t('Enviar mensaje', 'Send message')}
                                </button>
                            </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="mb-6 rounded-xl bg-white dark:bg-gray-900 p-8 shadow-lg dark:shadow-dark/20 transition-all hover:shadow-xl">
                                <h2 className="font-heading mb-6 text-2xl font-bold text-dark dark:text-white">{t('Información de contacto', 'Contact information')}</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary/80">
                                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-dark dark:text-white">{t('Email', 'Email')}</h3>
                                            <a href="mailto:info@aventurasconesencia.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                                info@aventurasconesencia.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary/80">
                                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-dark dark:text-white">{t('Teléfono', 'Phone')}</h3>
                                            <a href="tel:+212661234567" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                                +212 661 234 567
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary/80">
                                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-dark dark:text-white">{t('Horario de atención', 'Office hours')}</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{t('Lun-Vie: 9:00 - 18:00', 'Mon-Fri: 9:00 - 18:00')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <div className="animate-fade-in rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow mb-6">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <h3 className="font-heading mb-2 text-xl font-semibold">{t('¿Preferes WhatsApp?', 'Prefer WhatsApp?')}</h3>
                                <p className="mb-6 text-emerald-50">
                                    {t('Escríbenos y te respondemos rápido', 'Write to us and we will respond quickly')}
                                </p>
                                <a
                                    href="https://wa.me/212661234567"
                                    className="inline-block rounded-lg bg-white hover:bg-gray-100 px-8 py-3 font-semibold text-emerald-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
                                >
                                    {t('Enviar mensaje', 'Send message')}
                                </a>
                            </div>

                            {/* Response Time */}
                            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-6 text-center">
                                <p className="font-semibold text-blue-900 dark:text-blue-100">
                                    ⏱️ {t('Respondemos en menos de 24 horas', 'We respond in less than 24 hours')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}
