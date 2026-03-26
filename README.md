# Aventura - Travel & Experience Booking Platform

A modern full-stack web application for managing travel experiences, bookings, and customer communications.

## 🎯 Features

- **Experience Management**: Browse and manage adventure experiences with detailed information
- **Booking System**: Complete booking flow with customer management
- **Admin Dashboard**: Filament-based admin panel for managing experiences, bookings, and messages
- **Newsletter**: Email subscription management for marketing communications
- **Contact Management**: Customer inquiry handling and tracking
- **Responsive Design**: Mobile-first interface with Tailwind CSS v4
- **Modern Stack**: React 19, Laravel 12, Inertia.js v2

## 🛠️ Tech Stack

### Backend
- **PHP**: 8.2+
- **Laravel**: 12.x
- **Filament**: 4.x (Admin panel)
- **Inertia.js**: 2.x (Full-stack framework)
- **Sanctum**: 4.x (API authentication)
- **Pest**: 4.x (Testing framework)

### Frontend
- **React**: 19.x
- **TypeScript**: 5.7+
- **Tailwind CSS**: 4.x
- **Vite**: 7.x (Build tool)
- **ESLint**: 9.x (Linting)
- **Prettier**: 3.x (Code formatting)

## 📋 Prerequisites

- PHP 8.2 or higher
- Node.js 18+ and npm
- SQLite (default) or MySQL/PostgreSQL
- Composer 2.x
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd aventura
```

### 2. Install Dependencies

```bash
# Backend dependencies
composer install

# Frontend dependencies
npm install
```

### 3. Environment Setup

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Create SQLite database (or configure MySQL/PostgreSQL in .env)
touch database/database.sqlite
```

### 4. Database Setup

```bash
# Run migrations
php artisan migrate

# (Optional) Seed with sample data
php artisan db:seed
```

### 5. Build Frontend Assets

```bash
# Development build with watch
npm run dev

# Or production build
npm run build
```

### 6. Start Development Server

**Option A: Concurrent Services** (Recommended)
```bash
composer run dev
```
This starts:
- Laravel server (port 8000)
- Queue listener
- Vite dev server (port 5173)
- Log viewer

**Option B: Individual Services**
```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite dev server
npm run dev

# Terminal 3: Queue listener (if using jobs)
php artisan queue:listen
```

Visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
aventura/
├── app/                           # Application code
│   ├── Filament/                 # Admin panel resources
│   ├── Http/
│   │   ├── Controllers/          # API & page controllers
│   │   └── Middleware/           # Request middleware
│   ├── Models/                   # Eloquent models
│   ├── Providers/                # Service providers
│   └── ...
├── resources/
│   ├── js/                       # React components & pages
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Inertia page components
│   │   ├── lib/                  # Utilities & helpers
│   │   └── types/                # TypeScript type definitions
│   ├── views/                    # Blade templates (minimal, mostly Inertia)
│   └── css/                      # Global styles (Tailwind)
├── routes/                       # Route definitions
│   ├── api.php                  # API routes
│   └── web.php                  # Web routes
├── database/
│   ├── migrations/              # Database schema changes
│   ├── factories/               # Model factories for testing
│   └── seeders/                 # Database seeders
├── tests/
│   ├── Feature/                 # Feature tests
│   └── Unit/                    # Unit tests
├── .github/
│   └── workflows/               # GitHub Actions CI/CD
├── config/                      # Laravel configuration
├── bootstrap/                   # Laravel bootstrap files
├── public/                      # Static assets
├── storage/                     # Cache, logs, uploads
├── vendor/                      # Composer dependencies
└── node_modules/               # npm dependencies
```

