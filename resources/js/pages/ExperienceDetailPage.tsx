import { Head, Link } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { experiencesData } from '@/lib/experiences';

interface PageProps {
    lang?: 'es' | 'en';
    experience?: string;
}

const experienceDetails: Record<
    string,
    {
        full_description_es: string;
        full_description_en: string;
        highlights: string[];
        highlights_en: string[];
        included_es: string[];
        included_en: string[];
        not_included_es: string[];
        not_included_en: string[];
        itinerary_es: { day: number; title: string; description: string }[];
        itinerary_en: { day: number; title: string; description: string }[];
    }
> = {
    'trekking-atlas': {
        full_description_es:
            'Embárcate en una aventura unforgettable por las montañas del Alto Atlas. Este trekking de 3 días te llevará a través de valles espectaculares, aldeas bereberes auténticas y paisajes que quitan el aliento. Subirás al Toubkal, la montaña más alta del norte de África, con guías locales expertos.',
        full_description_en:
            'Embark on an unforgettable adventure through the High Atlas mountains. This 3-day trek will take you through spectacular valleys, authentic Berber villages, and breathtaking landscapes. You will climb Toubkal, the highest mountain in North Africa, with expert local guides.',
        highlights: ['Ascensión al Toubkal (4167m)', 'Aldeas bereberes auténticas', 'Valles escondidos del Atlas', 'Guía montaña certificado'],
        highlights_en: ['Toubkal Ascent (4167m)', 'Authentic Berber villages', 'Hidden Atlas valleys', 'Certified mountain guide'],
        included_es: [
            'Guía de montaña certificado',
            'Alojamiento en refugios',
            'Todas las comidas',
            'Traslados desde Marrakech',
            'Equipo de camping',
        ],
        included_en: ['Certified mountain guide', 'Mountain refuge accommodation', 'All meals', 'Transfers from Marrakech', 'Camping equipment'],
        not_included_es: ['Vuelo', 'Seguro de viaje', 'Propinas', 'Bebidas alcoholicas'],
        not_included_en: ['Flight', 'Travel insurance', 'Tips', 'Alcoholic beverages'],
        itinerary_es: [
            {
                day: 1,
                title: 'Llegada a Imlil',
                description: 'Traslado desde Marrakech a Imlil (1740m). Aclimatación y caminata hasta el refugio de Toubkal (3200m).',
            },
            {
                day: 2,
                title: 'Ascensión al Toubkal',
                description: 'Subida al pico Toubkal (4167m) antes del amanecer. Regreso al refugio y cena festiva.',
            },
            { day: 3, title: 'Regreso a Marrakech', description: 'Caminata descendente por el valle de Imlil. Traslado a Marrakech.' },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Arrival in Imlil',
                description: 'Transfer from Marrakech to Imlil (1740m). Acclimatization and walk to Toubkal refuge (3200m).',
            },
            { day: 2, title: 'Toubkal Ascent', description: 'Climb to Toubkal peak (4167m) before sunrise. Return to refuge and festive dinner.' },
            { day: 3, title: 'Return to Marrakech', description: 'Descending walk through Imlil valley. Transfer to Marrakech.' },
        ],
    },
    'desierto-merzouga': {
        full_description_es:
            'Vive la magia del Sáhara marroquí en esta aventura de 2 días. Descubrirás las impresionantes dunas de Erg Chebbi, montarás camello al atardecer, y pasarás una noche under las estrellas en un camp tradicional bereber. Una experiencia que cambiará tu vida.',
        full_description_en:
            'Experience the magic of the Moroccan Sahara in this 2-day adventure. You will discover the impressive Erg Chebbi dunes, ride camels at sunset, and spend a night under the stars in a traditional Berber camp. A life-changing experience.',
        highlights: ['Dunas de Erg Chebbi', 'Paseo en camello', 'Noche bajo las estrellas', 'Campamento tradicional'],
        highlights_en: ['Erg Chebbi Dunes', 'Camel ride', 'Night under the stars', 'Traditional camp'],
        included_es: ['Paseo en camello', 'Alojamiento en camp desert', 'Cena y desayuno', 'Guía local', 'Traslados'],
        included_en: ['Camel ride', 'Desert camp accommodation', 'Dinner and breakfast', 'Local guide', 'Transfers'],
        not_included_es: ['Vuelo', 'Seguro', 'Bebidas', 'Propinas'],
        not_included_en: ['Flight', 'Insurance', 'Drinks', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Llegada al Desierto',
                description: 'Traslado a Merzouga. Paseo en camello al atardecer. Cena y música bereber en el camp.',
            },
            { day: 2, title: 'Amanecer en las Dunas', description: 'Amanecer opcional en las dunas. Desayuno. Traslado de salida.' },
        ],
        itinerary_en: [
            { day: 1, title: 'Arrival to Desert', description: 'Transfer to Merzouga. Camel ride at sunset. Dinner and Berber music at camp.' },
            { day: 2, title: 'Sunrise in the Dunes', description: 'Optional sunrise in the dunes. Breakfast. Departure transfer.' },
        ],
    },
    'tour-fez': {
        full_description_es:
            'Descubre la Medina mejor preservada del mundo medieval. Este tourguiado te llevará por los callejones secretos de Fez, visitando talleres de artesanía, la universidad más antigua del mundo y los mercados más auténticos. Un viaje en el tiempo.',
        full_description_en:
            'Discover the best-preserved medieval Medina in the world. This guided tour will take you through the secret alleys of Fez, visiting artisan workshops, the oldest university in the world, and the most authentic markets. A journey through time.',
        highlights: ['Medina UNESCO', 'Universidad Al-Qarawiyyin', 'Talleres de zellige', 'Portal Azul'],
        highlights_en: ['UNESCO Medina', 'Al-Qarawiyyin University', 'Zellige workshops', 'Blue Gate'],
        included_es: ['Guía local certificado', 'Entrada a monumentos', 'Almuerzo tradicional', 'Traslados'],
        included_en: ['Certified local guide', 'Monument entries', 'Traditional lunch', 'Transfers'],
        not_included_es: ['Gastos personales', 'Propinas'],
        not_included_en: ['Personal expenses', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Exploración de Fez',
                description: 'Puerta Azul, Medina antigua, Universidad Al-Qarawiyyin, Taller de zellige, Almuerzo en casa local.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Fez Exploration',
                description: 'Blue Gate, Ancient Medina, Al-Qarawiyyin University, Zellige workshop, Lunch at local home.',
            },
        ],
    },
    'essaouira': {
        full_description_es:
            'Escápate de la bulliciosa Marrakech hacia la relajada ciudad costera de Essaouira. Conocida por su medina declarada Patrimonio de la Humanidad por la UNESCO, su vibrante puerto pesquero y sus vientos constantes, esta "Perla del Atlántico" ofrece un encanto único con su arquitectura azul y blanca y su atmósfera bohemia.',
        full_description_en:
            'Escape the bustling Marrakech to the relaxed coastal city of Essaouira. Known for its UNESCO World Heritage medina, vibrant fishing port, and constant winds, this "Pearl of the Atlantic" offers unique charm with its blue and white architecture and bohemian atmosphere.',
        highlights: ['Medina amurallada UNESCO', 'Puerto pesquero artesanal', 'Playas de arena dorada', 'Talleres de madera de tuya'],
        highlights_en: ['UNESCO Walled Medina', 'Artisanal fishing port', 'Golden sand beaches', 'Thuya wood workshops'],
        included_es: ['Transporte ida y vuelta', 'Guía local en la medina', 'Visita a cooperativa de Argán', 'Seguro de viaje'],
        included_en: ['Round-trip transport', 'Local guide in the medina', 'Argan oil cooperative visit', 'Travel insurance'],
        not_included_es: ['Almuerzo', 'Propinas', 'Gastos personales'],
        not_included_en: ['Lunch', 'Tips', 'Personal expenses'],
        itinerary_es: [
            {
                day: 1,
                title: 'Día en la Costa',
                description: 'Salida de Marrakech, parada en cooperativa de Argán, visita guiada a la medina y puerto, tiempo libre en la playa, regreso al atardecer.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Day at the Coast',
                description: 'Departure from Marrakech, stop at Argan cooperative, guided tour of medina and port, free time on the beach, return at sunset.',
            },
        ],
    },
    'cascadas-ouirgane': {
        full_description_es:
            'Descubre los valles ocultos de Ouirgane en esta ruta de senderismo suave. Lejos de las rutas más transitadas, exploraremos las cascadas locales, bosques de enebros y aldeas tradicionales de tierra roja. Una experiencia de naturaleza pura y contacto con la vida rural del Atlas.',
        full_description_en:
            'Discover the hidden valleys of Ouirgane on this gentle hiking route. Away from the busier paths, we will explore local waterfalls, juniper forests, and traditional red-earth villages. A pure nature experience and contact with the rural life of the Atlas.',
        highlights: ['Cascadas naturales', 'Vistas al embalse de Lalla Takerkoust', 'Paisajes de tierra roja', 'Almuerzo bereber tradicional'],
        highlights_en: ['Natural waterfalls', 'Views of Lalla Takerkoust reservoir', 'Red earth landscapes', 'Traditional Berber lunch'],
        included_es: ['Guía de montaña', 'Almuerzo en casa local', 'Traslados', 'Té de bienvenida'],
        included_en: ['Mountain guide', 'Lunch at local home', 'Transfers', 'Welcome tea'],
        not_included_es: ['Bebidas extras', 'Propinas'],
        not_included_en: ['Extra drinks', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Ruta de las Cascadas',
                description: 'Caminata por el valle, visita a las cascadas, almuerzo tradicional en una aldea bereber, regreso a Ouirgane.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Waterfall Route',
                description: 'Hike through the valley, visit to the waterfalls, traditional lunch in a Berber village, return to Ouirgane.',
            },
        ],
    },
    'casablanca-rabat': {
        full_description_es:
            'Un recorrido por las dos caras de la modernidad marroquí. Desde la impresionante Mezquita Hassan II en Casablanca, una de las más grandes del mundo, hasta la elegancia histórica de Rabat, la capital administrativa con su famosa Torre Hassan y la Kasbah de los Oudayas.',
        full_description_en:
            'A journey through the two faces of Moroccan modernity. From the impressive Hassan II Mosque in Casablanca, one of the largest in the world, to the historical elegance of Rabat, the administrative capital with its famous Hassan Tower and the Kasbah of the Udayas.',
        highlights: ['Mezquita Hassan II', 'Torre Hassan en Rabat', 'Mausoleo de Mohamed V', 'Kasbah de los Oudayas'],
        highlights_en: ['Hassan II Mosque', 'Hassan Tower in Rabat', 'Mohammed V Mausoleum', 'Kasbah of the Udayas'],
        included_es: ['Transporte privado', 'Guías locales oficiales', 'Entrada a monumentos', 'Seguro de viaje'],
        included_en: ['Private transport', 'Official local guides', 'Monument entries', 'Travel insurance'],
        not_included_es: ['Almuerzo', 'Propinas'],
        not_included_en: ['Lunch', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Ciudades Imperiales Modernas',
                description: 'Visita a la Mezquita Hassan II en Casablanca, traslado a Rabat, visita a la Torre Hassan y Kasbah de los Oudayas.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Modern Imperial Cities',
                description: 'Visit to Hassan II Mosque in Casablanca, transfer to Rabat, visit to Hassan Tower and Kasbah of the Udayas.',
            },
        ],
    },
    'trekking-toubkal': {
        full_description_es:
            'Desafía tus límites con la ascensión al pico más alto del Norte de África. Este trekking de 2 días está diseñado para excursionistas en buena forma física que buscan la recompensa de unas vistas incomparables desde los 4.167 metros de altitud.',
        full_description_en:
            'Challenge your limits with the ascent to the highest peak in North Africa. This 2-day trek is designed for hikers in good physical shape who seek the reward of incomparable views from 4,167 meters of altitude.',
        highlights: ['Cumbre del Toubkal (4167m)', 'Refugios de alta montaña', 'Vistas de la cordillera del Atlas', 'Desafío físico personal'],
        highlights_en: ['Toubkal Summit (4167m)', 'High mountain refuges', 'Atlas Mountain range views', 'Personal physical challenge'],
        included_es: ['Guía de alta montaña', 'Mulas para el equipaje', 'Pensión completa', 'Equipo de seguridad'],
        included_en: ['High mountain guide', 'Mules for luggage', 'Full board', 'Safety equipment'],
        not_included_es: ['Saco de dormir', 'Botas de montaña', 'Seguro de rescate'],
        not_included_en: ['Sleeping bag', 'Mountain boots', 'Rescue insurance'],
        itinerary_es: [
            {
                day: 1,
                title: 'Ascenso al Refugio',
                description: 'Caminata desde Imlil hasta el refugio Neltner (3207m). Cena y descanso temprano.',
            },
            {
                day: 2,
                title: 'Día de Cumbre',
                description: 'Ataque a la cima por la madrugada, descenso hasta Imlil y regreso a Marrakech.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Ascent to Refuge',
                description: 'Hike from Imlil to Neltner refuge (3207m). Dinner and early rest.',
            },
            {
                day: 2,
                title: 'Summit Day',
                description: 'Summit attack at dawn, descent to Imlil and return to Marrakech.',
            },
        ],
    },
    'valley-dades': {
        full_description_es:
            'Recorre la espectacular "Ruta de las Mil Kasbahs". Este viaje de 2 días te llevará a través de cañones profundos, oasis de palmeras y antiguas fortalezas de adobe. Descubriremos la asombrosa formación de los "Dedos de Mono" y las curvas imposibles del desfiladero del Dades.',
        full_description_en:
            'Travel the spectacular "Route of the Thousand Kasbahs". This 2-day trip will take you through deep canyons, palm oases, and ancient adobe fortresses. We will discover the amazing "Monkey Fingers" formation and the impossible curves of the Dades Gorge.',
        highlights: ['Gargantas del Dades y Todra', 'Kasbah Ait Ben Haddou', 'Valle de las Rosas', 'Palmeral de Skoura'],
        highlights_en: ['Dades and Todra Gorges', 'Ait Ben Haddou Kasbah', 'Valley of the Roses', 'Skoura Palm Grove'],
        included_es: ['Transporte 4x4', 'Alojamiento en Riad tradicional', 'Cenas y desayunos', 'Guía local'],
        included_en: ['4x4 Transport', 'Accommodation in traditional Riad', 'Dinners and breakfasts', 'Local guide'],
        not_included_es: ['Almuerzos', 'Entradas opcionales', 'Propinas'],
        not_included_en: ['Lunches', 'Optional entries', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Ruta de las Kasbahs',
                description: 'Marrakech - Ouarzazate - Valle de las Rosas - Gargantas del Dades. Cena y noche en Riad.',
            },
            {
                day: 2,
                title: 'Gargantas y Palmerales',
                description: 'Visita a las Gargantas del Todra, paseo por el palmeral y regreso a Marrakech por el Atlas.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Kasbahs Route',
                description: 'Marrakech - Ouarzazate - Valley of the Roses - Dades Gorges. Dinner and night in Riad.',
            },
            {
                day: 2,
                title: 'Gorges and Palm Groves',
                description: 'Visit to Todra Gorges, walk through the palm grove and return to Marrakech via the Atlas.',
            },
        ],
    },
    'tangier': {
        full_description_es:
            'La puerta de entrada a África desde España. Tánger es una ciudad fascinante con un pasado cosmopolita e internacional. Descubriremos su laberíntica medina, las Cuevas de Hércules y el Cabo Espartel, donde el Atlántico se encuentra con el Mediterráneo.',
        full_description_en:
            'The gateway to Africa from Spain. Tangier is a fascinating city with a cosmopolitan and international past. We will discover its labyrinthine medina, the Caves of Hercules, and Cape Spartel, where the Atlantic meets the Mediterranean.',
        highlights: ['Medina y Kasbah de Tánger', 'Cuevas de Hércules', 'Cabo Espartel', 'Café Hafa'],
        highlights_en: ['Tangier Medina and Kasbah', 'Caves of Hercules', 'Cape Spartel', 'Café Hafa'],
        included_es: ['Billete de Ferry ida y vuelta', 'Guía local oficial', 'Traslados en Tánger', 'Almuerzo marroquí'],
        included_en: ['Round-trip Ferry ticket', 'Official local guide', 'Tangier transfers', 'Moroccan lunch'],
        not_included_es: ['Seguro médico', 'Propinas'],
        not_included_en: ['Medical insurance', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Cruce del Estrecho',
                description: 'Salida de España, ferry, tour por la ciudad moderna, visita a las Cuevas de Hércules, almuerzo y recorrido por la medina.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Strait Crossing',
                description: 'Departure from Spain, ferry, modern city tour, visit to Hercules Caves, lunch and medina tour.',
            },
        ],
    },
    'noche-desierto': {
        full_description_es:
            'Una escapada intensa y mágica a las dunas de Merzouga. Ideal para quienes tienen poco tiempo pero no quieren perderse la experiencia de dormir en el desierto. Disfruta de una cena tradicional bereber bajo un cielo estrellado como nunca antes habías visto.',
        full_description_en:
            'An intense and magical escape to the Merzouga dunes. Ideal for those with little time but who don\'t want to miss the experience of sleeping in the desert. Enjoy a traditional Berber dinner under a starry sky like you\'ve never seen before.',
        highlights: ['Cielo estrellado del Sáhara', 'Cena bereber tradicional', 'Paseo en camello nocturno', 'Fuego de campamento y música'],
        highlights_en: ['Sahara starry sky', 'Traditional Berber dinner', 'Night camel ride', 'Campfire and music'],
        included_es: ['Paseo en camello', 'Noche en campamento', 'Cena y desayuno', 'Guía local'],
        included_en: ['Camel ride', 'Night in camp', 'Dinner and breakfast', 'Local guide'],
        not_included_es: ['Transporte hasta Merzouga', 'Seguro de viaje'],
        not_included_en: ['Transport to Merzouga', 'Travel insurance'],
        itinerary_es: [
            {
                day: 1,
                title: 'Noche Mágica',
                description: 'Encuentro en Merzouga, paseo en camello al campamento, cena, música bereber y noche de estrellas.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Magical Night',
                description: 'Meeting in Merzouga, camel ride to camp, dinner, Berber music and starry night.',
            },
        ],
    },
    'cocina-marroqui': {
        full_description_es:
            'Aprende los secretos de una de las gastronomías más ricas del mundo. Comenzaremos comprando ingredientes frescos en el mercado local y terminaremos preparando (y degustando) tu propio Tajín o Cuscús en un auténtico Riad marroquí.',
        full_description_en:
            'Learn the secrets of one of the richest cuisines in the world. We will start by buying fresh ingredients at the local market and end by preparing (and tasting) your own Tagine or Couscous in an authentic Moroccan Riad.',
        highlights: ['Visita al mercado local (souk)', 'Aprender el uso de especias', 'Taller práctico de cocina', 'Degustación de té marroquí'],
        highlights_en: ['Local market (souk) visit', 'Learn spice usage', 'Hands-on cooking workshop', 'Moroccan tea tasting'],
        included_es: ['Ingredientes frescos', 'Chef instructor experto', 'Almuerzo (tu propia creación)', 'Recetario digital'],
        included_en: ['Fresh ingredients', 'Expert chef instructor', 'Lunch (your own creation)', 'Digital recipe book'],
        not_included_es: ['Traslados al Riad', 'Bebidas alcohólicas'],
        not_included_en: ['Transfers to the Riad', 'Alcoholic beverages'],
        itinerary_es: [
            {
                day: 1,
                title: 'Taller Gastronómico',
                description: 'Compra en el mercado, preparación de platos, ritual del té marroquí y comida degustación.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Gastronomic Workshop',
                description: 'Market shopping, dish preparation, Moroccan tea ritual and tasting meal.',
            },
        ],
    },
    'kitesurf-essaouira': {
        full_description_es:
            'Essaouira es el destino mundialmente famoso para los deportes de viento. Tanto si eres principiante como experto, disfruta de un curso intensivo con instructores certificados en las condiciones perfectas que ofrece la bahía de Mogador.',
        full_description_en:
            'Essaouira is the world-famous destination for wind sports. Whether you are a beginner or an expert, enjoy an intensive course with certified instructors in the perfect conditions offered by Mogador Bay.',
        highlights: ['Condiciones de viento constantes', 'Instructores certificados IKO', 'Equipo de última generación', 'Vibrante ambiente surfero'],
        highlights_en: ['Constant wind conditions', 'IKO certified instructors', 'Latest generation equipment', 'Vibrant surfer atmosphere'],
        included_es: ['Equipo completo de Kitesurf', 'Instructor profesional', 'Transfer al punto de viento', 'Seguro de accidentes'],
        included_en: ['Full Kitesurf equipment', 'Professional instructor', 'Wind point transfer', 'Accident insurance'],
        not_included_es: ['Alojamiento', 'Comidas', 'Propinas'],
        not_included_en: ['Accommodation', 'Meals', 'Tips'],
        itinerary_es: [
            {
                day: 1,
                title: 'Iniciación y Vuelo',
                description: 'Teoría de seguridad, control de la cometa en la arena y primera entrada al agua.',
            },
            {
                day: 2,
                title: 'Water Start',
                description: 'Práctica de arrastre corporal y primeros intentos de ponerse de pie sobre la tabla.',
            },
            {
                day: 3,
                title: 'Navegación',
                description: 'Perfeccionamiento de la postura, navegación en ambas direcciones y control de velocidad.',
            },
        ],
        itinerary_en: [
            {
                day: 1,
                title: 'Initiation and Flight',
                description: 'Safety theory, kite control on the sand and first water entry.',
            },
            {
                day: 2,
                title: 'Water Start',
                description: 'Body drag practice and first attempts to stand up on the board.',
            },
            {
                day: 3,
                title: 'Navigation',
                description: 'Perfecting posture, navigation in both directions and speed control.',
            },
        ],
    },
    // SENDERISMO ADDITIONAL
    'valle-imlil': {
        full_description_es: 'Explora el corazón del Alto Atlas en el pintoresco Valle de Imlil. Este trekking de 2 días te llevará a través de huertos de nogales, terrazas de cultivo y aldeas bereberes tradicionales, ofreciendo vistas espectaculares del macizo del Toubkal sin la dificultad de la ascensión a la cima.',
        full_description_en: 'Explore the heart of the High Atlas in the picturesque Imlil Valley. This 2-day trek will take you through walnut orchards, cultivated terraces, and traditional Berber villages, offering spectacular views of the Toubkal massif without the difficulty of the summit ascent.',
        highlights: ['Vistas del Toubkal', 'Aldeas bereberes tradicionales', 'Bosques de nogales', 'Hospitalidad local'],
        highlights_en: ['Toubkal views', 'Traditional Berber villages', 'Walnut forests', 'Local hospitality'],
        included_es: ['Guía local', 'Alojamiento en Gite', 'Pensión completa', 'Traslados'],
        included_en: ['Local guide', 'Gite accommodation', 'Full board', 'Transfers'],
        not_included_es: ['Seguro', 'Propinas', 'Extras'],
        not_included_en: ['Insurance', 'Tips', 'Extras'],
        itinerary_es: [
            { day: 1, title: 'Caminata por el Valle', description: 'Exploración de las aldeas de Armed y Sidi Chamharouch.' },
            { day: 2, title: 'Paso de Montaña', description: 'Cruce del paso Tizi n\'Mzik y regreso a Imlil.' }
        ],
        itinerary_en: [
            { day: 1, title: 'Valley Hike', description: 'Exploration of Armed and Sidi Chamharouch villages.' },
            { day: 2, title: 'Mountain Pass', description: 'Crossing Tizi n\'Mzik pass and return to Imlil.' }
        ]
    },
    'souss-massa': {
        full_description_es: 'Una experiencia única de senderismo costero en el Parque Nacional Souss-Massa. Descubre la biodiversidad de la zona, incluyendo la posibilidad de ver al raro Ibis Eremita, mientras caminas por acantilados, dunas y playas vírgenes del Atlántico.',
        full_description_en: 'A unique coastal hiking experience in the Souss-Massa National Park. Discover the biodiversity of the area, including the possibility of seeing the rare Northern Bald Ibis, while walking along cliffs, dunes, and pristine Atlantic beaches.',
        highlights: ['Avistamiento de aves', 'Acantilados costeros', 'Playas vírgenes', 'Biodiversidad única'],
        highlights_en: ['Bird watching', 'Coastal cliffs', 'Pristine beaches', 'Unique biodiversity'],
        included_es: ['Transporte', 'Guía especializado', 'Entrada al parque', 'Almuerzo picnic'],
        included_en: ['Transport', 'Specialized guide', 'Park entry', 'Picnic lunch'],
        not_included_es: ['Propinas', 'Extras'],
        not_included_en: ['Tips', 'Extras'],
        itinerary_es: [{ day: 1, title: 'Exploración del Parque', description: 'Ruta guiada por el estuario y los acantilados costeros.' }],
        itinerary_en: [{ day: 1, title: 'Park Exploration', description: 'Guided route through the estuary and coastal cliffs.' }]
    },
    'tif-nou-ourika': {
        full_description_es: 'Descubre las famosas siete cascadas del Valle de Ourika. Una caminata refrescante cerca de Marrakech, ideal para familias, que combina la belleza natural del río con la cultura de los mercados bereberes locales.',
        full_description_en: 'Discover the famous seven waterfalls of the Ourika Valley. A refreshing hike near Marrakech, ideal for families, combining the natural beauty of the river with the culture of local Berber markets.',
        highlights: ['Siete cascadas', 'Mercado de los lunes (opcional)', 'Jardines bio-aromáticos', 'Río Ourika'],
        highlights_en: ['Seven waterfalls', 'Monday market (optional)', 'Bio-aromatic gardens', 'Ourika River'],
        included_es: ['Transporte', 'Guía local', 'Té marroquí', 'Seguro'],
        included_en: ['Transport', 'Local guide', 'Moroccan tea', 'Insurance'],
        not_included_es: ['Almuerzo', 'Propinas'],
        not_included_en: ['Lunch', 'Tips'],
        itinerary_es: [{ day: 1, title: 'Día de Cascadas', description: 'Visita a las cascadas de Setti Fatma y almuerzo a orillas del río.' }],
        itinerary_en: [{ day: 1, title: 'Waterfall Day', description: 'Visit to Setti Fatma waterfalls and lunch by the river.' }]
    },
    'trek-marrakech-essaouira': {
        full_description_es: 'Una travesía épica de 4 días conectando la Ciudad Roja con la Perla del Atlántico. Camina a través de paisajes cambiantes, desde las llanuras áridas hasta los bosques de argán costeros, terminando con la brisa marina en tu rostro.',
        full_description_en: 'An epic 4-day traverse connecting the Red City with the Pearl of the Atlantic. Walk through changing landscapes, from arid plains to coastal argan forests, ending with the sea breeze on your face.',
        highlights: ['Travesía completa', 'Bosques de Argán', 'Campamento salvaje', 'Llegada a la costa'],
        highlights_en: ['Full traverse', 'Argan forests', 'Wild camping', 'Arrival at the coast'],
        included_es: ['Transporte de apoyo', 'Equipo de acampada', 'Chef cocinero', 'Guía profesional'],
        included_en: ['Support transport', 'Camping equipment', 'Chef cook', 'Professional guide'],
        not_included_es: ['Saco de dormir', 'Extras en Essaouira'],
        not_included_en: ['Sleeping bag', 'Extras in Essaouira'],
        itinerary_es: [
            { day: 1, title: 'Salida del Atlas', description: 'Caminata por zonas áridas y valles bajos.' },
            { day: 2, title: 'Bosque de Argán', description: 'Adentrándonos en el corazón de la producción de aceite.' },
            { day: 3, title: 'Hacia el Mar', description: 'Primeras vistas del océano Atlántico.' },
            { day: 4, title: 'Essaouira', description: 'Llegada a las playas y fin del trekking.' }
        ],
        itinerary_en: [
            { day: 1, title: 'Leaving the Atlas', description: 'Walk through arid areas and low valleys.' },
            { day: 2, title: 'Argan Forest', description: 'Entering the heart of oil production.' },
            { day: 3, title: 'Towards the Sea', description: 'First views of the Atlantic Ocean.' },
            { day: 4, title: 'Essaouira', description: 'Arrival at the beaches and end of trek.' }
        ]
    },
    // DESIERTO ADDITIONAL
    'merzouga-erg-chebbi': {
        full_description_es: 'Siente la paz absoluta del desierto al amanecer. Una excursión corta pero intensa para ver cómo el sol surge tras las dunas más altas de Marruecos, tiñendo el Sáhara de colores imposibles.',
        full_description_en: 'Feel the absolute peace of the desert at sunrise. A short but intense excursion to see how the sun rises behind the highest dunes in Morocco, dyeing the Sahara in impossible colors.',
        highlights: ['Amanecer en dunas', 'Fotografía de paisajes', 'Silencio del desierto', 'Té al alba'],
        highlights_en: ['Dune sunrise', 'Landscape photography', 'Desert silence', 'Dawn tea'],
        included_es: ['Guía local', 'Paseo en camello o 4x4', 'Té marroquí'],
        included_en: ['Local guide', 'Camel or 4x4 ride', 'Moroccan tea'],
        not_included_es: ['Desayuno completo', 'Transporte fuera de Merzouga'],
        not_included_en: ['Full breakfast', 'Transport outside Merzouga'],
        itinerary_es: [{ day: 1, title: 'Alba en Erg Chebbi', description: 'Salida temprano, ascenso a la duna alta y regreso para desayunar.' }],
        itinerary_en: [{ day: 1, title: 'Dawn in Erg Chebbi', description: 'Early departure, climb to the high dune, and return for breakfast.' }]
    },
    'merzouga-fez': {
        full_description_es: 'Un viaje de 3 días que conecta las dunas del Sáhara con la capital espiritual de Marruecos. Atravesaremos el Valle del Ziz, las montañas del Medio Atlas y los bosques de cedros de Ifrane.',
        full_description_en: 'A 3-day journey connecting the Sahara dunes with the spiritual capital of Morocco. We will cross the Ziz Valley, the Middle Atlas mountains, and the cedar forests of Ifrane.',
        highlights: ['Valle del Ziz', 'Bosque de Cedros', 'Medio Atlas', 'Fez Medina'],
        highlights_en: ['Ziz Valley', 'Cedar Forest', 'Middle Atlas', 'Fez Medina'],
        included_es: ['Transporte privado', 'Guía conductor', 'Alojamiento (incl. noche desierto)', 'Cenas'],
        included_en: ['Private transport', 'Driver guide', 'Accommodation (incl. desert night)', 'Dinners'],
        not_included_es: ['Almuerzos', 'Entradas monumentos'],
        not_included_en: ['Lunches', 'Monument entries'],
        itinerary_es: [
            { day: 1, title: 'Hacia el Sáhara', description: 'Salida de Fez hacia Merzouga.' },
            { day: 2, title: 'Vida Nómada', description: 'Exploración de la zona de dunas y noche en campamento.' },
            { day: 3, title: 'Valle del Ziz', description: 'Regreso hacia Fez cruzando el Atlas.' }
        ],
        itinerary_en: [
            { day: 1, title: 'To the Sahara', description: 'Departure from Fez to Merzouga.' },
            { day: 2, title: 'Nomadic Life', description: 'Exploration of the dune area and night in camp.' },
            { day: 3, title: 'Ziz Valley', description: 'Return to Fez crossing the Atlas.' }
        ]
    },
    'atv-desierto': {
        full_description_es: 'Siente la adrenalina recorriendo las dunas de Merzouga en un potente Quad o Buggy. Una forma diferente y emocionante de explorar la inmensidad del Erg Chebbi con total seguridad.',
        full_description_en: 'Feel the adrenaline riding through the Merzouga dunes on a powerful Quad or Buggy. A different and exciting way to explore the vastness of Erg Chebbi with total safety.',
        highlights: ['Adrenalina en dunas', 'Vistas panorámicas', 'Guías expertos quad', 'Equipamiento moderno'],
        highlights_en: ['Dune adrenaline', 'Panoramic views', 'Expert quad guides', 'Modern equipment'],
        included_es: ['Alquiler de ATV', 'Casco y gafas', 'Instructor guía', 'Seguro básico'],
        included_en: ['ATV rental', 'Helmet and goggles', 'Guide instructor', 'Basic insurance'],
        not_included_es: ['Seguro de daños propios', 'Propinas'],
        not_included_en: ['Self-damage insurance', 'Tips'],
        itinerary_es: [{ day: 1, title: 'Ruta en Quad', description: 'Briefing de seguridad y recorrido por las dunas.' }],
        itinerary_en: [{ day: 1, title: 'Quad Route', description: 'Safety briefing and route through the dunes.' }]
    },
    'camel-trekking': {
        full_description_es: 'Sumérgete profundamente en el Sáhara con este trekking en camello de 3 días. Viajaremos como lo hacían las antiguas caravanas, montando y caminando junto a nuestros dromedarios a través de dunas remotas.',
        full_description_en: 'Immerse yourself deeply in the Sahara with this 3-day camel trek. We will travel like the ancient caravans, riding and walking alongside our dromedaries through remote dunes.',
        highlights: ['Caravana tradicional', 'Acampada salvaje', 'Cultura nómada', 'Inmensidad del Sáhara'],
        highlights_en: ['Traditional caravan', 'Wild camping', 'Nomadic culture', 'Vastness of the Sahara'],
        included_es: ['Dromedarios', 'Camelleros expertos', 'Comida tradicional campestre', 'Equipo acampada'],
        included_en: ['Dromedaries', 'Expert camel drivers', 'Traditional country food', 'Camping equipment'],
        not_included_es: ['Agua embotellada', 'Extras'],
        not_included_en: ['Bottled water', 'Extras'],
        itinerary_es: [
            { day: 1, title: 'Inicio Caravana', description: 'Entrada profunda en las dunas.' },
            { day: 2, title: 'Corazón del Erg', description: 'Día completo de travesía entre dunas gigantes.' },
            { day: 3, title: 'Regreso a Merzouga', description: 'Vuelta al pueblo y fin del viaje.' }
        ],
        itinerary_en: [
            { day: 1, title: 'Caravan Start', description: 'Deep entry into the dunes.' },
            { day: 2, title: 'Heart of the Erg', description: 'Full day of traverse among giant dunes.' },
            { day: 3, title: 'Return to Merzouga', description: 'Back to the village and end of trip.' }
        ]
    },
    // CULTURA ADDITIONAL
    'tour-marrakech': {
        full_description_es: 'Descubre la magia de la Ciudad Roja. Visitaremos la Mezquita Koutoubia, los Palacios de Bahía y Badi, las Tumbas Saadianas y nos perderemos en el vibrante laberinto de sus zocos.',
        full_description_en: 'Discover the magic of the Red City. We will visit the Koutoubia Mosque, the Bahia and Badi Palaces, the Saadian Tombs, and get lost in the vibrant labyrinth of its souks.',
        highlights: ['Palacio Bahía', 'Tumbas Saadianas', 'Zocos tradicionales', 'Plaza Jemaa el-Fna'],
        highlights_en: ['Bahia Palace', 'Saadian Tombs', 'Traditional souks', 'Jemaa el-Fna Square'],
        included_es: ['Guía oficial', 'Entradas monumentos', 'Transporte si necesario'],
        included_en: ['Official guide', 'Monument entries', 'Transport if needed'],
        not_included_es: ['Almuerzo', 'Propinas'],
        not_included_en: ['Lunch', 'Tips'],
        itinerary_es: [{ day: 1, title: 'Marrakech Monumental', description: 'Recorrido histórico por los principales puntos de la ciudad.' }],
        itinerary_en: [{ day: 1, title: 'Monumental Marrakech', description: 'Historical tour of the city\'s main points.' }]
    },
    'tour-imperial-cities': {
        full_description_es: 'Un viaje de lujo de 5 días por las cuatro ciudades imperiales de Marruecos: Rabat, Meknès, Fez y Marrakech. Historia, arquitectura y la esencia pura del Reino del Magreb.',
        full_description_en: 'A 5-day luxury journey through Morocco\'s four imperial cities: Rabat, Meknès, Fez, and Marrakech. History, architecture, and the pure essence of the Kingdom of Maghreb.',
        highlights: ['Las 4 Capitales', 'Volubilis Romano', 'Medinas UNESCO', 'Palacios Reales'],
        highlights_en: ['The 4 Capitals', 'Roman Volubilis', 'UNESCO Medinas', 'Royal Palaces'],
        included_es: ['Hoteles 4/5 estrellas', 'Transporte premium', 'Guías locales especializados', 'Desayunos y Cenas'],
        included_en: ['4/5 star hotels', 'Premium transport', 'Specialized local guides', 'Breakfasts and Dinners'],
        not_included_es: ['Bebidas', 'Extras'],
        not_included_en: ['Drinks', 'Extras'],
        itinerary_es: [
            { day: 1, title: 'Casablanca y Rabat', description: 'Visita Mezquita Hassan II y Capital.' },
            { day: 2, title: 'Meknès y Volubilis', description: 'Ruinas romanas y ciudad de Moulay Ismail.' },
            { day: 3, title: 'Fez Espiritual', description: 'Día completo en la medina de Fez.' },
            { day: 4, title: 'Atlas y Marrakech', description: 'Traslado por el Atlas hacia el sur.' },
            { day: 5, title: 'Marrakech Roja', description: 'Visita de la ciudad y fin del tour.' }
        ],
        itinerary_en: [
            { day: 1, title: 'Casablanca and Rabat', description: 'Visit Hassan II Mosque and Capital.' },
            { day: 2, title: 'Meknès and Volubilis', description: 'Roman ruins and city of Moulay Ismail.' },
            { day: 3, title: 'Spiritual Fez', description: 'Full day in Fez medina.' },
            { day: 4, title: 'Atlas and Marrakech', description: 'Transfer through the Atlas to the south.' },
            { day: 5, title: 'Red Marrakech', description: 'City visit and end of tour.' }
        ]
    },
    'tour-marrakech-esensial': {
        full_description_es: 'Lo mejor de Marrakech en un solo día. Una combinación perfecta entre historia, naturaleza en el Jardín Majorelle y el caos organizado de la plaza más famosa de África.',
        full_description_en: 'The best of Marrakech in a single day. A perfect combination of history, nature in the Majorelle Garden, and the organized chaos of Africa\'s most famous square.',
        highlights: ['Jardín Majorelle', 'Museo Yves Saint Laurent', 'Zocos', 'Amanecer en la Medina'],
        highlights_en: ['Majorelle Garden', 'Yves Saint Laurent Museum', 'Souks', 'Dawn in the Medina'],
        included_es: ['Guía privado', 'Entrada Majorelle', 'Traslado en coche'],
        included_en: ['Private guide', 'Majorelle entry', 'Car transfer'],
        not_included_es: ['Comidas', 'Entrada Museo YSL'],
        not_included_en: ['Meals', 'YSL Museum entry'],
        itinerary_es: [{ day: 1, title: 'Esencia Marrakchi', description: 'Jardines por la mañana, medina por la tarde.' }],
        itinerary_en: [{ day: 1, title: 'Marrakchi Essence', description: 'Gardens in the morning, medina in the afternoon.' }]
    },
    // COSTA ADDITIONAL
    'sur-essaouira': {
        full_description_es: 'Aprende a surfear en las seguras y divertidas playas de Essaouira. Clases para todos los niveles con instructores apasionados que te harán amar el océano desde la primera ola.',
        full_description_en: 'Learn to surf on the safe and fun beaches of Essaouira. Classes for all levels with passionate instructors who will make you love the ocean from the first wave.',
        highlights: ['Olas para principiantes', 'Ambiente relajado', 'Mejor equipo', 'Seguridad total'],
        highlights_en: ['Beginner waves', 'Relaxed atmosphere', 'Best equipment', 'Total safety'],
        included_es: ['Tabla y neopreno', 'Clase 2 horas', 'Monitor certificado', 'Seguro'],
        included_en: ['Board and wetsuit', '2-hour class', 'Certified instructor', 'Insurance'],
        not_included_es: ['Transporte', 'Fotos'],
        not_included_en: ['Transport', 'Photos'],
        itinerary_es: [{ day: 1, title: 'Sesión de Surf', description: 'Calentamiento, teoría en la arena y mucha agua.' }],
        itinerary_en: [{ day: 1, title: 'Surf Session', description: 'Warm-up, sand theory, and lots of water.' }]
    },
    'asilah': {
        full_description_es: 'Visita la joya blanca del norte. Asilah es famosa por sus murales artísticos, su medina impecable junto al mar y sus puestas de sol atlánticas que han inspirado a pintores durante décadas.',
        full_description_en: 'Visit the white jewel of the north. Asilah is famous for its artistic murals, its impeccable medina by the sea, and its Atlantic sunsets that have inspired painters for decades.',
        highlights: ['Murales de arte callejero', 'Murallas portuguesas', 'Playas vírgenes', 'Pesca local'],
        highlights_en: ['Street art murals', 'Portuguese walls', 'Pristine beaches', 'Local fishing'],
        included_es: ['Traslados desde Tánger', 'Guía local', 'Almuerzo de pescado'],
        included_en: ['Transfers from Tangier', 'Local guide', 'Fish lunch'],
        not_included_es: ['Extras', 'Bebidas'],
        not_included_en: ['Extras', 'Drinks'],
        itinerary_es: [{ day: 1, title: 'Día en Asilah', description: 'Paseo artístico por la medina y tarde de playa.' }],
        itinerary_en: [{ day: 1, title: 'Day in Asilah', description: 'Artistic walk through the medina and afternoon at the beach.' }]
    },
    'el-jadida': {
        full_description_es: 'Descubre la herencia portuguesa en Marruecos. La Cisterna Portuguesa es una obra maestra arquitectónica escondida bajo las calles de esta ciudad portuaria llena de historia.',
        full_description_en: 'Discover the Portuguese heritage in Morocco. The Portuguese Cistern is an architectural masterpiece hidden beneath the streets of this port city full of history.',
        highlights: ['Cisterna Portuguesa', 'Ciudadela amurallada', 'Puerto histórico', 'Playas'],
        highlights_en: ['Portuguese Cistern', 'Walled citadel', 'Historical port', 'Beaches'],
        included_es: ['Transporte', 'Guía local', 'Entrada Cisterna'],
        included_en: ['Transport', 'Local guide', 'Cistern entry'],
        not_included_es: ['Propinas', 'Almuerzo'],
        not_included_en: ['Tips', 'Lunch'],
        itinerary_es: [{ day: 1, title: 'Ruta Portuguesa', description: 'Visita a la ciudadela y Mazagan.' }],
        itinerary_en: [{ day: 1, title: 'Portuguese Route', description: 'Visit to the citadel and Mazagan.' }]
    },
    'dakhla': {
        full_description_es: '5 días en el paraíso remoto donde el desierto se encuentra con el océano. Dakhla es la meca mundial del Kitesurf y ofrece paisajes de una belleza salvaje inigualable.',
        full_description_en: '5 days in the remote paradise where the desert meets the ocean. Dakhla is the world capital of Kitesurfing and offers landscapes of unmatched wild beauty.',
        highlights: ['Duna Blanca', 'Laguna turquesa', 'Ostricultura local', 'Condiciones wind perfectas'],
        highlights_en: ['White Dune', 'Turquoise lagoon', 'Local oyster farming', 'Perfect wind conditions'],
        included_es: ['Alojamiento en camp eco-lujo', 'Transfer aeropuerto', 'Pensión completa', 'Actividades guiadas'],
        included_en: ['Eco-luxury camp accommodation', 'Airport transfer', 'Full board', 'Guided activities'],
        not_included_es: ['Vuelos internos', 'Alquiler equipo kite'],
        not_included_en: ['Internal flights', 'Kite equipment rental'],
        itinerary_es: [
            { day: 1, title: 'Llegada al Paraíso', description: 'Transfer y primer contacto con la laguna.' },
            { day: 2, title: 'Duna Blanca', description: 'Excursión a la impresionante duna de arena blanca.' },
            { day: 3, title: 'Deportes de Viento', description: 'Día completo de Kite o Relax.' },
            { day: 4, title: 'Puerto y Ostras', description: 'Degustación de productos locales del mar.' },
            { day: 5, title: 'Despedida', description: 'Último baño y transfer.' }
        ],
        itinerary_en: [
            { day: 1, title: 'Arrival in Paradise', description: 'Transfer and first contact with the lagoon.' },
            { day: 2, title: 'White Dune', description: 'Excursion to the impressive white sand dune.' },
            { day: 3, title: 'Wind Sports', description: 'Full day of Kite or Relax.' },
            { day: 4, title: 'Port and Oysters', description: 'Tasting of local seafood.' },
            { day: 5, title: 'Farewell', description: 'Last swim and transfer.' }
        ]
    },
    // MONTANA ADDITIONAL
    'gorgas-todra': {
        full_description_es: 'Camina entre paredes verticales de más de 300 metros de altura. Las Gargantas del Todra son un espectáculo geológico único y un paraíso para el senderismo y la escalada en el Atlas.',
        full_description_en: 'Walk between vertical walls over 300 meters high. The Todra Gorges are a unique geological spectacle and a paradise for hiking and climbing in the Atlas.',
        highlights: ['Paredes de 300m', 'Palmeral de Tinghir', 'Río Todra', 'Escalada opcional'],
        highlights_en: ['300m walls', 'Tinghir Palm Grove', 'Todra River', 'Optional climbing'],
        included_es: ['Transporte', 'Guía local', 'Almuerzo en el oasis'],
        included_en: ['Transport', 'Local guide', 'Lunch in the oasis'],
        not_included_es: ['Extras', 'Bebidas'],
        not_included_en: ['Extras', 'Drinks'],
        itinerary_es: [{ day: 1, title: 'Día de Gargantas', description: 'Senderismo por el cañón y visita al palmeral antiguo.' }],
        itinerary_en: [{ day: 1, title: 'Gorges Day', description: 'Hiking through the canyon and visit to the ancient palm grove.' }]
    },
    'escalada-todra': {
        full_description_es: 'Disfruta de la mejor escalada deportiva en roca caliza de Marruecos. Vías para todos los niveles en un entorno inmejorable con guías expertos y equipo de primera.',
        full_description_en: 'Enjoy the best sport climbing on limestone rock in Morocco. Routes for all levels in an unbeatable setting with expert guides and top-notch equipment.',
        highlights: ['Roca caliza perfecta', 'Más de 400 vías', 'Guías de escalada', 'Entorno espectacular'],
        highlights_en: ['Perfect limestone rock', 'More than 400 routes', 'Climbing guides', 'Spectacular setting'],
        included_es: ['Equipo completo escalada', 'Guía/Instructor', 'Seguro accidentes', 'Transporte local'],
        included_en: ['Full climbing equipment', 'Guide/Instructor', 'Accident insurance', 'Local transport'],
        not_included_es: ['Alojamiento', 'Comidas'],
        not_included_en: ['Accommodation', 'Meals'],
        itinerary_es: [{ day: 1, title: 'Primer Día', description: 'Evaluación de nivel y escalada en sectores escuela o avanzados.' }],
        itinerary_en: [{ day: 1, title: 'First Day', description: 'Level assessment and climbing in school or advanced sectors.' }]
    },
    'marrakech-toubkal-invierno': {
        full_description_es: 'Una expedición técnica para los que buscan el verdadero reto invernal. Ascender el Toubkal con nieve requiere el uso de crampones y piolet, ofreciendo una experiencia alpina pura en África.',
        full_description_en: 'A technical expedition for those seeking a true winter challenge. Ascending Toubkal with snow requires the use of crampons and an ice axe, offering a pure alpine experience in Africa.',
        highlights: ['Montañismo invernal', 'Uso de piolet y crampones', 'Paisaje alpino africano', 'Reto técnico'],
        highlights_en: ['Winter mountaineering', 'Ice axe and crampon use', 'African alpine landscape', 'Technical challenge'],
        included_es: ['Guía de alta montaña', 'Material técnico (piolet/crampones)', 'Pensión completa en refugio', 'Traslados'],
        included_en: ['High mountain guide', 'Technical gear (axe/crampons)', 'Full board in refuge', 'Transfers'],
        not_included_es: ['Botas rígidas de invierno', 'Seguro rescate federado'],
        not_included_en: ['Stiff winter boots', 'Federated rescue insurance'],
        itinerary_es: [
            { day: 1, title: 'Aproximación con Nieve', description: 'Subida al refugio con equipo invernal.' },
            { day: 2, title: 'Cumbre Invernal', description: 'Ascenso técnico a la cima y regreso.' }
        ],
        itinerary_en: [
            { day: 1, title: 'Snow Approach', description: 'Climb to the refuge with winter gear.' },
            { day: 2, title: 'Winter Summit', description: 'Technical ascent to the summit and return.' }
        ]
    },
    'rifugio-toubkal': {
        full_description_es: 'Un trekking de 2 días hasta el mítico Refugio Neltner. Ideal para sentir la atmósfera de la alta montaña sin necesidad de hacer cumbre, disfrutando del ambiente montañero y las aldeas de altura.',
        full_description_en: 'A 2-day trek to the mythical Neltner Refuge. Ideal for feeling the high mountain atmosphere without needing to summit, enjoying the mountaineering environment and high-altitude villages.',
        highlights: ['Ambiente refugio', 'Macizo del Toubkal', 'Senderos de mulas', 'Cena en la montaña'],
        highlights_en: ['Refuge atmosphere', 'Toubkal Massif', 'Mule paths', 'Mountain dinner'],
        included_es: ['Guía local', 'Noche en refugio', 'Todas las comidas', 'Mula de carga'],
        included_en: ['Local guide', 'Night in refuge', 'All meals', 'Pack mule'],
        not_included_es: ['Extras', 'Propinas'],
        not_included_en: ['Extras', 'Tips'],
        itinerary_es: [{ day: 1, title: 'Subida al Refugio', description: 'Caminata desde Imlil hasta 3200m.' }],
        itinerary_en: [{ day: 1, title: 'Climb to Refuge', description: 'Walk from Imlil up to 3200m.' }]
    },
    // LOCALES ADDITIONAL
    'cena-familia': {
        full_description_es: 'No hay mejor forma de conocer Marruecos que a través de su hospitalidad. Disfruta de una cena auténtica en el hogar de una familia local, compartiendo historias y platos preparados con amor.',
        full_description_en: 'There is no better way to know Morocco than through its hospitality. Enjoy an authentic dinner in the home of a local family, sharing stories and dishes prepared with love.',
        highlights: ['Hospitalidad real', 'Comida casera', 'Intercambio cultural', 'Ambiente íntimo'],
        highlights_en: ['Real hospitality', 'Home-cooked food', 'Cultural exchange', 'Intimate environment'],
        included_es: ['Cena completa', 'Té y dulces', 'Traductor si es necesario', 'Transporte ida/vuelta'],
        included_en: ['Full dinner', 'Tea and sweets', 'Translator if needed', 'Round-trip transport'],
        not_included_es: ['Bebidas alcohólicas', 'Regalos extras'],
        not_included_en: ['Alcoholic beverages', 'Extra gifts'],
        itinerary_es: [{ day: 1, title: 'Noche en Casa', description: 'Encuentro con la familia, preparación del té y cena tradicional.' }],
        itinerary_en: [{ day: 1, title: 'Night at Home', description: 'Meeting the family, tea preparation, and traditional dinner.' }]
    },
    'hammam': {
        full_description_es: 'Relaja cuerpo y mente con el ritual milenario del Hammam. Un baño de vapor tradicional seguido de una exfoliación con jabón negro y un masaje relajante con aceite de argán.',
        full_description_en: 'Relax body and mind with the ancient Hammam ritual. A traditional steam bath followed by an exfoliation with black soap and a relaxing massage with argan oil.',
        highlights: ['Ritual purificante', 'Jabón negro tradicional', 'Masaje relajante', 'Cultura del baño'],
        highlights_en: ['Purifying ritual', 'Traditional black soap', 'Relaxing massage', 'Bath culture'],
        included_es: ['Entrada Hammam', 'Gommage (exfoliación)', 'Masaje 30 min', 'Té de menta'],
        included_en: ['Hammam entry', 'Gommage (exfoliation)', '30 min massage', 'Mint tea'],
        not_included_es: ['Propinas', 'Ropa de baño propia'],
        not_included_en: ['Tips', 'Own swimwear'],
        itinerary_es: [{ day: 1, title: 'Relax Total', description: 'Circuito de vapor, limpieza profunda y masaje.' }],
        itinerary_en: [{ day: 1, title: 'Total Relax', description: 'Steam circuit, deep cleansing, and massage.' }]
    },
    'taller-zellige': {
        full_description_es: 'Aprende el arte geométrico de los azulejos marroquíes. En este taller práctico con maestros artesanos, descubrirás cómo se cortan y ensamblan las piezas que adornan los palacios del Reino.',
        full_description_en: 'Learn the geometric art of Moroccan tiles. In this hands-on workshop with master artisans, you will discover how the pieces that adorn the Kingdom\'s palaces are cut and assembled.',
        highlights: ['Artesanía viva', 'Maestros Maâlems', 'Crea tu propia pieza', 'Historia del arte'],
        highlights_en: ['Living craft', 'Maâlem masters', 'Create your own piece', 'Art history'],
        included_es: ['Materiales', 'Herramientas tradicionales', 'Maestro instructor', 'Tu pieza de recuerdo'],
        included_en: ['Materials', 'Traditional tools', 'Master instructor', 'Your souvenir piece'],
        not_included_es: ['Envío de piezas grandes', 'Almuerzo'],
        not_included_en: ['Shipping of large pieces', 'Lunch'],
        itinerary_es: [{ day: 1, title: 'Maestro por un Día', description: 'Teoría del color, corte manual y ensamblaje de mosaico.' }],
        itinerary_en: [{ day: 1, title: 'Master for a Day', description: 'Color theory, manual cutting, and mosaic assembly.' }]
    },
    'noche-berber': {
        full_description_es: 'Vive una noche de folklore y tradición bereber bajo las jaimas. Música en vivo, danzas ancestrales y una gastronomía que celebra las raíces de los hombres libres del desierto.',
        full_description_en: 'Live a night of folklore and Berber tradition under the tents. Live music, ancestral dances, and a gastronomy that celebrates the roots of the free men of the desert.',
        highlights: ['Música en vivo', 'Danzas tribales', 'Cena bajo jaima', 'Atmósfera mágica'],
        highlights_en: ['Live music', 'Tribal dances', 'Dinner under tent', 'Magical atmosphere'],
        included_es: ['Espectáculo folklórico', 'Cena de gala bereber', 'Traslados', 'Fuego de campamento'],
        included_en: ['Folklore show', 'Berber gala dinner', 'Transfers', 'Campfire'],
        not_included_es: ['Bebidas extras', 'Alojamiento (opcional)'],
        not_included_en: ['Extra drinks', 'Accommodation (optional)'],
        itinerary_es: [{ day: 1, title: 'Fiesta Bereber', description: 'Recepción tradicional, cena con espectáculo y música participativa.' }],
        itinerary_en: [{ day: 1, title: 'Berber Party', description: 'Traditional reception, dinner with show, and participatory music.' }]
    },
    'visita-berber': {
        full_description_es: 'Descubre el día a día en una aldea bereber auténtica. Aprenderemos el ritual del té de menta, cómo se hornea el pan tradicional y visitaremos los campos de cultivo locales.',
        full_description_en: 'Discover daily life in an authentic Berber village. We will learn the mint tea ritual, how traditional bread is baked, and visit local crop fields.',
        highlights: ['Ritual del té', 'Pan artesanal', 'Vida rural', 'Contacto humano'],
        highlights_en: ['Tea ritual', 'Artisanal bread', 'Rural life', 'Human contact'],
        included_es: ['Guía traductor', 'Degustación de té y pan', 'Visita a la comunidad', 'Transporte'],
        included_en: ['Translator guide', 'Tea and bread tasting', 'Community visit', 'Transport'],
        not_included_es: ['Donaciones opcionales', 'Propinas'],
        not_included_en: ['Optional donations', 'Tips'],
        itinerary_es: [{ day: 1, title: 'Vida en la Aldea', description: 'Paseo por el pueblo, taller de pan y té con los locales.' }],
        itinerary_en: [{ day: 1, title: 'Village Life', description: 'Walk through the village, bread workshop, and tea with locals.' }]
    },
};

export default function ExperienceDetailPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    const experienceSlug = props.experience || 'trekking-atlas';
    const experience = experiencesData.find((e) => e.slug === experienceSlug) || experiencesData[0];
    const details = experienceDetails[experienceSlug] || experienceDetails['trekking-atlas'];

    return (
        <>
            <Head>
                <title>{t(experience.title_es, experience.title_en) + ' | Aventuras con Esencia'}</title>
                <meta name="description" content={t(details.full_description_es, details.full_description_en)} />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px]">
                <img src={experience.image} alt={t(experience.title_es, experience.title_en)} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 flex items-end pb-16">
                    <div className="container-custom">
                        {experience.badge_es && (
                            <span
                                className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold text-white"
                                style={{ backgroundColor: experience.badge_color }}
                            >
                                {t(experience.badge_es, experience.badge_en)}
                            </span>
                        )}
                        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">{t(experience.title_es, experience.title_en)}</h1>
                        <p className="mt-2 text-lg text-white/80">{experience.destination}</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* Left Column - Details */}
                        <div className="lg:col-span-2">
                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                                    {t('Sobre esta experiencia', 'About this experience')}
                                </h2>
                                <p className="text-lg leading-relaxed text-text-secondary">
                                    {t(details.full_description_es, details.full_description_en)}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="mb-8">
                                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Highlights', 'Highlights')}</h2>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    {details.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{t(h, details.highlights_en[i])}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="mb-8">
                                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Itinerario', 'Itinerary')}</h2>
                                <div className="space-y-6">
                                    {details.itinerary_es.map((day, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                                                {day.day}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-dark">{t(day.title, details.itinerary_en[i].title)}</h3>
                                                <p className="text-text-secondary">{day.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Included */}
                            <div className="mb-8">
                                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">{t('Incluido', 'Included')}</h2>
                                <ul className="space-y-2">
                                    {details.included_es.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <svg
                                                className="h-5 w-5 flex-shrink-0 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{t(item, details.included_en[i])}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Not Included */}
                            <div>
                                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">{t('No incluido', 'Not included')}</h2>
                                <ul className="space-y-2">
                                    {details.not_included_es.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <svg className="h-5 w-5 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-text-secondary">{t(item, details.not_included_en[i])}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div>
                            <div className="sticky top-32 rounded-xl bg-white p-6 shadow-lg">
                                <div className="mb-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-text-secondary">{t('Desde', 'From')}</p>
                                        <p className="text-3xl font-bold text-primary">${experience.price_from_usd}</p>
                                        <p className="text-sm text-text-light">{t('por persona', 'per person')}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-500">★</span>
                                        <span className="font-semibold">{experience.rating}</span>
                                        <span className="text-sm text-text-secondary">({experience.reviews_count})</span>
                                    </div>
                                </div>

                                <div className="mb-4 space-y-3 border-t border-b border-stone/20 py-4">
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">{t('Duración', 'Duration')}</span>
                                        <span className="font-medium">
                                            {experience.duration_days} {experience.duration_days === 1 ? t('día', 'day') : t('días', 'days')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">{t('Dificultad', 'Difficulty')}</span>
                                        <span
                                            className={`font-medium ${
                                                experience.difficulty === 'facil'
                                                    ? 'text-green-600'
                                                    : experience.difficulty === 'moderado'
                                                      ? 'text-yellow-600'
                                                      : experience.difficulty === 'dificil'
                                                        ? 'text-orange-600'
                                                        : 'text-red-600'
                                            }`}
                                        >
                                            {t(
                                                experience.difficulty === 'facil'
                                                    ? 'Fácil'
                                                    : experience.difficulty === 'moderado'
                                                      ? 'Moderado'
                                                      : experience.difficulty === 'dificil'
                                                        ? 'Difícil'
                                                        : 'Extremo',
                                                experience.difficulty === 'facil'
                                                    ? 'Easy'
                                                    : experience.difficulty === 'moderado'
                                                      ? 'Moderate'
                                                      : experience.difficulty === 'dificil'
                                                        ? 'Difficult'
                                                        : 'Extreme',
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">{t('Destino', 'Destination')}</span>
                                        <span className="font-medium">{experience.destination}</span>
                                    </div>
                                </div>

                                <Link href="/reservar" className="btn-primary block w-full text-center">
                                    {t('Reservar ahora', 'Book now')}
                                </Link>

                                <p className="mt-4 text-center text-sm text-text-light">
                                    {t('Cancelación gratuita hasta 7 días antes', 'Free cancellation up to 7 days before')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Experiences */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="mb-8 font-heading text-3xl font-bold text-dark">{t('Otras experiencias', 'Other experiences')}</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {experiencesData
                            .filter((e) => e.slug !== experienceSlug)
                            .slice(0, 3)
                            .map((exp) => (
                                <Link
                                    key={exp.slug}
                                    href={`/experiencias/${exp.slug}`}
                                    className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
                                >
                                    <div className="relative h-48">
                                        <img
                                            src={exp.image}
                                            alt={t(exp.title_es, exp.title_en)}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {exp.badge_es && (
                                            <span
                                                className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                                                style={{ backgroundColor: exp.badge_color }}
                                            >
                                                {t(exp.badge_es, exp.badge_en)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="mb-2 font-heading text-lg font-semibold">{t(exp.title_es, exp.title_en)}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-primary">${exp.price_from_usd}</span>
                                            <span className="text-sm text-text-secondary">
                                                {exp.duration_days} {t('días', 'days')}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </>
    );
}
