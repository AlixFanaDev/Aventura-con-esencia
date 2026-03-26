import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function ScrollHero({
    title = 'Aventuras con',
    highlightText = 'Esencia',
    subtitle = 'Community-based journeys through Morocco — designed with the people who call it home.',
    ctaPrimary = { label: 'Plan My Trip', url: '/contact' },
    ctaSecondary = { label: 'Explore Destinations', url: '#destinations' },
    mockupImage = null,
    logos = [],
}) {
    const textRef = useRef(null);
    const mockupRef = useRef(null);
    const logosRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let currentScroll = 0;
        let targetScroll = 0;
        let animationId = null;

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        const animate = () => {
            currentScroll = lerp(currentScroll, targetScroll, 0.08);
            const progress = Math.min(currentScroll / 600, 1);

            const textY = progress * -80;
            const textScale = 1 - progress * 0.12;
            const textOpacity = 1 - progress * 0.6;

            const mockupY = 80 - progress * 80;
            const mockupRotX = 18 - progress * 18;
            const mockupScale = 0.92 + progress * 0.08;

            const logoOpacity = 0.5 + progress * 0.5;
            const logoBlur = 4 - progress * 4;

            if (textRef.current) {
                textRef.current.style.transform = `translateY(${textY}px) scale(${textScale})`;
                textRef.current.style.opacity = textOpacity;
            }

            if (mockupRef.current) {
                mockupRef.current.style.transform = `perspective(1200px) rotateX(${mockupRotX}deg) translateY(${mockupY}px) scale(${mockupScale})`;
            }

            if (logosRef.current) {
                logosRef.current.style.opacity = logoOpacity;
                logosRef.current.style.filter = `blur(${logoBlur}px)`;
            }

            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [isDesktop]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-950" />

            <div className="container-custom relative z-10 flex min-h-screen flex-col justify-center pt-24 pb-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div ref={textRef} className="will-change-transform-opacity" style={{ willChange: 'transform, opacity' }}>
                        <h1 className="font-heading mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                            {title} <span className="text-amber-400 not-italic">{highlightText}</span>
                        </h1>
                        <p className="mb-8 max-w-xl text-lg text-zinc-400 md:text-xl">{subtitle}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href={ctaPrimary.url} className="btn-primary">
                                {ctaPrimary.label}
                            </Link>
                            <Link
                                href={ctaSecondary.url}
                                className="btn-outline border-zinc-600 text-zinc-300 hover:border-amber-400 hover:text-amber-400"
                            >
                                {ctaSecondary.label}
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={mockupRef}
                        className="relative hidden will-change-transform lg:block"
                        style={{
                            willChange: 'transform',
                            transform: 'perspective(1200px) rotateX(18deg) translateY(80px) scale(0.92)',
                        }}
                    >
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl">
                            {mockupImage ? (
                                <img src={mockupImage} alt="Dashboard" className="w-full object-cover" />
                            ) : (
                                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                                    <div className="text-center text-zinc-500">
                                        <svg className="mx-auto mb-4 h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <p className="text-sm">Add mockup image</p>
                                    </div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 shadow-2xl" />
                    </div>
                </div>

                {logos.length > 0 && (
                    <div ref={logosRef} className="mt-16 border-t border-zinc-800 pt-8 opacity-50" style={{ opacity: 0.5, filter: 'blur(4px)' }}>
                        <p className="mb-4 text-center text-sm text-zinc-500">Trusted by travelers worldwide</p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    className="h-8 w-auto opacity-70 grayscale transition-opacity hover:opacity-100"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
