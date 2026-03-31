import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { experiencesData } from '@/lib/experiences';
import type { Experience } from '@/types';

interface PageProps {
    lang?: 'es' | 'en';
    experience?: Experience;
    flash?: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function BookingPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);
    const [step, setStep] = useState(1);
    const [bookingReference, setBookingReference] = useState('');
    const { data, setData, post, processing } = useForm({
        experience: '',
        date: '',
        participants: 1,
        name: '',
        email: '',
        phone: '',
        notes: '',
    });

    useEffect(() => {
        if (props.flash?.success) {
            setBookingReference(
                `ACE-2024-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
            );
            setStep(4);
        }
    }, [props.flash?.success]);

    const experiences = experiencesData;

    const selectedExperience = experiences.find((e) => e.id === data.experience);
    const totalPrice = selectedExperience ? selectedExperience.price_from_usd * data.participants : 0;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/booking');
    };

    return (
        <>
            <Head>
                <title>{t('Reservar tu Aventura | Aventuras con Esencia', 'Book Your Adventure | Aventuras con Esencia')}</title>
                <meta name="description" content={t('Reserva tu viaje soñado a Marruecos ahora.', 'Book your dream trip to Morocco now.')} />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative flex h-70 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dark" style={{ opacity: 0.5 }} />
                <img src="/images/merzouga/merzouga1.jpg" alt="Booking" className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="font-heading text-4xl font-bold">{t('Reservar tu Aventura', 'Book Your Adventure')}</h1>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="bg-cream-dark py-8">
                <div className="container-custom">
                    <div className="flex items-center justify-center gap-4">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                                        step >= s ? 'bg-primary text-white' : 'bg-stone/20 text-text-secondary'
                                    }`}
                                >
                                    {s}
                                </div>
                                {s < 4 && <div className={`h-1 w-16 ${step > s ? 'bg-primary' : 'bg-stone/20'}`} />}
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center gap-8 text-sm">
                        <span className={step >= 1 ? 'font-medium text-primary' : 'text-text-secondary'}>{t('Experiencia', 'Experience')}</span>
                        <span className={step >= 2 ? 'font-medium text-primary' : 'text-text-secondary'}>{t('Fecha y grupo', 'Date & group')}</span>
                        <span className={step >= 3 ? 'font-medium text-primary' : 'text-text-secondary'}>{t('Tus datos', 'Your details')}</span>
                        <span className={step >= 4 ? 'font-medium text-primary' : 'text-text-secondary'}>{t('Confirmación', 'Confirmation')}</span>
                    </div>
                </div>
            </section>

            {/* Form Content */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Main Form */}
                        <div className="lg:col-span-2">
                            <div className="rounded-xl bg-white p-8 shadow-md">
                                {/* Step 1: Select Experience */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="font-heading mb-6 text-2xl font-bold">
                                            {t('Selecciona tu experiencia', 'Select your experience')}
                                        </h2>
                                        <div className="space-y-4">
                                            {experiences.map((exp) => (
                                                <label
                                                    key={exp.id}
                                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-colors ${
                                                        data.experience === exp.id
                                                            ? 'border-primary bg-primary/5'
                                                            : 'border-stone/20 hover:border-primary/50'
                                                    }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="experience"
                                                        value={exp.id}
                                                        checked={data.experience === exp.id}
                                                        onChange={(e) => setData({ ...data, experience: e.target.value })}
                                                        className="h-5 w-5 text-primary"
                                                    />
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold">{t(exp.title_es, exp.title_en)}</h3>
                                                        <span className="font-bold text-primary">${exp.price_from_usd}</span>
                                                        <span className="text-sm text-text-secondary"> {t('por persona', 'per person')}</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                        <div className="mt-8">
                                            <Link href="/experiencias" className="text-primary hover:underline">
                                                ← {t('Ver todas las experiencias', 'View all experiences')}
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Date & Participants */}
                                {step === 2 && (
                                    <div>
                                        <h2 className="font-heading mb-6 text-2xl font-bold">
                                            {t('Selecciona fecha y número de personas', 'Select date and number of people')}
                                        </h2>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-text-secondary">
                                                    {t('Fecha de la experiencia', 'Experience date')}
                                                </label>
                                                <input
                                                    type="date"
                                                    className="border-stone/20 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
                                                    value={data.date}
                                                    onChange={(e) => setData({ ...data, date: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-text-secondary">
                                                    {t('Número de personas', 'Number of people')}
                                                </label>
                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={() => setData({ ...data, participants: Math.max(1, data.participants - 1) })}
                                                        className="border-stone/20 flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-cream"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-xl font-semibold">{data.participants}</span>
                                                    <button
                                                        onClick={() => setData({ ...data, participants: data.participants + 1 })}
                                                        className="border-stone/20 flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-cream"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Personal Details */}
                                {step === 3 && (
                                    <div>
                                        <h2 className="font-heading mb-6 text-2xl font-bold">{t('Tus datos personales', 'Your personal details')}</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-text-secondary">
                                                    {t('Nombre completo', 'Full name')} *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-stone/20 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-text-secondary">
                                                    {t('Correo electrónico', 'Email')} *
                                                </label>
                                                <input
                                                    type="email"
                                                    className="border-stone/20 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-text-secondary">
                                                    {t('Teléfono / WhatsApp', 'Phone / WhatsApp')}
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="border-stone/20 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
                                                    value={data.phone}
                                                    onChange={(e) => setData('phone', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-text-secondary">
                                                    {t('Notas adicionales', 'Additional notes')}
                                                </label>
                                                <textarea
                                                    className="border-stone/20 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
                                                    rows={3}
                                                    placeholder={t(
                                                        '¿Alguna restricción alimentaria o requerimiento especial?',
                                                        'Any dietary restrictions or special requirements?',
                                                    )}
                                                    value={data.notes}
                                                    onChange={(e) => setData('notes', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Confirmation */}
                                {step === 4 && (
                                    <div className="animate-fade-in py-6 text-center md:py-10">
                                        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-stone/15 bg-gradient-to-b from-white via-white to-cream/40 shadow-[0_25px_50px_-12px_rgba(139,69,19,0.12)] ring-1 ring-primary/10">
                                            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/85 to-amber-700/40" aria-hidden />

                                            <div className="px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12">
                                                <div className="relative mx-auto mb-8 h-24 w-24">
                                                    <div
                                                        className="absolute inset-0 animate-ping rounded-full bg-primary/15"
                                                        aria-hidden
                                                    />
                                                    <div
                                                        className="absolute inset-3 rounded-full bg-primary/10 blur-sm"
                                                        aria-hidden
                                                    />
                                                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/85 shadow-lg shadow-primary/25 ring-4 ring-white">
                                                        <svg
                                                            className="h-11 w-11 text-white"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            aria-hidden
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2.5}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                                                    {t('Reserva confirmada', 'Booking confirmed')}
                                                </p>
                                                <h2 className="font-heading mb-4 text-3xl font-bold text-dark md:text-4xl">
                                                    {t('¡Aventura Reservada!', 'Adventure Booked!')}
                                                </h2>

                                                <p
                                                    className="animate-slide-up stagger-2 mx-auto mb-10 max-w-md text-base leading-relaxed text-text-secondary md:text-lg"
                                                    style={{ animationDelay: '0.15s' }}
                                                >
                                                    {t(
                                                        '¡Excelente elección! Hemos recibido tu solicitud de reserva y estamos emocionados de tenerte con nosotros.',
                                                        'Great choice! We have received your booking request and we are excited to have you with us.',
                                                    )}
                                                </p>

                                                <div
                                                    className="animate-slide-up stagger-2 mb-10 rounded-xl border border-primary/15 bg-cream/60 p-6 text-left shadow-inner md:p-8"
                                                    style={{ animationDelay: '0.25s' }}
                                                >
                                                    <div className="mb-6 flex flex-col items-center border-b border-primary/10 pb-6 text-center">
                                                        <p className="mb-3 text-xs font-semibold tracking-wider text-primary/90 uppercase">
                                                            {t('Código de reserva', 'Booking code')}
                                                        </p>
                                                        <p className="inline-block rounded-lg border border-primary/20 bg-white px-5 py-2.5 font-mono text-2xl font-bold tracking-wide text-primary shadow-sm md:text-3xl">
                                                            {bookingReference || '—'}
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                                                        <div className="rounded-lg bg-white/80 px-4 py-3 ring-1 ring-stone/10">
                                                            <p className="text-xs font-medium text-text-secondary uppercase">
                                                                {t('Experiencia', 'Experience')}
                                                            </p>
                                                            <p className="mt-1 font-semibold text-dark">
                                                                {selectedExperience
                                                                    ? t(selectedExperience.title_es, selectedExperience.title_en)
                                                                    : '-'}
                                                            </p>
                                                        </div>
                                                        <div className="rounded-lg bg-white/80 px-4 py-3 ring-1 ring-stone/10">
                                                            <p className="text-xs font-medium text-text-secondary uppercase">
                                                                {t('Fecha', 'Date')}
                                                            </p>
                                                            <p className="mt-1 font-semibold text-dark">{data.date || '-'}</p>
                                                        </div>
                                                        <div className="rounded-lg bg-white/80 px-4 py-3 ring-1 ring-stone/10">
                                                            <p className="text-xs font-medium text-text-secondary uppercase">
                                                                {t('Viajeros', 'Travelers')}
                                                            </p>
                                                            <p className="mt-1 font-semibold text-dark">
                                                                {data.participants} {t('personas', 'people')}
                                                            </p>
                                                        </div>
                                                        <div className="rounded-lg bg-white/80 px-4 py-3 ring-1 ring-stone/10">
                                                            <p className="text-xs font-medium text-text-secondary uppercase">
                                                                {t('Total pagado', 'Total paid')}
                                                            </p>
                                                            <p className="mt-1 text-lg font-bold text-primary">${totalPrice} USD</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="animate-slide-up stagger-2 mb-10" style={{ animationDelay: '0.35s' }}>
                                                    <h3 className="font-heading mb-5 text-lg font-bold text-dark md:text-xl">
                                                        {t('¿Qué sigue ahora?', 'What happens next?')}
                                                    </h3>
                                                    <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
                                                        <div className="flex flex-col items-center gap-3 rounded-xl border border-transparent bg-white/90 p-5 text-center shadow-sm transition hover:border-primary/20 hover:shadow-md">
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
                                                                1
                                                            </div>
                                                            <p className="text-sm leading-snug font-medium text-dark">
                                                                {t(
                                                                    'Revisa tu email de confirmación',
                                                                    'Check your confirmation email',
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-3 rounded-xl border border-transparent bg-white/90 p-5 text-center shadow-sm transition hover:border-primary/20 hover:shadow-md">
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
                                                                2
                                                            </div>
                                                            <p className="text-sm leading-snug font-medium text-dark">
                                                                {t(
                                                                    'Te contactaremos por WhatsApp',
                                                                    'We will contact you via WhatsApp',
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-3 rounded-xl border border-transparent bg-white/90 p-5 text-center shadow-sm transition hover:border-primary/20 hover:shadow-md">
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
                                                                3
                                                            </div>
                                                            <p className="text-sm leading-snug font-medium text-dark">
                                                                {t(
                                                                    '¡Prepárate para la aventura!',
                                                                    'Get ready for the adventure!',
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                                                    <Link href="/" className="btn-primary w-full sm:w-auto">
                                                        <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                            />
                                                        </svg>
                                                        {t('Volver al inicio', 'Back to home')}
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => window.print()}
                                                        className="btn-outline w-full sm:w-auto"
                                                    >
                                                        <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                                            />
                                                        </svg>
                                                        {t('Imprimir recibo', 'Print receipt')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                {step < 4 && (
                                    <div className="border-stone/20 mt-8 flex justify-between border-t pt-6">
                                        {step > 1 ? (
                                            <button
                                                onClick={() => setStep(step - 1)}
                                                className="rounded-lg border-2 border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                                            >
                                                ← {t('Atrás', 'Back')}
                                            </button>
                                        ) : (
                                            <div />
                                        )}
                                        <button
                                            onClick={step === 3 ? submit : () => setStep(step + 1)}
                                            disabled={
                                                (step === 1 && !data.experience) ||
                                                (step === 2 && !data.date) ||
                                                (step === 3 && (!data.name || !data.email)) ||
                                                processing
                                            }
                                            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? t('Procesando...', 'Processing...')
                                                : step === 3
                                                  ? t('Confirmar reserva', 'Confirm booking')
                                                  : t('Continuar', 'Continue')}{' '}
                                            →
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar - Booking Summary */}
                        {step < 4 && (
                            <div>
                                <div className="sticky top-32 rounded-xl bg-white p-6 shadow-md">
                                    <h3 className="font-heading mb-4 text-xl font-bold">{t('Resumen de la reserva', 'Booking summary')}</h3>

                                    {selectedExperience ? (
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                                                    <img src={selectedExperience.image} alt="" className="h-full w-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold">
                                                        {t(selectedExperience.title_es, selectedExperience.title_en)}
                                                    </h4>
                                                    <p className="text-sm text-text-secondary">
                                                        {t('Por persona', 'Per person')}: ${selectedExperience.price_from_usd}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-stone/20 space-y-2 border-t pt-4">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-text-secondary">{t('Fecha', 'Date')}</span>
                                                    <span>{data.date || '-'}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-text-secondary">{t('Personas', 'People')}</span>
                                                    <span>{data.participants}</span>
                                                </div>
                                            </div>

                                            <div className="border-stone/20 border-t pt-4">
                                                <div className="flex justify-between">
                                                    <span className="font-semibold">{t('Total', 'Total')}</span>
                                                    <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                                                </div>
                                                <p className="text-text-light mt-1 text-xs">{t('Impuestos incluidos', 'Taxes included')}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="py-8 text-center text-text-secondary">
                                            {t('Selecciona una experiencia para ver el resumen', 'Select an experience to see the summary')}
                                        </p>
                                    )}

                                    {/* Cancellation Policy */}
                                    <div className="border-stone/20 mt-6 border-t pt-6">
                                        <h4 className="mb-2 text-sm font-semibold">{t('Política de cancelación', 'Cancellation policy')}</h4>
                                        <p className="text-xs text-text-secondary">
                                            {t(
                                                'Cancelación gratuita hasta 7 días antes. 50% de reembolso entre 3-7 días. Sin reembolso con menos de 3 días.',
                                                'Free cancellation up to 7 days before. 50% refund between 3-7 days. No refund within 3 days.',
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}
