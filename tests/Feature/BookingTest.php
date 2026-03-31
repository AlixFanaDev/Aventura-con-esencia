<?php

test('booking page loads successfully', function () {
    $response = $this->get(route('booking'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('BookingPage')
        ->has('flash')
    );
});

test('booking store creates a new booking and returns redirect with flash', function () {
    $bookingData = [
        'experience' => 'trekking-atlas',
        'date' => '2026-03-15',
        'participants' => 2,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '+1234567890',
        'notes' => 'Test booking notes',
    ];

    $response = $this->post(route('booking.store'), $bookingData);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    $this->assertDatabaseHas('bookings', [
        'experience_id' => 'trekking-atlas',
        'num_travelers' => 2,
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ]);
});

test('booking store validation fails with missing required fields', function () {
    $response = $this->post(route('booking.store'), []);

    $response->assertSessionHasErrors(['experience', 'date', 'participants', 'name', 'email', 'phone']);
});

test('booking store validation fails with invalid email', function () {
    $bookingData = [
        'experience' => 'trekking-atlas',
        'date' => '2026-03-15',
        'participants' => 2,
        'name' => 'John Doe',
        'email' => 'invalid-email',
        'phone' => '+1234567890',
    ];

    $response = $this->post(route('booking.store'), $bookingData);

    $response->assertSessionHasErrors('email');
});

test('booking store validation fails with invalid participants', function () {
    $bookingData = [
        'experience' => 'trekking-atlas',
        'date' => '2026-03-15',
        'participants' => 0,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '+1234567890',
    ];

    $response = $this->post(route('booking.store'), $bookingData);

    $response->assertSessionHasErrors('participants');
});
