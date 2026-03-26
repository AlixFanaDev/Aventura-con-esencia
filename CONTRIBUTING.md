# Contributing to Aventura

Thank you for your interest in contributing to Aventura! This guide will help you get started with development and contributions.

## 🚀 Development Setup

### 1. Fork & Clone

```bash
git clone https://github.com/your-username/aventura.git
cd aventura
```

### 2. Install Dependencies

```bash
composer install
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
```

### 4. Start Development Servers

```bash
# All services in one command
composer run dev

# Or manually in separate terminals:
php artisan serve          # Terminal 1
npm run dev               # Terminal 2
php artisan queue:listen  # Terminal 3 (optional)
```

## 📋 Before You Start

### Code Standards

We follow strict code quality standards:

- **PHP**: PSR-12 (enforced by Laravel Pint)
- **JavaScript/TypeScript**: ESLint & Prettier
- **TypeScript**: Strict mode enabled (no `any` types)

### Running Quality Checks

```bash
# Fix all code style issues
composer run lint && npm run lint

# Check formatting without fixing
npm run format:check

# Type checking
npm run types
```

## 🔄 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/descriptive-name
```

Branch naming conventions:
- `feature/add-booking-notifications`
- `fix/payment-validation-bug`
- `docs/update-setup-guide`
- `refactor/optimize-experience-queries`

### 2. Make Your Changes

**Frontend (React/TypeScript)**
- Keep components small and focused
- Use existing components when possible
- Check `resources/js/components/` for UI components
- Follow TypeScript best practices (use proper types)

**Backend (Laravel/PHP)**
- Use Service Layer for business logic
- Add proper type hints
- Write migrations for database changes
- Use Eloquent relationships
- Add validation in Form Request classes

### 3. Write Tests

**Before submitting**, write tests for your changes:

```bash
# Create a test file
php artisan make:test BookingNotificationTest

# Run tests
php artisan test

# Run specific test
php artisan test tests/Feature/BookingNotificationTest.php

# Watch mode (recommended)
php artisan test --watch
```

### Test Types

**Feature Tests** (`tests/Feature/`):
- Test full request/response cycles
- Include database interactions
- Verify user interactions work end-to-end

**Unit Tests** (`tests/Unit/`):
- Test individual classes/methods
- Mock dependencies
- Test business logic in isolation

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add booking notifications"
```

**Commit message format**:
```
<type>: <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test changes
- `chore`: Build, dependencies, etc.

**Example**:
```
feat: add email notifications for bookings

- Send confirmation email when booking created
- Send cancellation email when booking cancelled
- Add EmailNotification model
- Add BookingNotificationTest

Fixes #123
```

### 5. Push & Create Pull Request

```bash
git push origin feature/descriptive-name
```

Then create a PR on GitHub with:
- Clear description of changes
- Reference related issues (`Fixes #123`)
- Screenshots for UI changes
- Test results (copy output from `php artisan test`)

## 🧪 Testing Guidelines

### Write Meaningful Tests

```php
// ❌ Bad - unclear what's being tested
public function test_it_works(): void
{
    $this->assertTrue(true);
}

// ✅ Good - clear intention
public function test_booking_email_sent_when_created(): void
{
    Mail::fake();
    
    $booking = Booking::factory()->create();
    
    Mail::assertSent(BookingConfirmation::class);
}
```

### Test Coverage Requirements

- New features: 80%+ coverage
- Bug fixes: Test for the bug + fix
- Refactoring: No decrease in coverage
- Run coverage: `php artisan test --coverage`

## 🎨 Frontend Guidelines

### Component Structure

```tsx
// ✅ Good structure
import { ReactNode } from 'react';

interface BookingCardProps {
  id: string;
  title: string;
  price: number;
  onBook?: () => void;
}

export function BookingCard({ 
  id, 
  title, 
  price, 
  onBook 
}: BookingCardProps): ReactNode {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">${price}</p>
      {onBook && (
        <button 
          onClick={onBook}
          className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Book Now
        </button>
      )}
    </div>
  );
}
```

### Component Best Practices

- Use TypeScript interfaces for props
- Destructure props in function signature
- Explicit return type
- Use Tailwind classes (no custom CSS)
- Keep components under 200 lines
- Extract logic into custom hooks

### Styling with Tailwind

```tsx
// ❌ Avoid
<div style={{ 
  padding: '16px', 
  backgroundColor: 'rgb(59, 130, 246)',
  borderRadius: '8px'
}}>

// ✅ Use Tailwind
<div className="rounded-lg bg-blue-500 p-4">
```

## 🔧 Backend Guidelines

### Service Layer Pattern

```php
// ❌ Logic in controller
public function store(BookingRequest $request)
{
    $booking = Booking::create($request->validated());
    Mail::send(new BookingConfirmation($booking));
    return $booking;
}

// ✅ Use service layer
public function store(BookingRequest $request, BookingService $service)
{
    $booking = $service->createBooking($request->validated());
    return BookingResource::make($booking);
}
```

### Database Queries

```php
// ❌ N+1 queries
$bookings = Booking::all();
foreach ($bookings as $booking) {
    echo $booking->user->email; // Query per booking!
}

// ✅ Eager loading
$bookings = Booking::with('user')->get();
foreach ($bookings as $booking) {
    echo $booking->user->email; // No extra queries
}
```

### Type Hints

```php
// ✅ Always use type hints
public function createBooking(
    BookingRequest $request,
    BookingRepository $repository
): BookingResource {
    $data = $request->validated();
    $booking = $repository->create($data);
    return BookingResource::make($booking);
}
```

## 📝 Documentation

- Update README.md if adding features
- Add inline comments for complex logic
- Update .env.example for new config
- Include API documentation for endpoints
- Add JSDoc comments for functions

## 🚨 Common Issues & Solutions

### Tests Fail with "Unable to locate file in Vite manifest"

Build the frontend first:
```bash
npm run build
```

### TypeScript Errors

```bash
npm run types  # Check all errors
```

### Database Migration Issues

```bash
# Rollback and re-run
php artisan migrate:rollback
php artisan migrate
```

### Port Already in Use

```bash
# Laravel (default 8000)
php artisan serve --port=8001

# Vite (default 5173)
npm run dev -- --port=5174
```

## 🔍 Code Review Process

Your PR will be reviewed by maintainers:

1. **Automated Checks**: Tests, linting, types must pass
2. **Code Review**: We'll provide feedback or approve
3. **Merge**: Once approved, your changes will be merged!

### PR Checklist

- [ ] Tests written and passing
- [ ] Code follows style guidelines
- [ ] TypeScript types checked (`npm run types`)
- [ ] No console.logs or debug code
- [ ] Documentation updated
- [ ] Commit messages follow format
- [ ] Related issues referenced

## 🤔 Questions?

- Check existing issues: https://github.com/aventura/aventura/issues
- Read docs in README.md
- Review similar code in the codebase
- Ask in PR comments!

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Aventura! 🎉**

Every contribution makes this project better for everyone.
