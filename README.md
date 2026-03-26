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

## 🧪 Testing

### Run All Tests

```bash
composer run test
```

### Run Specific Test Suite

```bash
# Feature tests only
php artisan test tests/Feature

# Unit tests only
php artisan test tests/Unit

# Single test file
php artisan test tests/Feature/BookingTest.php
```

### Watch Mode (Recommended for Development)

```bash
php artisan test --watch
```

### View Test Coverage

```bash
php artisan test --coverage
```

## 🔍 Code Quality

### Linting & Formatting

```bash
# Fix PHP code style
composer run lint

# Check PHP code style (without fixing)
composer run test:lint

# Format frontend code
npm run format

# Check frontend code formatting
npm run format:check

# Lint frontend code
npm run lint
```

### Type Checking

```bash
# TypeScript type checking
npm run types
```

## 🚢 Deployment

### Production Build

```bash
# Install production dependencies
composer install --no-dev --optimize-autoloader

# Build frontend assets
npm run build

# Generate optimized autoloader
composer dump-autoload --optimize

# Run migrations
php artisan migrate --force

# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Variables

Create a `.env` file in production with appropriate values. See `.env.example` for all available options.

**Critical variables**:
- `APP_KEY`: Generate with `php artisan key:generate`
- `APP_ENV`: Set to `production`
- `APP_DEBUG`: Must be `false`
- Database credentials
- Mail configuration

## 📚 API Documentation

The application uses Inertia.js for page loads but also provides API endpoints for data operations.

### Available Endpoints

**Bookings**:
- `GET /api/bookings` - List all bookings
- `POST /api/bookings` - Create a booking
- `GET /api/bookings/{id}` - Get booking details
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Cancel booking

**Experiences**:
- `GET /api/experiences` - List all experiences
- `GET /api/experiences/{slug}` - Get experience details

**Contact Messages**:
- `POST /api/contact` - Submit contact form

**Newsletter**:
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

See route files in `routes/` directory for complete API specifications.

## 🔐 Security Features

- **CSRF Protection**: Automatic CSRF token validation on POST requests
- **Authentication**: Sanctum for API token authentication
- **Authorization**: Policy-based authorization for resources
- **Input Validation**: Automatic request validation
- **SQL Injection Prevention**: Eloquent ORM with parameterized queries
- **XSS Prevention**: React's built-in escaping + Content Security Policy

## 🐛 Debugging

### View Application Logs

```bash
# Real-time log viewer
php artisan pail

# View recent logs
tail -f storage/logs/laravel.log
```

### Database Inspector

```bash
# Open Laravel Tinker
php artisan tinker

# Example: Query users
>>> User::all();
```

### Frontend Development

- React DevTools browser extension (Chrome/Firefox)
- Vite debug output in browser console
- Network tab for API calls

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test: `composer run test && npm run build`
3. Commit: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/your-feature`
5. Submit a pull request

## 📝 Code Conventions

### PHP (Laravel)

- Use PascalCase for class names
- Use camelCase for methods and properties
- Follow PSR-12 standard (enforced by Pint)
- Use type hints for all methods
- Example: `public function createBooking(BookingRequest $request): BookingResource`

### TypeScript/React

- Use PascalCase for component names
- Use camelCase for variables and functions
- Use descriptive variable names (e.g., `isRegisteredForDiscounts` not `discount()`)
- File naming: Components = `ComponentName.tsx`, utilities = `utilityName.ts`
- Check existing components before creating new ones

### CSS

- Use Tailwind utility classes (avoid custom CSS when possible)
- Use Tailwind's `@apply` for component styles when needed
- Follow mobile-first design approach
- Example: `className="px-4 py-2 md:px-6 md:py-4"`

## 📞 Support & Issues

If you encounter issues:

1. Check the logs: `php artisan pail`
2. Review GitHub issues: `<repository-url>/issues`
3. Check `.env.example` for configuration help
4. Run tests to verify setup: `composer run test`

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙏 Credits

Built with:
- [Laravel](https://laravel.com/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Filament](https://filamentphp.com/)
- [Inertia.js](https://inertiajs.com/)

---



