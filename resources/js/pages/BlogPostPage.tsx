import { Head, Link } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface BlogPost {
    id: string;
    slug: string;
    title_es: string;
    title_en: string;
    content_es: string;
    content_en: string;
    excerpt_es: string;
    excerpt_en: string;
    category: string;
    category_es: string;
    category_en: string;
    image: string;
    read_time: number;
    date: string;
    author: string;
}

const blogPosts: Record<string, BlogPost> = {
    'mejores-epocas-visitar-marruecos': {
        id: '1',
        slug: 'mejores-epocas-visitar-marruecos',
        title_es: 'Mejor época para visitar Marruecos: Guía completa',
        title_en: 'Best time to visit Morocco: Complete guide',
        excerpt_es: 'Descubre cuándo es el mejor momento para viajar a Marruecos según tus intereses.',
        excerpt_en: 'Find out when is the best time to travel to Morocco according to your interests.',
        content_es: `
# Mejor época para visitar Marruecos

Marruecos es un destino que se puede visitar durante todo el año, pero cada estación ofrece experiencias únicas. Aquí te contamos todo lo que necesitas saber para planificar tu viaje.

## Primavera (Marzo - Mayo)

La primavera es quizás la mejor época para visitar Marruecos. Las temperaturas son suaves y agradables, especialmente en las ciudades (entre 20-25°C durante el día).

### Ventajas:
- Clima perfecto para explorar ciudades
- Las montañas del Atlas están verdes y florecidas
- Menos turistas que en verano
- Precios más accesibles

### Qué hacer:
- Visitar la Medina de Marrakech
- Trekking en el Alto Atlas
- Excursión a las Cascadas de Ourika

## Verano (Junio - Agosto)

El verano puede ser muy caluroso, especialmente en el sur (puede superar los 40°C en Marrakech). Sin embargo, es la temporada alta de turismo.

### Ventajas:
- Vacaciones escolares
- Mayor oferta de actividades
- Vida nocturna activa

### Inconvenientes:
- Calor extremo en el sur
- Precios más altos
- Mucha gente en zonas turísticas

**Consejo:** Si visitas en verano, ve al norte (Tánger, Chefchaouen) o a la costa (Essaouira).

## Otoño (Septiembre - Noviembre)

El otoño es otra excelente época. Las temperaturas vuelven a ser agradables y el paisaje está aún verde por las lluvias ligeras de septiembre.

### Ventajas:
- Temperaturas ideales (20-30°C)
- Comenzar la cosecha de aceitunas
- Paisajes dorados beautiful

### Qué hacer:
- Ruta de las Mil Kasbahs
- Vino de cosecha en la región de Meknes
- Festivals locales

## Invierno (Diciembre - Febrero)

El invierno en Marruecos tiene sus ventajas y desventajas. Las noches pueden ser frías, especialmente en el desierto y las montañas.

### Ventajas:
- Precios最低(bajos)
- Pocas multitudes
- Nieve en el Atlas (para amantes del ski)

### Inconvenientes:
- Frío por la noche en el desierto
- Días más cortos
- Lluvias en el norte

## Conclusión

La **mejor época** depende de lo que busques:
- **Explorar ciudades:** Primavera u Otoño
- **Desierto:** Octubre-Abril (evitar verano)
- **Montaña:** Mayo-Septiembre
- **Costa:** Junio-Septiembre

¡Planifica tu aventura a Marruecos ahora!
        `,
        content_en: `
# Best time to visit Morocco

Morocco is a destination that can be visited all year round, but each season offers unique experiences. Here's everything you need to know to plan your trip.

## Spring (March - May)

Spring is perhaps the best time to visit Morocco. Temperatures are mild and pleasant, especially in the cities (between 20-25°C during the day).

### Advantages:
- Perfect weather for exploring cities
- Atlas mountains are green and blooming
- Fewer tourists than in summer
- More affordable prices

### What to do:
- Visit the Marrakech Medina
- Trekking in the High Atlas
- Excursion to Ourika Waterfalls

## Summer (June - August)

Summer can be very hot, especially in the south (can exceed 40°C in Marrakech). However, it is the high tourist season.

### Advantages:
- School holidays
- Greater offer of activities
- Active nightlife

### Disadvantages:
- Extreme heat in the south
- Higher prices
- Many people in tourist areas

**Tip:** If you visit in summer, go to the north (Tangier, Chefchaouen) or the coast (Essaouira).

## Autumn (September - November)

Autumn is another excellent time. Temperatures become pleasant again and the landscape is still green from September rains.

### Advantages:
- Ideal temperatures (20-30°C)
- Olive harvest beginning
- Beautiful golden landscapes

### What to do:
- Route of the Thousand Kasbahs
- Harvest wine in the Meknes region
- Local festivals

## Winter (December - February)

Winter in Morocco has its advantages and disadvantages. Nights can be cold, especially in the desert and mountains.

### Advantages:
- Lowest prices
- Few crowds
- Snow in the Atlas (for ski lovers)

### Disadvantages:
- Cold nights in the desert
- Shorter days
- Rain in the north

## Conclusion

The **best time** depends on what you're looking for:
- **Exploring cities:** Spring or Autumn
- **Desert:** October-April (avoid summer)
- **Mountain:** May-September
- **Coast:** June-September

Plan your adventure to Morocco now!
        `,
        category: 'consejos',
        category_es: 'Consejos de Viaje',
        category_en: 'Travel Tips',
        image: '/images/trekking-atlas/trekking-atlas1.webp',
        read_time: 8,
        date: '2026-02-15',
        author: 'Aventuras con Esencia',
    },
    'que-empaizar-marruecos': {
        id: '2',
        slug: 'que-empaizar-marruecos',
        title_es: 'Qué empacar para tu viaje a Marruecos',
        title_en: 'What to pack for your trip to Morocco',
        excerpt_es: 'La lista definitiva de cosas que necesitas llevar a Marruecos: desde ropa adecuada hasta artículos esenciales.',
        excerpt_en: 'The ultimate list of things you need to bring to Morocco: from appropriate clothing to essential items.',
        content_es: `
# Qué empacar para tu viaje a Marruecos

Preparar la maleta para Marruecos requiere un poco de planificación, ya que el clima puede variar drásticamente y es importante respetar las costumbres locales. Aquí tienes nuestra guía definitiva.

## 1. Ropa Adecuada

Marruecos es un país musulmán conservador. Aunque en las ciudades modernas como Marrakech o Casablanca hay más flexibilidad, es recomendable vestir de forma respetuosa.

### Para Mujeres:
- Pañuelos ligeros (útiles para el sol, el polvo en el desierto o entrar en mezquitas)
- Pantalones largos o faldas por debajo de la rodilla
- Camisetas que cubran los hombros
- Vestidos largos de algodón (ideales para el calor)

### Para Hombres:
- Pantalones largos o bermudas discretas
- Camisas o camisetas de algodón
- Evitar camisetas sin mangas en zonas rurales

## 2. Calzado

Vas a caminar mucho por calles empedradas y arena.
- **Zapatillas de trekking o deportivas cómodas:** Para las medinas y excursiones.
- **Sandalias:** Para descansar los pies al final del día.
- **Chanclas:** Esenciales para los baños árabes (Hammams) o duchas.

## 3. Artículos para el Desierto

Si planeas una noche en el Sáhara:
- **Chaqueta o polar:** Las temperaturas caen drásticamente por la noche.
- **Gafas de sol y protector solar:** El sol del desierto es implacable.
- **Cámara con protección:** La arena fina entra en todos lados.

## 4. Botiquín y Aseo

- **Desinfectante de manos:** Útil antes de comer en puestos callejeros.
- **Medicamentos básicos:** Imodium o similar (por si acaso), analgésicos.
- **Toallitas húmedas:** Siempre útiles.
- **Tapones para los oídos:** Las medinas pueden ser ruidosas y la llamada a la oración es temprano.

## 5. Electrónica y Documentos

- **Adaptador de enchufe:** Marruecos usa el tipo C y E (estándar europeo de dos clavijas redondas).
- **Cargador portátil (Powerbank):** Para los trayectos largos.
- **Copia de documentos:** Pasaporte y seguro de viaje (físico y en la nube).

## 6. Dinero

- **Efectivo (Dirhams):** Muchos lugares pequeños no aceptan tarjetas. Es mejor cambiar moneda al llegar.

¡Con esto ya estás listo para tu aventura con esencia en Marruecos!
        `,
        content_en: `
# What to pack for your trip to Morocco

Packing for Morocco requires some planning, as the climate can vary drastically and it is important to respect local customs. Here is our ultimate guide.

## 1. Appropriate Clothing

Morocco is a conservative Muslim country. Although modern cities like Marrakech or Casablanca are more flexible, it is advisable to dress respectfully.

### For Women:
- Lightweight scarves (useful for sun, desert dust, or entering mosques)
- Long pants or skirts below the knee
- Shirts that cover the shoulders
- Long cotton dresses (ideal for heat)

### For Men:
- Long pants or discreet shorts
- Cotton shirts or t-shirts
- Avoid sleeveless shirts in rural areas

## 2. Footwear

You will be walking a lot on cobblestone streets and sand.
- **Trekking or comfortable sports shoes:** For medinas and excursions.
- **Sandals:** To rest your feet at the end of the day.
- **Flip-flops:** Essential for Arab baths (Hammams) or showers.

## 3. Desert Items

If you plan a night in the Sahara:
- **Jacket or fleece:** Temperatures drop drastically at night.
- **Sunglasses and sunscreen:** The desert sun is relentless.
- **Camera with protection:** Fine sand gets everywhere.

## 4. First Aid Kit and Toiletries

- **Hand sanitizer:** Useful before eating at street stalls.
- **Basic medications:** Imodium or similar (just in case), painkillers.
- **Wet wipes:** Always useful.
- **Earplugs:** Medinas can be noisy and the call to prayer is early.

## 5. Electronics and Documents

- **Plug adapter:** Morocco uses type C and E (European standard with two round pins).
- **Portable charger (Powerbank):** For long trips.
- **Copies of documents:** Passport and travel insurance (physical and in the cloud).

## 6. Money

- **Cash (Dirhams):** Many small places do not accept cards. It is better to exchange currency upon arrival.

With this, you are ready for your adventure with essence in Morocco!
        `,
        category: 'consejos',
        category_es: 'Consejos de Viaje',
        category_en: 'Travel Tips',
        image: '/images/marrakech/marrakech3.jpg',
        read_time: 6,
        date: '2026-02-10',
        author: 'Aventuras con Esencia',
    },
    'cultura-bereber-marruecos': {
        id: '3',
        slug: 'cultura-bereber-marruecos',
        title_es: 'Guía de la cultura bereber en Marruecos',
        title_en: 'Guide to Berber culture in Morocco',
        excerpt_es: 'Descubre la rica herencia de los pueblos bereberes, su historia, tradiciones y cómo experimentarla durante tu viaje.',
        excerpt_en: 'Discover the rich heritage of the Berber people, their history, traditions, and how to experience it during your trip.',
        content_es: `
# Guía de la cultura bereber en Marruecos

Los Bereberes, que se llaman a sí mismos "Imazighen" (hombres libres), son los habitantes originales del norte de África. Su cultura es el corazón palpitante de Marruecos, especialmente en las zonas de montaña y el desierto.

## Una Historia Milenaria

La cultura bereber se remonta a más de 5.000 años. A pesar de las diversas influencias a lo largo de los siglos (romanos, árabes, franceses), han logrado mantener su identidad única, su lengua (el Tamazight) y sus tradiciones.

## El Idioma: Tamazight

El Tamazight es una lengua oficial en Marruecos junto con el árabe. Su alfabeto, el Tifinagh, es visualmente fascinante y se puede ver en señales de tráfico y edificios oficiales por todo el país.

## Tradiciones y Artesanía

La artesanía bereber no es solo decorativa; cuenta historias.
- **Alfombras:** Cada patrón y color en una alfombra bereber tiene un significado, a menudo representando la vida de la mujer que la tejió.
- **Joyas:** Tradicionalmente de plata, las joyas bereberes son robustas y están cargadas de simbolismo protector.
- **Tatuajes de Henna:** Tradicionalmente, las mujeres bereberes se tatuaban el rostro y las manos con símbolos geométricos (Siyala) para indicar su estatus social o protegerse del mal de ojo.

## Hospitalidad: El Té Bereber

La hospitalidad es el pilar de la sociedad bereber. Si te invitan a una casa, te ofrecerán el famoso "té bereber" (té de menta), a menudo llamado "el whisky bereber". Es un ritual de bienvenida que no debes rechazar.

## El Estilo de Vida en el Atlas

En las montañas del Alto Atlas, muchas comunidades aún viven según los ciclos estacionales. La trashumancia (mover el ganado según la época) sigue siendo una práctica vital para muchos pastores.

## Cómo Experimentar la Cultura Bereber

En Aventuras con Esencia, creemos en el turismo respetuoso. Nuestras experiencias te permiten:
- Dormir en un Gite (casa de huéspedes local) en el Atlas.
- Compartir una comida con una familia bereber.
- Aprender sobre las técnicas agrícolas tradicionales.

Entender la cultura bereber es entender el alma de Marruecos.
        `,
        content_en: `
# Guide to Berber culture in Morocco

The Berbers, who call themselves "Imazighen" (free men), are the original inhabitants of North Africa. Their culture is the beating heart of Morocco, especially in the mountain and desert areas.

## An Ancient History

Berber culture dates back more than 5,000 years. Despite various influences over the centuries (Romans, Arabs, French), they have managed to maintain their unique identity, their language (Tamazight), and their traditions.

## The Language: Tamazight

Tamazight is an official language in Morocco along with Arabic. Its alphabet, Tifinagh, is visually fascinating and can be seen on road signs and official buildings throughout the country.

## Traditions and Craftsmanship

Berber craftsmanship is not just decorative; it tells stories.
- **Rugs:** Every pattern and color in a Berber rug has a meaning, often representing the life of the woman who wove it.
- **Jewelry:** Traditionally made of silver, Berber jewelry is robust and loaded with protective symbolism.
- **Henna Tattoos:** Traditionally, Berber women tattooed their faces and hands with geometric symbols (Siyala) to indicate their social status or protect themselves from the evil eye.

## Hospitality: Berber Tea

Hospitality is the pillar of Berber society. If you are invited to a home, you will be offered the famous "Berber tea" (mint tea), often called "Berber whiskey." It is a welcoming ritual that you should not refuse.

## Lifestyle in the Atlas

In the High Atlas mountains, many communities still live according to seasonal cycles. Transhumance (moving livestock according to the season) remains a vital practice for many shepherds.

## How to Experience Berber Culture

At Aventuras con Esencia, we believe in respectful tourism. Our experiences allow you to:
- Sleep in a Gite (local guesthouse) in the Atlas.
- Share a meal with a Berber family.
- Learn about traditional agricultural techniques.

Understanding Berber culture is understanding the soul of Morocco.
        `,
        category: 'cultura',
        category_es: 'Cultura',
        category_en: 'Culture',
        image: '/images/marrakech/marrakech1.jpg',
        read_time: 10,
        date: '2026-02-05',
        author: 'Aventuras con Esencia',
    },
    'gastronomia-marroqui-tradicional': {
        id: '4',
        slug: 'gastronomia-marroqui-tradicional',
        title_es: 'Gastronomía marroquí: Platos típicos que debes probar',
        title_en: 'Moroccan cuisine: Typical dishes you must try',
        excerpt_es: 'Desde el tagine hasta el cuscús, descubre los platos tradicionales de la cocina marroquí que deleitarán tu paladar.',
        excerpt_en: 'From tagine to couscous, discover traditional Moroccan dishes that will delight your palate.',
        content_es: `
# Gastronomía marroquí: Un festín para los sentidos

La cocina marroquí es una de las más ricas y variadas del mundo, resultado de la mezcla de influencias bereberes, árabes, andalusíes y mediterráneas. Es famosa por su uso magistral de las especias.

## Los Imprescindibles

### 1. El Tajín (Tagine)
Nombrado por el recipiente de barro en el que se cocina, es un estofado lento que puede ser de cordero, pollo, pescado o verduras. El secreto está en la cocción al vapor que mantiene todo tierno y jugoso.
*Recomendación:* Tajín de cordero con ciruelas y almendras.

### 2. El Cuscús
Tradicionalmente se come los viernes después de la oración del mediodía. Se sirve con siete verduras y carne. La sémola se cocina al vapor varias veces hasta que queda esponjosa.

### 3. La Pastela (Bastilla)
Un plato sofisticado que combina dulce y salado. Es una tarta de hojaldre (masa filo) rellena tradicionalmente de pichón (o pollo), almendras, canela y azúcar glass.

### 4. Harira
La sopa más famosa de Marruecos, hecha a base de tomates, lentejas, garbanzos y especias. Es el plato principal para romper el ayuno durante el Ramadán.

## El Arte de las Especias

No puedes hablar de comida marroquí sin mencionar el **Ras el Hanout**, una mezcla que puede contener hasta 30 especias diferentes. El comino, la cúrcuma, el jengibre y el azafrán son los pilares de cada cocina.

## Dulces y Té

Marruecos es el paraíso para los amantes del dulce. Los pasteles a base de almendras y miel, como los **Cuernos de Gacela**, son el acompañamiento perfecto para el té de menta.

## Consejos para Comer en Marruecos
- **Come con la mano derecha:** Tradicionalmente se usa el pan como utensilio.
- **Lávate las manos:** Antes y después de comer (a menudo te traerán un aguamanil a la mesa).
- **Acepta el té:** Es un gesto de cortesía.

¡Buen provecho o, como dicen en Marruecos, "B'shia"!
        `,
        content_en: `
# Moroccan cuisine: A feast for the senses

Moroccan cuisine is one of the richest and most varied in the world, the result of a blend of Berber, Arab, Andalusian, and Mediterranean influences. It is famous for its masterful use of spices.

## The Essentials

### 1. Tagine
Named after the clay pot in which it is cooked, it is a slow-cooked stew that can be made with lamb, chicken, fish, or vegetables. The secret is the steam cooking that keeps everything tender and juicy.
*Recommendation:* Lamb tagine with prunes and almonds.

### 2. Couscous
Traditionally eaten on Fridays after the midday prayer. It is served with seven vegetables and meat. The semolina is steamed several times until fluffy.

### 3. Pastilla (Bastilla)
A sophisticated dish that combines sweet and savory. It is a pastry pie (phyllo dough) traditionally filled with pigeon (or chicken), almonds, cinnamon, and powdered sugar.

### 4. Harira
The most famous soup in Morocco, made from tomatoes, lentils, chickpeas, and spices. It is the main dish to break the fast during Ramadan.

## The Art of Spices

You cannot talk about Moroccan food without mentioning **Ras el Hanout**, a mixture that can contain up to 30 different spices. Cumin, turmeric, ginger, and saffron are the pillars of every kitchen.

## Sweets and Tea

Morocco is a paradise for sweet lovers. Almond and honey-based pastries, such as **Gazelle Horns**, are the perfect accompaniment to mint tea.

## Tips for Eating in Morocco
- **Eat with your right hand:** Traditionally, bread is used as a utensil.
- **Wash your hands:** Before and after eating (a ewer will often be brought to your table).
- **Accept the tea:** It is a gesture of courtesy.

Enjoy your meal or, as they say in Morocco, "B'shia"!
        `,
        category: 'gastronomia',
        category_es: 'Gastronomía',
        category_en: 'Gastronomy',
        image: '/images/marrakech/marrakech2.jpg',
        read_time: 7,
        date: '2026-01-28',
        author: 'Aventuras con Esencia',
    },
    'trekking-atlas-para-principiantes': {
        id: '5',
        slug: 'trekking-atlas-para-principiantes',
        title_es: 'Trekking en el Atlas: Guía para principiantes',
        title_en: 'Trekking in the Atlas: Guide for beginners',
        excerpt_es: 'Todo lo que necesitas saber para hacer trekking en las montañas del Atlas: rutas, dificultad y consejos.',
        excerpt_en: 'Everything you need to know to trek in the Atlas mountains: routes, difficulty, and tips.',
        content_es: `
# Trekking en el Atlas: Guía para principiantes

Las montañas del Atlas ofrecen algunos de los paisajes más espectaculares de África. Si es tu primera vez haciendo senderismo en esta región, esta guía te ayudará a prepararte.

## ¿Por qué el Alto Atlas?

A solo un par de horas de Marrakech, el Alto Atlas te transporta a un mundo diferente. Encontrarás aldeas bereberes colgadas de las laderas, valles fértiles y picos que superan los 4.000 metros.

## Rutas Recomendadas para Principiantes

### 1. Valle de Imlil
Imlil es la puerta de entrada al Parque Nacional del Toubkal. Hay muchas rutas cortas (2-4 horas) que conectan las aldeas cercanas como Aroumd. Es ideal para una excursión de un día.

### 2. Valle de Azzaden
Menos transitado que Imlil, ofrece una experiencia más auténtica. Las caminatas son suaves y atraviesan hermosos bosques de enebro.

## Consejos de Preparación

- **Aclimatación:** Aunque no son los Himalayas, la altitud se nota. Sube despacio y bebe mucha agua.
- **Equipo:** Unas buenas botas de montaña con soporte para el tobillo son esenciales. El terreno es pedregoso.
- **Guías Locales:** Siempre recomendamos ir con un guía certificado. No solo conocen el camino, sino que te abrirán las puertas de la cultura local.

## Qué Llevar
- Protección solar (el sol es fuerte en la montaña).
- Capas de ropa (el tiempo cambia rápido).
- Frutos secos o snacks (aunque los almuerzos en las rutas suelen ser abundantes).

## Respeto por el Entorno

Recuerda siempre la regla de oro: "No dejes rastro". Llévate tu basura contigo y respeta la privacidad de los habitantes de las aldeas cuando tomes fotografías.

¡La montaña te espera para una aventura que no olvidarás!
        `,
        content_en: `
# Trekking in the Atlas: Guide for beginners

The Atlas mountains offer some of the most spectacular landscapes in Africa. If it's your first time hiking in this region, this guide will help you prepare.

## Why the High Atlas?

Just a couple of hours from Marrakech, the High Atlas transports you to a different world. You will find Berber villages clinging to the slopes, fertile valleys, and peaks exceeding 4,000 meters.

## Recommended Routes for Beginners

### 1. Imlil Valley
Imlil is the gateway to the Toubkal National Park. There are many short routes (2-4 hours) connecting nearby villages like Aroumd. It is ideal for a day trip.

### 2. Azzaden Valley
Less traveled than Imlil, it offers a more authentic experience. The walks are gentle and pass through beautiful juniper forests.

## Preparation Tips

- **Acclimatization:** Although not the Himalayas, the altitude is noticeable. Climb slowly and drink plenty of water.
- **Equipment:** Good hiking boots with ankle support are essential. The terrain is stony.
- **Local Guides:** We always recommend going with a certified guide. They not only know the way but will open the doors to the local culture.

## What to Bring
- Sun protection (the sun is strong in the mountains).
- Layers of clothing (weather changes fast).
- Nuts or snacks (although lunches on the routes are usually abundant).

## Respect for the Environment

Always remember the golden rule: "Leave no trace." Take your trash with you and respect the privacy of village residents when taking photographs.

The mountain awaits you for an adventure you will not forget!
        `,
        category: 'naturaleza',
        category_es: 'Naturaleza',
        category_en: 'Nature',
        image: '/images/trekking-atlas/trekking-atlas5.webp',
        read_time: 9,
        date: '2026-01-20',
        author: 'Aventuras con Esencia',
    },
    'visitar-desierto-merzouga': {
        id: '6',
        slug: 'visitar-desierto-merzouga',
        title_es: 'Guía para visitar el desierto de Merzouga',
        title_en: 'Guide to visiting the Merzouga desert',
        excerpt_es: 'Experiencias, consejos y qué esperar cuando visitas las impresionantes dunas de Erg Chebbi en el Sáhara marroquí.',
        excerpt_en: 'Experiences, tips, and what to expect when visiting the impressive Erg Chebbi dunes in the Moroccan Sahara.',
        content_es: `
# Guía para visitar el desierto de Merzouga

Merzouga es el hogar de las dunas de Erg Chebbi, unas montañas de arena que pueden alcanzar los 150 metros de altura. Es, posiblemente, el lugar más mágico de Marruecos.

## Cómo llegar

La mayoría de los viajeros llegan desde Marrakech o Fez. Es un viaje largo (unas 9-10 horas), pero los paisajes por el camino (valle del Ziz, Gargantas del Dades) hacen que valga la pena.

## Experiencias Imperdibles

### 1. Paseo en Camello al Atardecer
Cruzar las dunas mientras el sol se pone, pintando la arena de tonos naranjas y rojos, es una experiencia casi mística.

### 2. Noche en un Campamento Bereber
Dormir bajo un manto de estrellas que parece que puedes tocar con la mano. Los campamentos van desde los más básicos hasta los de gran lujo con todas las comodidades.

### 3. Música Gnawa en Khamlia
Cerca de Merzouga está el pueblo de Khamlia, donde puedes escuchar la música ancestral de los descendientes de antiguos esclavos del África subsahariana.

## Consejos Útiles

- **Mejor época:** De octubre a mayo. Evita el verano si no quieres experimentar temperaturas de 45°C.
- **Ropa:** Lleva algo de abrigo para la noche, incluso en primavera. En el desierto, cuando se va el sol, refresca rápido.
- **Agua:** Mantente siempre hidratado.

## El Respeto al Desierto

El ecosistema del desierto es frágil. No dejes basura y trata de consumir agua de forma responsable, ya que es un recurso extremadamente escaso en la zona.

¡Ven a descubrir el silencio del Sáhara con nosotros!
        `,
        content_en: `
# Guide to visiting the Merzouga desert

Merzouga is home to the Erg Chebbi dunes, sand mountains that can reach 150 meters in height. It is possibly the most magical place in Morocco.

## How to get there

Most travelers arrive from Marrakech or Fez. It is a long journey (about 9-10 hours), but the landscapes along the way (Ziz Valley, Dades Gorges) make it worth it.

## Must-do Experiences

### 1. Camel Ride at Sunset
Crossing the dunes while the sun sets, painting the sand in orange and red tones, is an almost mystical experience.

### 2. Night in a Berber Camp
Sleep under a blanket of stars that feels like you can touch them with your hand. Camps range from basic to high-luxury with all amenities.

### 3. Gnawa Music in Khamlia
Near Merzouga is the village of Khamlia, where you can listen to the ancestral music of the descendants of former slaves from sub-Saharan Africa.

## Useful Tips

- **Best time:** From October to May. Avoid summer if you don't want to experience temperatures of 45°C.
- **Clothing:** Bring something warm for the night, even in spring. In the desert, once the sun goes down, it cools down quickly.
- **Water:** Always stay hydrated.

## Respect for the Desert

The desert ecosystem is fragile. Do not leave trash and try to consume water responsibly, as it is an extremely scarce resource in the area.

Come and discover the silence of the Sahara with us!
        `,
        category: 'naturaleza',
        category_es: 'Naturaleza',
        category_en: 'Nature',
        image: '/images/merzouga/merzouga1.jpg',
        read_time: 8,
        date: '2026-01-15',
        author: 'Aventuras con Esencia',
    },
};

interface PageProps {
    lang?: 'es' | 'en';
    slug?: string;
}

export default function BlogPostPage(props: PageProps) {
    const lang = props.lang || 'es';
    const t = (es: string, en: string) => (lang === 'es' ? es : en);

    const slug = props.slug || 'mejores-epocas-visitar-marruecos';
    const post = blogPosts[slug] || blogPosts['mejores-epocas-visitar-marruecos'];

    return (
        <>
            <Head>
                <title>{t(post.title_es, post.title_en) + ' | Blog'}</title>
                <meta name="description" content={t(post.excerpt_es, post.excerpt_en)} />
            </Head>

            <Navbar lang={lang} />

            {/* Hero */}
            <section className="relative h-[50vh] min-h-[300px]">
                <img src={post.image} alt={t(post.title_es, post.title_en)} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 pb-16">
                    <div className="container-custom">
                        <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                            {t(post.category_es, post.category_en)}
                        </span>
                        <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">{t(post.title_es, post.title_en)}</h1>
                        <div className="mt-4 flex items-center gap-4 text-white/80">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>
                                {post.read_time} {t('minutos', 'minutes')}
                            </span>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl">
                        <article className="prose prose-lg prose-stone max-w-none">
                            <p className="lead text-xl text-text-secondary">{t(post.excerpt_es, post.excerpt_en)}</p>
                            <div className="whitespace-pre-wrap text-text-secondary">{t(post.content_es, post.content_en)}</div>
                        </article>

                        {/* Share */}
                        <div className="mt-12 border-t border-stone/20 pt-8">
                            <h3 className="mb-4 font-heading text-lg font-semibold">{t('Compartir este artículo', 'Share this article')}</h3>
                            <div className="flex gap-3">
                                <button className="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary/90">Facebook</button>
                                <button className="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary/90">Twitter</button>
                                <button className="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary/90">WhatsApp</button>
                            </div>
                        </div>

                        {/* Back to blog */}
                        <div className="mt-8">
                            <Link href="/blog" className="text-primary hover:underline">
                                ← {t('Volver al blog', 'Back to blog')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="mb-8 font-heading text-2xl font-bold">{t('Artículos relacionados', 'Related articles')}</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {Object.values(blogPosts)
                            .filter((p) => p.slug !== slug)
                            .slice(0, 3)
                            .map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group overflow-hidden rounded-xl bg-cream shadow-md"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={t(relatedPost.title_es, relatedPost.title_en)}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-heading text-lg font-semibold">{t(relatedPost.title_es, relatedPost.title_en)}</h3>
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
