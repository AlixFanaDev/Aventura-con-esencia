import { Link, usePage, router } from '@inertiajs/react';
import { clsx, type ClassValue } from 'clsx';
import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const logo = '/images/logo.png';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NavLink {
    id: string;
    label_es: string;
    label_en: string;
    path: string;
    type: string;
    submenu?: { label_es: string; label_en: string; path: string; icon?: ReactNode; flag?: string }[];
}

interface NavbarProps {
    lang?: 'es' | 'en';
    navigation?: {
        main_links: NavLink[];
        cta_button: { label_es: string; label_en: string; path: string; style: string };
    };
    site?: { name: string; email: string };
}

export default function Navbar({
    navigation = defaultNavigation,
    site = { name: 'Aventuras con Esencia', email: 'info@aventurasconesencia.com' },
}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const { url, props } = usePage<{ lang: 'es' | 'en' }>();
    const lang = props.lang || 'es';

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const toggleLang = (newLang: 'es' | 'en') => {
        if (newLang === lang) return;

        setMobileMenuOpen(false);
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('lang', newLang);
        router.get(
            currentUrl.pathname + currentUrl.search,
            {},
            {
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    const toggleMobileDropdown = (linkId: string) => {
        setMobileDropdownOpen(mobileDropdownOpen === linkId ? null : linkId);
    };

    const isLinkActive = (path: string) => {
        if (path === '/' && url === '/') return true;
        return path !== '/' && url.startsWith(path);
    };

    return (
        <nav
            className={cn(
                'fixed top-0 right-0 left-0 z-1000 transition-all duration-300',
                scrolled ? 'bg-white/95 py-2 shadow-md backdrop-blur-md' : 'bg-cream/95 py-4 backdrop-blur-sm',
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-primary transition-transform group-hover:scale-105">
                            <img src={logo} alt={site.name} className="h-full w-full object-cover" />
                        </div>
                        <span className="font-heading text-xl font-bold tracking-tight text-dark">{site.name}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navigation.main_links.map((link) => (
                            <div key={link.id} className="relative px-2">
                                {link.type === 'dropdown' ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => {
                                            if (dropdownTimeoutRef.current) {
                                                clearTimeout(dropdownTimeoutRef.current);
                                                dropdownTimeoutRef.current = null;
                                            }
                                            setDropdownOpen(link.id);
                                        }}
                                        onClick={() => setDropdownOpen(link.id)}
                                        onMouseLeave={() => {
                                            dropdownTimeoutRef.current = setTimeout(() => {
                                                setDropdownOpen(null);
                                            }, 200);
                                        }}
                                    >
                                        <button
                                            className={cn(
                                                'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200',
                                                isLinkActive(link.path) || dropdownOpen === link.id
                                                    ? 'bg-primary/5 text-primary'
                                                    : 'text-text-secondary hover:bg-primary/5 hover:text-primary',
                                            )}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen === link.id}
                                        >
                                            {t(link.label_es, link.label_en)}
                                            <svg
                                                className={cn(
                                                    'h-4 w-4 transition-transform duration-200',
                                                    dropdownOpen === link.id ? 'rotate-180' : '',
                                                )}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={cn(
                                                'absolute top-full left-1/2 mt-2 w-72 origin-top -translate-x-1/2 transition-all duration-200',
                                                dropdownOpen === link.id
                                                    ? 'visible scale-100 opacity-100'
                                                    : 'pointer-events-none invisible scale-95 opacity-0',
                                            )}
                                        >
                                            <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white p-2 shadow-2xl">
                                                <div className="grid grid-cols-1 gap-1">
                                                    {link.submenu?.map((item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={item.path}
                                                            className={cn(
                                                                'group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200',
                                                                url === item.path
                                                                    ? 'bg-primary/10 text-primary'
                                                                    : 'text-text-secondary hover:bg-stone-50 hover:text-primary',
                                                            )}
                                                        >
                                                            {item.icon && (
                                                                <span
                                                                    className={cn(
                                                                        'flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
                                                                        url === item.path
                                                                            ? 'bg-primary/20 text-primary'
                                                                            : 'bg-stone-100 text-stone-500 group-hover:bg-primary/10 group-hover:text-primary',
                                                                    )}
                                                                >
                                                                    {item.icon}
                                                                </span>
                                                            )}
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold">{t(item.label_es, item.label_en)}</span>
                                                            </div>
                                                            <svg
                                                                className="ml-auto h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className={cn(
                                            'block rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200',
                                            isLinkActive(link.path)
                                                ? 'bg-primary/5 text-primary'
                                                : 'text-text-secondary hover:bg-primary/5 hover:text-primary',
                                        )}
                                    >
                                        {t(link.label_es, link.label_en)}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions & Language */}
                    <div className="hidden items-center gap-6 lg:flex">
                        <div className="flex items-center gap-1 rounded-full bg-stone-100 p-1">
                            <button
                                onClick={() => toggleLang('es')}
                                className={cn(
                                    'rounded-full px-3 py-1 text-xs font-bold transition-all',
                                    lang === 'es' ? 'bg-white text-primary shadow-sm' : 'text-stone-500 hover:text-primary',
                                )}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => toggleLang('en')}
                                className={cn(
                                    'rounded-full px-3 py-1 text-xs font-bold transition-all',
                                    lang === 'en' ? 'bg-white text-primary shadow-sm' : 'text-stone-500 hover:text-primary',
                                )}
                            >
                                EN
                            </button>
                        </div>
                        <Link href={navigation.cta_button.path} className="btn-primary py-2.5 text-sm shadow-lg shadow-primary/20">
                            {t(navigation.cta_button.label_es, navigation.cta_button.label_en)}
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="relative h-10 w-10 rounded-xl bg-stone-100 z-60 text-dark transition-colors hover:bg-stone-200 lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                            <div
                                className={cn(
                                    'absolute h-0.5 w-6 bg-current transition-all duration-300',
                                    mobileMenuOpen ? 'top-3 rotate-45' : 'top-1.5',
                                )}
                            />
                            <div
                                className={cn(
                                    'absolute top-3 h-0.5 w-6 bg-current transition-all duration-300',
                                    mobileMenuOpen ? '-translate-x-4 opacity-0' : 'opacity-100',
                                )}
                            />
                            <div
                                className={cn(
                                    'absolute h-0.5 w-6 bg-current transition-all duration-300',
                                    mobileMenuOpen ? 'top-3 -rotate-45' : 'top-4.5',
                                )}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Backdrop */}
                <div
                    className={cn(
                        'fixed inset-0 `top-[72px]` z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden',
                        mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Mobile Menu */}
                <div
                    className={cn(
                        'fixed inset-0 `top-[72px]` z-50 bg-white transition-all duration-300 lg:hidden',
                        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-full opacity-0',
                    )}
                >
                    <div className="container-custom h-600 bg-amber-50 overflow-y-auto py-8" >
                        <div className="flex flex-col gap-2">
                            {navigation.main_links.map((link) => (
                                <div key={link.id} className="border-b border-stone-50 py-2 last:border-0">
                                    {link.type === 'dropdown' ? (
                                        <div>
                                            <button
                                                onClick={() => toggleMobileDropdown(link.id)}
                                                className={cn(
                                                    'flex w-full items-center justify-between py-3 text-lg font-bold transition-colors',
                                                    isLinkActive(link.path) || mobileDropdownOpen === link.id ? 'text-primary' : 'text-dark',
                                                )}
                                            >
                                                <span>{t(link.label_es, link.label_en)}</span>
                                                <svg
                                                    className={cn(
                                                        'h-5 w-5 transition-transform duration-200',
                                                        mobileDropdownOpen === link.id ? 'rotate-180' : '',
                                                    )}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div
                                                className={cn(
                                                    'overflow-hidden transition-all duration-300',
                                                    mobileDropdownOpen === link.id ? 'mt-2 `max-h-[500px]` opacity-100' : 'max-h-0 opacity-0',
                                                )}
                                            >
                                                <div className="ml-2 grid grid-cols-1 gap-2 border-l-2 border-primary/20 py-2 pl-4">
                                                    {link.submenu?.map((item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={item.path}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className={cn(
                                                                'flex items-center gap-3 rounded-lg px-3 py-3 transition-colors',
                                                                url === item.path ? 'bg-primary/10 font-bold text-primary' : 'text-text-secondary',
                                                            )}
                                                        >
                                                            {item.icon && <span className="text-primary/70">{item.icon}</span>}
                                                            <span>{t(item.label_es, item.label_en)}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                'block py-3 text-lg font-bold transition-colors',
                                                isLinkActive(link.path) ? 'text-primary' : 'text-dark',
                                            )}
                                        >
                                            {t(link.label_es, link.label_en)}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            <Link
                                href={navigation.cta_button.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="btn-primary w-full justify-center py-4 text-center shadow-xl shadow-primary/20"
                            >
                                {t(navigation.cta_button.label_es, navigation.cta_button.label_en)}
                            </Link>

                            <div className="mt-4 flex items-center justify-center gap-4 border-t border-stone-100 py-6">
                                <button
                                    onClick={() => toggleLang('es')}
                                    className={cn(
                                        'flex h-12 flex-1 items-center justify-center gap-2 rounded-xl font-bold transition-all',
                                        lang === 'es' ? 'bg-primary text-white' : 'bg-stone-100 text-stone-500',
                                    )}
                                >
                                    Español
                                </button>
                                <button
                                    onClick={() => toggleLang('en')}
                                    className={cn(
                                        'flex h-12 flex-1 items-center justify-center gap-2 rounded-xl font-bold transition-all',
                                        lang === 'en' ? 'bg-primary text-white' : 'bg-stone-100 text-stone-500',
                                    )}
                                >
                                    English
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const defaultNavigation = {
    main_links: [
        {
            id: 'experiences',
            label_es: 'Experiencias',
            label_en: 'Experiences',
            path: '/experiencias',
            type: 'dropdown',
            submenu: [
                { label_es: 'Senderismo y Trekking', label_en: 'Hiking & Trekking', path: '/experiencias/categoria/senderismo' },
                { label_es: 'Aventura en el Desierto', label_en: 'Desert Adventure', path: '/experiencias/categoria/desierto' },
                { label_es: 'Tours Culturales', label_en: 'Cultural Tours', path: '/experiencias/categoria/cultura' },
                { label_es: 'Excursiones Costeras', label_en: 'Coastal Excursions', path: '/experiencias/categoria/costa' },
                { label_es: 'Montañismo', label_en: 'Mountain Climbing', path: '/experiencias/categoria/montana' },
                { label_es: 'Experiencias Locales', label_en: 'Local Experiences', path: '/experiencias/categoria/locales' },
            ],
        },
        {
            id: 'destinations',
            label_es: 'Destinos',
            label_en: 'Destinations',
            path: '/destinos',
            type: 'dropdown',
            submenu: [
                {
                    label_es: 'Marrakech',
                    label_en: 'Marrakech',
                    path: '/destinos/marrakech',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                            <circle cx="12" cy="7" r="2" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Fez',
                    label_en: 'Fez',
                    path: '/destinos/fez',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 3v18M15 3v18" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Casablanca',
                    label_en: 'Casablanca',
                    path: '/destinos/casablanca',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L8 6v4l-4 4 4 4v4l4 4 4-4v-4l4-4-4-4V6l-4-4z" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Tangier',
                    label_en: 'Tangier',
                    path: '/destinos/tangier',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="9" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Essaouira',
                    label_en: 'Essaouira',
                    path: '/destinos/essaouira',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
                            />
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Merzouga',
                    label_en: 'Merzouga',
                    path: '/destinos/merzouga',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 18 Q6 14, 12 18 T22 18" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 14 Q6 10, 12 14 T22 14" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Ouarzazate',
                    label_en: 'Ouarzazate',
                    path: '/destinos/ouarzazate',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="2" y="6" width="20" height="14" rx="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
                        </svg>
                    ),
                },
                {
                    label_es: 'Rabat',
                    label_en: 'Rabat',
                    path: '/destinos/rabat',
                    icon: (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-6 4 2 7-5-4-5 4 2-7-6-4h7z" />
                        </svg>
                    ),
                },
            ],
        },
        {
            id: 'blog',
            label_es: 'Blog',
            label_en: 'Blog',
            path: '/blog',
            type: 'link',
        },
        {
            id: 'about',
            label_es: 'Nosotros',
            label_en: 'About Us',
            path: '/nosotros',
            type: 'link',
        },
        {
            id: 'contact',
            label_es: 'Contacto',
            label_en: 'Contact',
            path: '/contacto',
            type: 'link',
        },
    ],
    cta_button: {
        label_es: 'Reservar Aventura',
        label_en: 'Book Adventure',
        path: '/experiencias',
        style: 'primary',
    },
};
