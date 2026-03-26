export type * from './auth';

export interface Experience {
    id: string;
    slug: string;
    title_es: string;
    title_en: string;
    category: string;
    destination: string;
    difficulty: string;
    duration_days: number;
    price_from_usd: number;
    rating: number;
    reviews_count: number;
    image_cover?: string;
    image?: string;
    badge_es?: string;
    badge_en?: string;
    badge?: string;
    badge_color?: string;
    badgeColor?: string;
}
