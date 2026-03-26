<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

Route::get('/experiencias', function () {
    return Inertia::render('ExperiencesPage');
})->name('experiences');

Route::get('/experiencias/{experience}', function ($experience) {
    return Inertia::render('ExperienceDetailPage', ['experience' => $experience]);
})->name('experience.detail');

Route::get('/experiencias/categoria/{category}', function ($category) {
    return Inertia::render('ExperienceCategoryPage', ['category' => $category]);
})->name('experience.category');

Route::get('/destinos', function () {
    return Inertia::render('DestinationsPage');
})->name('destinations');

Route::get('/destinos/{city}', function ($city) {
    return Inertia::render('DestinationDetailPage', ['city' => $city]);
})->name('destination.detail');

Route::get('/nosotros', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/blog', function () {
    return Inertia::render('BlogPage');
})->name('blog');

Route::get('/blog/{slug}', function ($slug) {
    return Inertia::render('BlogPostPage', ['slug' => $slug]);
})->name('blog.post');

Route::get('/contacto', function () {
    return Inertia::render('ContactPage');
})->name('contact');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/reservar', function () {
    return Inertia::render('BookingPage');
})->name('booking');

Route::get('/terminos', function () {
    return Inertia::render('TermsPage');
})->name('terms');

Route::get('/privacidad', function () {
    return Inertia::render('PrivacyPage');
})->name('privacy');

Route::get('/cookies', function () {
    return Inertia::render('CookiesPage');
})->name('cookies');

Route::get('/cancelacion', function () {
    return Inertia::render('CancellationPage');
})->name('cancellation');

Route::post('/booking', [BookingController::class, 'store'])->name('booking.store');

Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');

Route::post('/newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe'])->name('newsletter.unsubscribe');

Route::get('/sitemap.xml', function () {
    $urls = [
        ['loc' => route('home'), 'changefreq' => 'daily', 'priority' => '1.0'],
        ['loc' => route('experiences'), 'changefreq' => 'weekly', 'priority' => '0.9'],
        ['loc' => route('destinations'), 'changefreq' => 'weekly', 'priority' => '0.9'],
        ['loc' => route('blog'), 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['loc' => route('about'), 'changefreq' => 'monthly', 'priority' => '0.7'],
        ['loc' => route('contact'), 'changefreq' => 'monthly', 'priority' => '0.7'],
        ['loc' => route('booking'), 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['loc' => route('terms'), 'changefreq' => 'yearly', 'priority' => '0.3'],
        ['loc' => route('privacy'), 'changefreq' => 'yearly', 'priority' => '0.3'],
        ['loc' => route('cookies'), 'changefreq' => 'yearly', 'priority' => '0.3'],
        ['loc' => route('cancellation'), 'changefreq' => 'yearly', 'priority' => '0.3'],
    ];

    $xml = '<?xml version="1.0" encoding="UTF-8"?>'."\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n";

    foreach ($urls as $url) {
        $xml .= '  <url>'."\n";
        $xml .= '    <loc>'.$url['loc'].'</loc>'."\n";
        $xml .= '    <changefreq>'.$url['changefreq'].'</changefreq>'."\n";
        $xml .= '    <priority>'.$url['priority'].'</priority>'."\n";
        $xml .= '  </url>'."\n";
    }

    $xml .= '</urlset>';

    return response($xml, 200, ['Content-Type' => 'application/xml']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
