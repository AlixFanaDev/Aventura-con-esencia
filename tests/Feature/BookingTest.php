<?php

test('booking page loads successfully', function () {
    $response = $this->get(route('booking'));

    $response->assertOk();
});

test('booking store creates a new booking', function () {
    $this->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);

    $bookingData = [
        'experience' => '1',
        'date' => '2026-03-15',
        'participants' => 2,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '+1234567890',
        'notes' => 'Test booking notes',
    ];

    $response = $this->post(route('booking.store'), $bookingData);

    $response->assertStatus(200)
        ->assertJsonStructure(['message', 'booking']);

    $this->assertDatabaseHas('bookings', [
        'experience_id' => '1',
        'num_travelers' => 2,
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ]);
});

test('booking store validation fails with missing required fields', function () {
    $this->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);

    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('booking.store'), []);

    $response->assertStatus(422);
});

test('booking store validation fails with invalid email', function () {
    $this->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);

    $bookingData = [
        'experience' => '1',
        'date' => '2026-03-15',
        'participants' => 2,
        'name' => 'John Doe',
        'email' => 'invalid-email',
        'phone' => '+1234567890',
    ];

    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('booking.store'), $bookingData);

    $response->assertStatus(422);
});

test('booking store validation fails with invalid participants', function () {
    $this->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);

    $bookingData = [
        'experience' => '1',
        'date' => '2026-03-15',
        'participants' => 0,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '+1234567890',
    ];

    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('booking.store'), $bookingData);

    $response->assertStatus(422);
});
