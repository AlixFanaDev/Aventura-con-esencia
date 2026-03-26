<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Destination;
use App\Models\Experience;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['slug' => 'montana', 'name_es' => 'Montaña', 'name_en' => 'Mountain'],
            ['slug' => 'desierto', 'name_es' => 'Desierto', 'name_en' => 'Desert'],
            ['slug' => 'cultura', 'name_es' => 'Cultura', 'name_en' => 'Culture'],
            ['slug' => 'costa', 'name_es' => 'Costa', 'name_en' => 'Coast'],
            ['slug' => 'aventura', 'name_es' => 'Aventura', 'name_en' => 'Adventure'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        $destinations = [
            ['slug' => 'marrakech', 'name' => 'Marrakech'],
            ['slug' => 'merzouga', 'name' => 'Merzouga'],
            ['slug' => 'fez', 'name' => 'Fez'],
            ['slug' => 'essaouira', 'name' => 'Essaouira'],
            ['slug' => 'ouarzazate', 'name' => 'Ouarzazate'],
            ['slug' => 'casablanca', 'name' => 'Casablanca'],
            ['slug' => 'tangier', 'name' => 'Tangier'],
        ];

        foreach ($destinations as $destination) {
            Destination::create($destination);
        }

        $categoryIds = Category::pluck('id', 'slug');
        $destinationIds = Destination::pluck('id', 'slug');

        $experiences = [
            [
                'slug' => 'trekking-atlas',
                'title_es' => 'Trekking por el Alto Atlas',
                'title_en' => 'High Atlas Trekking',
                'category_slug' => 'montana',
                'destination_slug' => 'marrakech',
                'difficulty' => 'moderado',
                'duration_days' => 3,
                'price_from_usd' => 280,
                'rating' => 4.9,
                'reviews_count' => 67,
                'badge_es' => 'Más popular',
                'badge_en' => 'Most Popular',
                'badge_color' => '#F4A261',
                'image' => 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
            ],
            [
                'slug' => 'desierto-merzouga',
                'title_es' => 'Aventura en el Desierto de Merzouga',
                'title_en' => 'Merzouga Desert Adventure',
                'category_slug' => 'desierto',
                'destination_slug' => 'merzouga',
                'difficulty' => 'facil',
                'duration_days' => 2,
                'price_from_usd' => 180,
                'rating' => 4.8,
                'reviews_count' => 124,
                'badge_es' => 'Top Rated',
                'badge_en' => 'Top Rated',
                'badge_color' => '#2D6A4F',
                'image' => 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
            ],
            [
                'slug' => 'tour-fez',
                'title_es' => 'Tour Guiado por Fez Medina',
                'title_en' => 'Guided Tour of Fez Medina',
                'category_slug' => 'cultura',
                'destination_slug' => 'fez',
                'difficulty' => 'facil',
                'duration_days' => 1,
                'price_from_usd' => 75,
                'rating' => 4.9,
                'reviews_count' => 89,
                'image' => 'https://images.unsplash.com/photo-1553913861-c0a802e7a15d?w=800&q=80',
            ],
            [
                'slug' => 'essaouira',
                'title_es' => 'Excursión a Essaouira desde Marrakech',
                'title_en' => 'Excursion to Essaouira from Marrakech',
                'category_slug' => 'costa',
                'destination_slug' => 'essaouira',
                'difficulty' => 'facil',
                'duration_days' => 1,
                'price_from_usd' => 65,
                'rating' => 4.7,
                'reviews_count' => 156,
                'image' => 'https://images.unsplash.com/photo-1559641472-7a5af5a3bf6a?w=800&q=80',
            ],
            [
                'slug' => 'cascadas-ouirgane',
                'title_es' => 'Ruta por las Cascadas de Ouirgane',
                'title_en' => 'Route to Ouirgane Waterfalls',
                'category_slug' => 'montana',
                'destination_slug' => 'marrakech',
                'difficulty' => 'moderado',
                'duration_days' => 1,
                'price_from_usd' => 55,
                'rating' => 4.6,
                'reviews_count' => 43,
                'image' => 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
            ],
            [
                'slug' => 'casablanca-rabat',
                'title_es' => 'Tour Casablanca y Rabat',
                'title_en' => 'Casablanca and Rabat Tour',
                'category_slug' => 'cultura',
                'destination_slug' => 'casablanca',
                'difficulty' => 'facil',
                'duration_days' => 1,
                'price_from_usd' => 85,
                'rating' => 4.5,
                'reviews_count' => 32,
                'image' => 'https://images.unsplash.com/photo-1569388330292-7a5af5a3bf6a?w=800&q=80',
            ],
            [
                'slug' => 'trekking-toubkal',
                'title_es' => 'Ascensión al Toubkal (4167m)',
                'title_en' => 'Toubkal Ascent (4167m)',
                'category_slug' => 'montana',
                'destination_slug' => 'marrakech',
                'difficulty' => 'dificil',
                'duration_days' => 2,
                'price_from_usd' => 220,
                'rating' => 5.0,
                'reviews_count' => 28,
                'badge_es' => 'Para expertos',
                'badge_en' => 'For experts',
                'badge_color' => '#D62828',
                'image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            ],
            [
                'slug' => 'valley-dades',
                'title_es' => 'Ruta de las Mil Kasbahs',
                'title_en' => 'Route of the Thousand Kasbahs',
                'category_slug' => 'cultura',
                'destination_slug' => 'ouarzazate',
                'difficulty' => 'moderado',
                'duration_days' => 2,
                'price_from_usd' => 165,
                'rating' => 4.7,
                'reviews_count' => 51,
                'image' => 'https://images.unsplash.com/photo-1545167496-c1e092d383a2?w=800&q=80',
            ],
            [
                'slug' => 'tangier',
                'title_es' => 'Excursión a Tanger desde España',
                'title_en' => 'Excursion to Tangier from Spain',
                'category_slug' => 'cultura',
                'destination_slug' => 'tangier',
                'difficulty' => 'facil',
                'duration_days' => 1,
                'price_from_usd' => 120,
                'rating' => 4.4,
                'reviews_count' => 78,
                'image' => 'https://images.unsplash.com/photo-1569388330292-7a5af5a3bf6a?w=800&q=80',
            ],
            [
                'slug' => 'noche-desierto',
                'title_es' => 'Noche Estrellada en el Sáhara',
                'title_en' => 'Starry Night in the Sahara',
                'category_slug' => 'desierto',
                'destination_slug' => 'merzouga',
                'difficulty' => 'facil',
                'duration_days' => 1,
                'price_from_usd' => 120,
                'rating' => 4.9,
                'reviews_count' => 89,
                'image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            ],
            [
                'slug' => 'cocina-marroqui',
                'title_es' => 'Clase de Cocina Marroquí',
                'title_en' => 'Moroccan Cooking Class',
                'category_slug' => 'cultura',
                'destination_slug' => 'marrakech',
                'difficulty' => 'facil',
                'duration_days' => 1,
                'price_from_usd' => 55,
                'rating' => 4.9,
                'reviews_count' => 112,
                'image' => 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
            ],
            [
                'slug' => 'kitesurf-essaouira',
                'title_es' => 'Curso de Kitesurf en Essaouira',
                'title_en' => 'Kitesurf Course in Essaouira',
                'category_slug' => 'aventura',
                'destination_slug' => 'essaouira',
                'difficulty' => 'moderado',
                'duration_days' => 3,
                'price_from_usd' => 280,
                'rating' => 4.8,
                'reviews_count' => 42,
                'image' => 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
            ],
        ];

        foreach ($experiences as $exp) {
            Experience::create([
                'slug' => $exp['slug'],
                'title_es' => $exp['title_es'],
                'title_en' => $exp['title_en'],
                'category_id' => $categoryIds[$exp['category_slug']],
                'destination_id' => $destinationIds[$exp['destination_slug']],
                'difficulty' => $exp['difficulty'],
                'duration_days' => $exp['duration_days'],
                'price_from_usd' => $exp['price_from_usd'],
                'rating' => $exp['rating'],
                'reviews_count' => $exp['reviews_count'],
                'badge_es' => $exp['badge_es'] ?? null,
                'badge_en' => $exp['badge_en'] ?? null,
                'badge_color' => $exp['badge_color'] ?? null,
                'image' => $exp['image'],
            ]);
        }
    }
}
