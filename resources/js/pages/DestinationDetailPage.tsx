import { Head, Link } from '@inertiajs/react';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface DestinationDetailPageProps {
    lang?: 'es' | 'en';
    city?: string;
}

const destinationsData: Record<
    string,
    {
        name: string;
        name_en: string;
        icon: React.ReactNode;
        tagline: string;
        tagline_en: string;
        description: string;
        description_en: string;
        heroImage: string;
        gallery: string[];
        highlights: { title: string; title_en: string; description: string; description_en: string }[];
        activities: { name: string; name_en: string; icon: string }[];
        bestTime: string;
        bestTime_en: string;
        whatToKnow: { text: string; text_en: string }[];
        nearbyDestinations: { name: string; path: string; image: string }[];
    }
> = {
    marrakech: {
        name: 'Marrakech',
        name_en: 'Marrakech',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-4-2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l4-2" />
                <circle cx="12" cy="7" r="2" />
            </svg>
        ),
        tagline: 'La Ciudad Roja',
        tagline_en: 'The Red City',
        description:
            'Marrakech es una ciudad vibrante que fascina con sus colores, olores y sonidos. Conocida como la "Ciudad Roja" por sus muros de barro rojizo, Marrakech es un crisol de culturas donde la tradición antigua se mezcla con la modernidad. Su legendaria Medina, declarada Patrimonio de la UNESCO, alberga monumentos históricos, zocos animados y restaurantes de cocina tradicional.',
        description_en:
            'Marrakech is a vibrant city that fascinates with its colors, smells, and sounds. Known as the "Red City" for its reddish clay walls, Marrakech is a melting pot of cultures where ancient tradition blends with modernity. Its legendary Medina, a UNESCO World Heritage Site, houses historic monuments, lively souks, and traditional cuisine restaurants.',
        heroImage: '/images/marrakech/marrakech1.jpg',
        gallery: [
            '/images/marrakech/marrakech2.jpg',
            '/images/marrakech/marrakech3.jpg',
            '/images/marrakech/marrakech4.jpg',
            '/images/marrakech/marrakech5.jpg',
        ],
        highlights: [
            {
                title: 'Plaza Jemaa el-Fna',
                title_en: 'Jemaa el-Fna Square',
                description:
                    'El corazón palpitante de Marrakech. De día encontrarás vendedores de zumo de naranja y monos amaestrados; de noche, el espacio se transforma en un enorme restaurante al aire libre con artistas, narradores y músicos.',
                description_en:
                    'The beating heart of Marrakech. During the day you will find orange juice vendors and trained monkeys; at night, the space transforms into a huge open-air restaurant with artists, storytellers, and musicians.',
            },
            {
                title: 'Medina y Zocos',
                title_en: 'Medina and Souks',
                description:
                    'El laberinto de calles estrechas de la Medina es un placer para los sentidos. Lose yourself en los zocos de especias, cuero, alfombras y cerámica.',
                description_en:
                    'The labyrinth of narrow streets of the Medina is a pleasure for the senses. Get lost in the souks of spices, leather, carpets, and ceramics.',
            },
            {
                title: 'Jardín Majorelle',
                title_en: 'Majorelle Garden',
                description:
                    'Un oasis de calma creado por el pintor francés Jacques Majorelle y posteriormente restaurado por Yves Saint Laurent. Sus azules intensos y plantas exóticas lo convierten en un lugar único.',
                description_en:
                    'A calm oasis created by French painter Jacques Majorelle and later restored by Yves Saint Laurent. Its intense blues and exotic plants make it a unique place.',
            },
            {
                title: 'Palacio de la Bahía',
                title_en: 'Bahia Palace',
                description:
                    'Un ejemplo impresionante de arquitectura marroquí del siglo XIX con hermosos patios, mosaicos elaboradados y salones decorados.',
                description_en:
                    'An impressive example of 19th-century Moroccan architecture with beautiful courtyards, elaborate mosaics, and decorated halls.',
            },
        ],
        activities: [
            { name: 'Visitas guiadas por la Medina', name_en: 'Guided Medina tours', icon: 'map' },
            { name: 'Clases de cocina marroquí', name_en: 'Moroccan cooking classes', icon: 'utensils' },
            { name: 'Cenas tradicionales con espectáculo', name_en: 'Traditional dinners with show', icon: 'music' },
            { name: 'Excursiones al Atlas', name_en: 'Excursions to the Atlas', icon: 'mountain' },
        ],
        bestTime: 'Todo el año, idealmente marzo-mayo o septiembre-noviembre',
        bestTime_en: 'All year round, ideally March-May or September-November',
        whatToKnow: [
            { text: 'Es recomendable negociar en los zocos', text_en: 'It is advisable to bargain in the souks' },
            { text: 'Viste modestamente, especialmente en zonas religiosas', text_en: 'Dress modestly, especially in religious areas' },
            { text: 'Cambia dinero en los bancos o cajeros automáticos', text_en: 'Exchange money at banks or ATMs' },
        ],
        nearbyDestinations: [
            { name: 'Essaouira', path: '/destinos/essaouira', image: '/images/essaouira/essaouira2.jpg' },
            { name: 'Ouarzazate', path: '/destinos/ouarzazate', image: '/images/ouarzazate/ourzazate9.jpg' },
            { name: 'Merzouga', path: '/destinos/merzouga', image: '/images/merzouga/merzouga1.jpg' },
        ],
    },
    fez: {
        name: 'Fez',
        name_en: 'Fez',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l2 2-2 2M15 9l-2 2 2 2" />
            </svg>
        ),
        tagline: 'Ciudad Imperial',
        tagline_en: 'Imperial City',
        description:
            'Fez es la capital espiritual y cultural de Marruecos, hogar de la universidad más antigua del mundo y de una Medina que ha cambiado poco en800 años. Aquí puedes perderte en un laberinto de callejones medievales, descubrir talleres de artesanía tradicional y degustar la gastronomía más auténtica del país.',
        description_en:
            'Fez is the spiritual and cultural capital of Morocco, home to the oldest university in the world and a Medina that has changed little in 800 years. Here you can get lost in a labyrinth of medieval alleys, discover traditional artisan workshops, and taste the most authentic cuisine in the country.',
        heroImage: '/images/fes/fes4.webp',
        gallery: ['/images/fes/fes1.webp', '/images/fes/fes2.webp', '/images/fes/fes3.jpg', '/images/fes/fes4.webp'],
        highlights: [
            {
                title: 'Universidad Al-Qarawiyyin',
                title_en: 'Al-Qarawiyyin University',
                description: 'Fundada en 859 d.C., es considerada la universidad más antigua del mundo en funcionamiento continuo.',
                description_en: 'Founded in 859 AD, it is considered the oldest university in the world in continuous operation.',
            },
            {
                title: 'Medina de Fez el-Bali',
                title_en: 'Fez el-Bali Medina',
                description:
                    'Una Medina medieval perfectamente preservada con más de 900 callejones. Es un laberinto que te transporta a la Edad Media.',
                description_en:
                    'A perfectly preserved medieval Medina with more than 900 alleys. It is a labyrinth that transports you to the Middle Ages.',
            },
            {
                title: 'Tannerías de Chouara',
                title_en: 'Chouara Tanneries',
                description: 'Las tintado tradicionales más grandes y antiguas de Fez. Se puede observar el proceso desde las terrazas cercanas.',
                description_en: 'The largest and oldest traditional tanneries in Fez. The process can be observed from nearby terraces.',
            },
            {
                title: 'Bab Bou Jeloud',
                title_en: 'Bab Bou Jeloud',
                description: 'La puerta más famosa de Fez, conocida como la "Puerta Azul" por sus azulejos de zellige en tonos azules.',
                description_en: 'The most famous gate in Fez, known as the "Blue Gate" for its zellige tiles in blue tones.',
            },
        ],
        activities: [
            { name: 'Talleres de curtido tradicional', name_en: 'Traditional tanning workshops', icon: 'archive' },
            { name: 'Visitas a talleres de mosaico zellige', name_en: 'Zellige mosaic workshop visits', icon: 'star' },
            { name: 'Gastronomía y mercado', name_en: 'Gastronomy and market', icon: 'utensils' },
            { name: 'Visitas a mezquitas y mausoleos', name_en: 'Visits to mosques and mausoleums', icon: 'landmark' },
        ],
        bestTime: 'Primavera (marzo-mayo) y otoño (septiembre-noviembre)',
        bestTime_en: 'Spring (March-May) and autumn (September-November)',
        whatToKnow: [
            { text: 'Es necesario un guía local para la Medina', text_en: 'A local guide is required for the Medina' },
            { text: 'Algunas zonas requieren autorización especial', text_en: 'Some areas require special authorization' },
            { text: 'Lleva calzado cómodo para calles empedradas', text_en: 'Bring comfortable shoes for cobblestone streets' },
        ],
        nearbyDestinations: [
            { name: 'Marrakech', path: '/destinos/marrakech', image: '/images/marrakech/marrakech2.jpg' },
            { name: 'Fes', path: '/destinos/fes', image: '/images/fes/fes13.webp' },
            { name: 'Tangier', path: '/destinos/tangier', image: '/images/tanger/tanger1.jpg' },
        ],
    },
    casablanca: {
        name: 'Casablanca',
        name_en: 'Casablanca',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L8 6v4l-4 4 4 4v4l4 4 4-4v-4l4-4-4-4V6l-4-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12L8 8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l4-4" />
            </svg>
        ),
        tagline: 'Ciudad Blanca',
        tagline_en: 'White City',
        description:
            'Casablanca es la ciudad más grande de Marruecos y su capital económica. Esta metrópolis moderna mezcla la arquitectura art-decó con rascacielos contemporáneos, ofreciendo una perspectiva diferente de Marruecos. Alberga la mezquita más grande del país y Secondats más grandes del África.',
        description_en:
            'Casablanca is the largest city in Morocco and its economic capital. This metropolis mixes art-deco architecture with contemporary skyscrapers, offering a different perspective on Morocco. It houses the largest mosque in the country and the second largest in Africa.',
        heroImage: '/images/casa & rabat/casa1.jpg',
        gallery: ['/images/casa & rabat/casa2.jpg', '/images/casa & rabat/rabat2.jpg', '/images/casa & rabat/casa3.jpg', '/images/casa & rabat/rabat6.jpg'],
        highlights: [
            {
                title: 'Mezquita Hassan II',
                title_en: 'Hassan II Mosque',
                description:
                    'Una obra maestra de la arquitectura marroquí moderna. Con capacidad para 80,000 fieles, su minarete de 210 metros es el más alto del mundo.',
                description_en:
                    'A masterpiece of modern Moroccan architecture. With capacity for 80,000 worshippers, its 210-meter minaret is the tallest in the world.',
            },
            {
                title: 'Corniche de Casablanca',
                title_en: 'Casablanca Corniche',
                description: 'El paseo marítimo más elegante de Marruecos, con restaurantes, cafés y playas donde disfrutar del atlántico.',
                description_en: 'The most elegant promenade in Morocco, with restaurants, cafes, and beaches to enjoy the Atlantic.',
            },
            {
                title: 'Viejo Medina',
                title_en: 'Old Medina',
                description: 'Una Medina más pequeña y menos turística que otras ciudades, perfecta para sumergirse en la vida local.',
                description_en: 'A smaller and less touristy Medina than other cities, perfect for immersing yourself in local life.',
            },
            {
                title: 'Place des Nations Unies',
                title_en: 'Place des Nations Unies',
                description: 'El corazón de la Casablanca moderna, rodeado de edificios art-decó y boutiques modernas.',
                description_en: 'The heart of modern Casablanca, surrounded by art-deco buildings and modern boutiques.',
            },
        ],
        activities: [
            { name: 'Visitas a la Mezquita Hassan II', name_en: 'Hassan II Mosque visits', icon: 'landmark' },
            { name: 'Gastronomía costera', name_en: 'Coastal gastronomy', icon: 'utensils' },
            { name: 'Compras en el Centro Comercial', name_en: 'Shopping at the Mall', icon: 'shopping-bag' },
            { name: ' vida nocturna', name_en: 'Nightlife', icon: 'moon' },
        ],
        bestTime: 'Todo el año, evitando meses de verano (julio-agosto) por el calor',
        bestTime_en: 'All year round, avoiding summer months (July-August) due to heat',
        whatToKnow: [
            { text: 'La Mezquita ofrece visitas guiadas en horarios específicos', text_en: 'The Mosque offers guided visits at specific times' },
            { text: 'Es una ciudad muy extensa, usa transporte o taxi', text_en: 'It is a very extensive city, use transport or taxi' },
            { text: 'El dress code es más liberal que en otras ciudades', text_en: 'The dress code is more liberal than in other cities' },
        ],
        nearbyDestinations: [
            { name: 'Rabat', path: '/destinos/rabat', image: '/images/casa & rabat/rabat1.jpg' },
            { name: 'Marrakech', path: '/destinos/marrakech', image: '/images/marrakech/marrakech1.jpg' },
            { name: 'Essaouira', path: '/destinos/essaouira', image: '/images/essaouira/essaouira14.jpg' },
        ],
    },
    tangier: {
        name: 'Tangier',
        name_en: 'Tangier',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10M17 7L7 17" opacity="0.3" />
            </svg>
        ),
        tagline: 'La Perla del Estrecho',
        tagline_en: 'Pearl of the Strait',
        description:
            'Tangier es una ciudad mágica situada en el punto donde el Atlántico se encuentra con el Mediterráneo. Con una historia fascinante como enclave internacional, ha inspirado a escritores, artistas y músicos de todo el mundo. Sus blancas calles, cafés bohemios y vistas al Estrecho de Gibraltar la convierten en un destino único.',
        description_en:
            'Tangier is a magical city located where the Atlantic meets the Mediterranean. With a fascinating history as an international enclave, it has inspired writers, artists, and musicians from around the world. Its white streets, bohemian cafes, and views of the Strait of Gibraltar make it a unique finalDestination.',
        heroImage: '/images/tanger/tanger1.jpg',
        gallery: [
            '/images/tanger/tanger2.jpg',
            '/images/tanger/tanger3.jpg',
            '/images/tanger/tanger4.jpg',
            '/images/tanger/tanger5.jpg',
        ],
        highlights: [
            {
                title: 'Medina de Tangier',
                title_en: 'Tangier Medina',
                description: 'Una Medina auténtica y menos masificada, con callejones blancos, puertas azules y vistas espectaculares al mar.',
                description_en: 'An authentic and less crowded Medina, with white alleys, blue doors, and spectacular sea views.',
            },
            {
                title: 'Cafés de la Place du France',
                title_en: 'Cafes of Place du France',
                description: 'Los legendarios cafés donde escritores como Truman Capote y Tennessee Williams desarrollaron sus obras.',
                description_en: 'The legendary cafes where writers like Truman Capote and Tennessee Williams developed their works.',
            },
            {
                title: 'Cuevas de Hercules',
                title_en: 'Caves of Hercules',
                description: 'Cuevas prehistóricas con una abertura natural que tiene forma de mapa de África y vistas al Estrecho.',
                description_en: 'Prehistoric caves with a natural opening shaped like a map of Africa and views of the Strait.',
            },
            {
                title: 'Cap Spartel',
                title_en: 'Cap Spartel',
                description: 'El punto donde el Atlántico se encuentra con el Mediterráneo, con faros y paisajes de cuento.',
                description_en: 'The point where the Atlantic meets the Mediterranean, with lighthouses and fairy-tale landscapes.',
            },
        ],
        activities: [
            { name: 'Rutas literarias', name_en: 'Literary routes', icon: 'book' },
            { name: 'Excursiones al Estrecho', name_en: 'Strait excursions', icon: 'ship' },
            { name: 'Surf y deportes acuáticos', name_en: 'Surf and water sports', icon: 'waves' },
            { name: 'Visitas aChefchaouen', name_en: 'Chefchaouen visits', icon: 'mountain' },
        ],
        bestTime: 'Primavera y otoño, con temperaturas suaves',
        bestTime_en: 'Spring and autumn, with mild temperatures',
        whatToKnow: [
            { text: 'La frontera con España está cerca (Tarifa en ferry)', text_en: 'The border with Spain is close (Tarifa by ferry)' },
            { text: 'Ideal para combinar con un viaje a Andalucía', text_en: 'Ideal to combine with a trip to Andalusia' },
            { text: 'Los taxis colectivos (grands taxis) son económicos', text_en: 'Shared taxis (grands taxis) are cheap' },
        ],
        nearbyDestinations: [
            { name: 'Rabat', path: '/destinos/rabat', image: '/images/casa & rabat/rabat1.jpg' },
            { name: 'Merzouga', path: '/destinos/merzouga', image: '/images/merzouga/merzouga7.jpg' },
            { name: 'Fes', path: '/destinos/fes', image: '/images/fes/fes13.webp' },
        ],
    },
    essaouira: {
        name: 'Essaouira',
        name_en: 'Essaouira',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                />
                <circle cx="12" cy="12" r="4" />
            </svg>
        ),
        tagline: 'Perla del Atlántico',
        tagline_en: 'Pearl of the Atlantic',
        description:
            'Essaouira es una encantadora ciudad costera conocida por su espíritu bohemio, susmurallas históricas y su animado puerto de pesca. Conocida anteriormente como Mogador, esta ciudad declarada Patrimonio de la UNESCO combina arquitectura portuguesa y marroquí, calles empedradas y una atmósfera relajada que la hace perfecta para una escapada.',
        description_en:
            'Essaouira is a charming coastal city known for its bohemian spirit, historic walls, and lively fishing port. Previously known as Mogador, this UNESCO World Heritage city combines Portuguese and Moroccan architecture, cobblestone streets, and a relaxed atmosphere that makes it perfect for a getaway.',
        heroImage: '/images/essaouira/essaouira1.jpg',
        gallery: [
            '/images/essaouira/essaouira2.jpg',
            '/images/essaouira/essaouira3.jpg',
            '/images/essaouira/essaouira4.jpg',
            '/images/essaouira/essaouira5.jpg',
        ],
        highlights: [
            {
                title: 'Puerto de Essaouira',
                title_en: 'Essaouira Port',
                description: 'Un pintoresco puerto de pesca donde ver a los fishermen vender su catch y relajarse en restaurantes de marisco.',
                description_en: 'A picturesque fishing port where to watch fishermen sell their catch and relax in seafood restaurants.',
            },
            {
                title: 'Medina UNESCO',
                title_en: 'UNESCO Medina',
                description: 'Calles rectilíneas únicas en Marruecos, diseñadas por ingenieros portugueses en el siglo XVIII.',
                description_en: 'Straight streets unique in Morocco, designed by Portuguese engineers in the 18th century.',
            },
            {
                title: 'Murallas y Bastiones',
                title_en: 'Walls and Bastions',
                description: 'Imponentes murallas defensivas que ofrecen vistas panorámicas al mar y a la ciudad.',
                description_en: 'Impressive defensive walls offering panoramic views of the sea and the city.',
            },
            {
                title: 'Playa de Essaouira',
                title_en: 'Essaouira Beach',
                description: 'Una larga playa arenosa perfecta para el windsurf y el kitesurf, con vientos constantes.',
                description_en: 'A long sandy beach perfect for windsurfing and kitesurfing, with constant winds.',
            },
        ],
        activities: [
            { name: 'Windsurf y Kitesurf', name_en: 'Windsurf and Kitesurf', icon: 'wind' },
            { name: 'Excursiones a la Arganeraie', name_en: 'Arganeraie excursions', icon: 'leaf' },
            { name: 'Talleres de artesanía', name_en: 'Craft workshops', icon: 'star' },
            { name: 'Gastronomía de pescado', name_en: 'Fish gastronomy', icon: 'utensils' },
        ],
        bestTime: 'Todo el año, especialmente abril-octubre para windsurf',
        bestTime_en: 'All year round, especially April-October for windsurfing',
        whatToKnow: [
            { text: 'El viento es constante, ideal para deportes acuáticos', text_en: 'The wind is constant, ideal for water sports' },
            { text: 'Lleva ropa de abrigo por el viento', text_en: 'Bring warm clothes due to the wind' },
            { text: 'Excelentes restaurantes de pescado y marisco', text_en: 'Excellent fish and seafood restaurants' },
        ],
        nearbyDestinations: [
            { name: 'Marrakech', path: '/destinos/marrakech', image: '/images/marrakech/marrakech2.jpg' },
            { name: 'Ouarzazate', path: '/destinos/ouarzazate', image: '/images/ouarzazate/ourzazate1.webp' },
            { name: 'casablanca', path: '/destinos/casablanca', image: '/images/casa & rabat/casa1.jpg' },
        ],
    },
    merzouga: {
        name: 'Merzouga',
        name_en: 'Merzouga',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 18 Q6 14, 12 18 T22 18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 14 Q6 10, 12 14 T22 14" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 10 Q6 6, 12 10 T22 10" />
                <circle cx="18" cy="6" r="2" fill="currentColor" />
            </svg>
        ),
        tagline: 'Dunas de Erg Chebbi',
        tagline_en: 'Erg Chebbi Dunes',
        description:
            'Merzouga es el gateway al Sahara marroquí, ubicado junto a las impresionantes dunas de Erg Chebbi que pueden alcanzar los 150 metros de altura. Esta experiencia desértica única te permitirá vivir la magia del desierto: paseos en camello, noches bajo un manto de estrellas y amaneceres espectaculares en las dunas doradas.',
        description_en:
            'Merzouga is the gateway to the Moroccan Sahara, located next to the impressive Erg Chebbi dunes that can reach 150 meters in height. This unique desert experience will allow you to live the magic of the desert: camel rides, nights under a blanket of stars, and spectacular sunrises on the golden dunes.',
        heroImage: '/images/merzouga/merzouga1.jpg',
        gallery: [
            '/images/merzouga/merzouga1.jpg',
            '/images/merzouga/merzouga2.jpg',
            '/images/merzouga/merzouga3.jpg',
            '/images/merzouga/merzouga4.jpg',
        ],
        highlights: [
            {
                title: 'Dunas de Erg Chebbi',
                title_en: 'Erg Chebbi Dunes',
                description: 'Las dunas más spectaculares de Marruecos, especialmente al amanecer y atardecer cuando cambian de color.',
                description_en: 'The most spectacular dunes in Morocco, especially at sunrise and sunset when they change color.',
            },
            {
                title: 'Paseo en Camello',
                title_en: 'Camel Ride',
                description: 'Una experiencia imprescindible para adentrarse en el desierto como lo hacían los nómadas.',
                description_en: 'An essential experience to enter the desert as the nomads did.',
            },
            {
                title: 'Noche en el Desierto',
                title_en: 'Night in the Desert',
                description: 'Duerme en camps tradicionales bajo un cielo estrellado sin contaminación lumínica.',
                description_en: 'Sleep in traditional camps under a starry sky without light pollution.',
            },
            {
                title: 'Amanecer en las Dunas',
                title_en: 'Sunrise on the Dunes',
                description: 'Sube a la cima de una dune para presenciar un amanecer que nunca olvidarás.',
                description_en: 'Climb to the top of a dune to witness a sunrise you will never forget.',
            },
        ],
        activities: [
            { name: 'Paseos en camello', name_en: 'Camel rides', icon: 'sun' },
            { name: 'Sandboarding', name_en: 'Sandboarding', icon: 'mountain' },
            { name: 'Visitas a comunidades nómadas', name_en: 'Nomadic community visits', icon: 'users' },
            { name: 'ATV en el desierto', name_en: 'ATV in the desert', icon: 'car' },
        ],
        bestTime: 'Octubre-abril, evitando julio-agosto por el calor extremo',
        bestTime_en: 'October-April, avoiding July-August due to extreme heat',
        whatToKnow: [
            { text: 'Lleva protector solar, sombrero y gafas de sol', text_en: 'Bring sunscreen, hat, and sunglasses' },
            { text: 'Las noches pueden ser muy frías', text_en: 'Nights can be very cold' },
            { text: 'Hidratate abundantemente', text_en: 'Stay well hydrated' },
        ],
        nearbyDestinations: [
            { name: 'Ouarzazate', path: '/destinos/ouarzazate', image: '/images/ouarzazate/ourzazate1.webp' },
            { name: 'Fez', path: '/destinos/fez', image: '/images/fes/fes7.webp' },
            { name: 'Marrakech', path: '/destinos/marrakech', image: '/images/marrakech/marrakech1.jpg' },
        ],
    },
    ouarzazate: {
        name: 'Ouarzazate',
        name_en: 'Ouarzazate',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="6" width="20" height="14" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 10v4M12 10v4M17 10v4" />
                <circle cx="12" cy="3" r="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v3" />
            </svg>
        ),
        tagline: 'La puerta del Desierto',
        tagline_en: 'The Door to the Desert',
        description:
            'Ouarzazate, conocida como el "Hollywood de África", es una ciudad fascinante rodeada por el Alto Atlas y famosa por sus kasbahs spectaculaires y estudios de cine. Es el punto de partida perfecto para explorar el desierto del Sáhara y las rutas de las Mil Kasbahs.',
        description_en:
            'Ouarzazate, known as the "Hollywood of Africa", is a fascinating city surrounded by the High Atlas and famous for its spectacular kasbahs and film studios. It is the perfect starting point for exploring the Sahara desert and the Route of the Thousand Kasbahs.',
        heroImage: '/images/ouarzazate/ourzazate1.webp',
        gallery: [
            '/images/ouarzazate/ourzazate2.jpg',
            '/images/ouarzazate/ourzazate3.jpg',
            '/images/ouarzazate/ourzazate4.jpg',
            '/images/ouarzazate/ourzazate5.jpg',
        ],
        highlights: [
            {
                title: 'Kasbah Ait Benhaddou',
                title_en: 'Ait Benhaddou Kasbah',
                description:
                    'La kasbah más famosa de Marruecos, declarada Patrimonio UNESCO. Un espetacular ejemplo de arquitectura tradicional marroquí.',
                description_en:
                    'The most famous kasbah in Morocco, a UNESCO World Heritage Site. A spectacular example of traditional Moroccan architecture.',
            },
            {
                title: 'Valle del Dades',
                title_en: 'Dades Valley',
                description:
                    'Conocido como el "Valle de las Rosas", famoso por sus formaciones rocosas en forma dededos de mono y kasbahs abandonadas.',
                description_en: 'Known as the "Valley of the Roses", famous for its monkey finger rock formations and abandoned kasbahs.',
            },
            {
                title: 'Estudios de Cine',
                title_en: 'Film Studios',
                description: 'Visita los estudios donde se rodaron películas como Gladiator, Lawrence de Arabia y Juego de Tronos.',
                description_en: 'Visit the studios where films like Gladiator, Lawrence of Arabia, and Game of Thrones were filmed.',
            },
            {
                title: 'Gorges du Todra',
                title_en: 'Todra Gorges',
                description: 'Impresionantes gargantas con paredes de roca de 300 metros, ideales para escalada y senderismo.',
                description_en: 'Impressive gorges with 300-meter rock walls, ideal for climbing and hiking.',
            },
        ],
        activities: [
            { name: 'Rutas por el Valle del Dades', name_en: 'Dades Valley routes', icon: 'map' },
            { name: 'Excursiones a las Gargantas du Todra', name_en: 'Todra Gorges excursions', icon: 'mountain' },
            { name: 'Visitas a estudios de cine', name_en: 'Film studio visits', icon: 'film' },
            { name: 'Noches en el desierto', name_en: 'Desert nights', icon: 'moon' },
        ],
        bestTime: 'Primavera (marzo-mayo) y otoño (septiembre-noviembre)',
        bestTime_en: 'Spring (March-May) and autumn (September-November)',
        whatToKnow: [
            {
                text: 'El clima puede ser extremo: muy caliente en verano, frío en invierno',
                text_en: 'Weather can be extreme: very hot in summer, cold in winter',
            },
            { text: 'Lleva calzado cómodo para senderos empedrados', text_en: 'Bring comfortable shoes for cobblestone paths' },
            { text: 'Es recomendable contratar un guía local para la Medina', text_en: 'It is advisable to hire a local guide for the Medina' },
        ],
        nearbyDestinations: [
            { name: 'Merzouga', path: '/destinos/merzouga', image: '/images/merzouga/merzouga1.jpg' },
            { name: 'Marrakech', path: '/destinos/marrakech', image: '/images/marrakech/marrakech1.jpg' },
            { name: 'Essaouira', path: '/destinos/essaouira', image: '/images/essaouira/essaouira1.jpg' },
        ],
    },
    rabat: {
        name: 'Rabat',
        name_en: 'Rabat',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-6 4 2 7-5-4-5 4 2-7-6-4h7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v10" />
            </svg>
        ),
        tagline: 'Capital Moderna',
        tagline_en: 'Modern Capital',
        description:
            'Rabat es la capital administrativa de Marruecos, una ciudad elegante que combina historia milenaria con arquitectura moderna. Alberga la Torre Hassan, el Mausoleo de Mohamed V y la hermosa Kasbah de los Udayas, todo en un ambiente tranquilo y sofisticado.',
        description_en:
            'Rabat is the administrative capital of Morocco, an elegant city that combines millennia-old history with modern architecture. It houses the Hassan Tower, the Mausoleum of Mohamed V, and the beautiful Kasbah of the Udayas, all in a calm and sophisticated atmosphere.',
        heroImage: '/images/casa & rabat/rabat1.jpg',
        gallery: ['/images/casa & rabat/rabat2.jpg', '/images/casa & rabat/rabat3.jpg', '/images/casa & rabat/rabat4.jpg', '/images/casa & rabat/rabat5.jpg'],
        highlights: [
            {
                title: 'Torre Hassan',
                title_en: 'Hassan Tower',
                description: 'El símbolo de Rabat, una torre incompleta de 44 metros que era destinada a ser la mezquita más grande del mundo.',
                description_en: 'The symbol of Rabat, an incomplete 44-meter tower that was intended to be the largest mosque in the world.',
            },
            {
                title: 'Mausoleo de Mohamed V',
                title_en: 'Mausoleum of Mohamed V',
                description: 'Un espetacular mausoleo de mármol blanco donde descansan el rey Mohamed V y sus hijos, custodiado por la Guardia Real.',
                description_en: 'A spectacular white marble mausoleum where King Mohamed V and his sons rest, guarded by the Royal Guard.',
            },
            {
                title: 'Kasbah de los Udayas',
                title_en: 'Kasbah of the Udayas',
                description: 'La kasbah más antigua de Rabat, con calles azules y blancas, jardines exuberantes y vistas al océano Atlántico.',
                description_en: 'The oldest kasbah in Rabat, with blue and white streets, lush gardens, and views of the Atlantic Ocean.',
            },
            {
                title: 'Medina de Rabat',
                title_en: 'Rabat Medina',
                description: 'Una Medina más tranquila y menos masificada que otras ciudades, perfecta para strolls y compras locales.',
                description_en: 'A calmer and less crowded Medina than other cities, perfect for strolls and local shopping.',
            },
        ],
        activities: [
            { name: 'Visitas guiadas históricas', name_en: 'Historical guided tours', icon: 'map' },
            { name: 'Paseo por la Corniche', name_en: 'Corniche stroll', icon: 'waves' },
            { name: 'Visita al Mausoleo', name_en: 'Mausoleum visit', icon: 'landmark' },
            { name: 'Gastronomía local', name_en: 'Local gastronomy', icon: 'utensils' },
        ],
        bestTime: 'Todo el año',
        bestTime_en: 'All year round',
        whatToKnow: [
            { text: 'Es una ciudad segura y tranquila', text_en: 'It is a safe and quiet city' },
            { text: 'El Mausoleo tiene horarios específicos de visita', text_en: 'The Mausoleum has specific visiting hours' },
            { text: 'Ideal para combinar con Casablanca (30 min en tren)', text_en: 'Ideal to combine with Casablanca (30 min by train)' },
        ],
        nearbyDestinations: [
            { name: 'Casablanca', path: '/destinos/casablanca', image: '/images/casa & rabat/casa1.jpg' },
            { name: 'Marrakech', path: '/destinos/marrakech', image: '/images/marrakech/marrakech1.jpg' },
            { name: 'Fez', path: '/destinos/fez', image: '/images/fes/fes6.webp' },
        ],
    },
};

export default function DestinationDetailPage(props: DestinationDetailPageProps) {
    const lang = props.lang || 'es';
    const cityKey = props.city || 'marrakech';
    const destination = destinationsData[cityKey];
    const fallbackDestination = destinationsData.marrakech;
    const finalDestination = destination || fallbackDestination;

    const t = (es: string, en: string) => (lang === 'es' ? es : en);
    const pageTitle =
        lang === 'es'
            ? 'Destino ' + finalDestination.name + ' | Aventuras con Esencia'
            : 'Destination ' + finalDestination.name_en + ' | Aventuras con Esencia';
    const pageDescription = lang === 'es' ? finalDestination.description : finalDestination.description_en;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <Navbar lang={lang} />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px]">
                <img src={finalDestination.heroImage} alt={finalDestination.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 flex items-end pb-16">
                    <div className="container-custom">
                        <div className="mb-2 text-5xl text-white">{finalDestination.icon}</div>
                        <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">
                            {t(finalDestination.name, finalDestination.name_en)}
                        </h1>
                        <p className="mt-2 text-xl text-white/80">{t(finalDestination.tagline, finalDestination.tagline_en)}</p>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg text-text-secondary">{t(finalDestination.description, finalDestination.description_en)}</p>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="mb-12 text-center font-heading text-4xl font-bold text-dark">{t('Lugares Imperdibles', 'Must-See Places')}</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {finalDestination.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex gap-4 rounded-xl bg-cream p-6">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                    <span className="text-xl font-bold">{idx + 1}</span>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-heading text-xl font-semibold text-dark">{t(highlight.title, highlight.title_en)}</h3>
                                    <p className="text-text-secondary">{t(highlight.description, highlight.description_en)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities */}
            <section className="section-padding bg-cream-dark">
                <div className="container-custom">
                    <h2 className="mb-12 text-center font-heading text-4xl font-bold text-dark">
                        {t('Actividades y Experiencias', 'Activities and Experiences')}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {finalDestination.activities.map((activity, idx) => (
                            <div key={idx} className="rounded-xl bg-white p-4 text-center shadow-md">
                                <div className="mb-2 flex justify-center">
                                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="font-medium text-dark">{t(activity.name, activity.name_en)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Time & What to Know */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-xl bg-primary/10 p-8">
                            <h3 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Mejor Época para Visitar', 'Best Time to Visit')}</h3>
                            <p className="text-text-secondary">{t(finalDestination.bestTime, finalDestination.bestTime_en)}</p>
                        </div>
                        <div className="rounded-xl bg-accent/10 p-8">
                            <h3 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Información Práctica', 'Practical Information')}</h3>
                            <ul className="space-y-2">
                                {finalDestination.whatToKnow.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-text-secondary">{t(item.text, item.text_en)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Destinations */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <h2 className="mb-8 text-center font-heading text-3xl font-bold text-dark">{t('Destinos Cercanos', 'Nearby Destinations')}</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {finalDestination.nearbyDestinations.map((dest, idx) => (
                            <Link key={idx} href={dest.path} className="group relative h-48 overflow-hidden rounded-xl">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                                <div className="absolute right-0 bottom-0 left-0 p-4">
                                    <h3 className="font-heading text-xl font-bold text-white">{dest.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="container-custom text-center">
                    <h2 className="mb-4 font-heading text-3xl font-bold text-white">{t('¿Listo para explorar?', 'Ready to explore?')}</h2>
                    <p className="mb-8 text-white/80">
                        {t('Reserva tu aventura a', 'Book your adventure to')} {t(finalDestination.name, finalDestination.name_en)}{' '}
                        {t('ahora mismo', 'right now')}
                    </p>
                    <Link href="/reservar" className="btn-secondary inline-block">
                        {t('Reservar Ahora', 'Book Now')}
                    </Link>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}
