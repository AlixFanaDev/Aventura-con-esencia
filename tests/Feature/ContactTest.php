<?php

test('contact page loads successfully', function () {
    $response = $this->get(route('contact'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('ContactPage')
        ->has('flash')
    );
});

test('contact store creates a new contact message and returns redirect with flash', function () {
    $contactData = [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'phone' => '+1234567890',
        'experience' => 'desierto',
        'message' => 'This is a test message from the contact form.',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    $this->assertDatabaseHas('contact_messages', [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
    ]);
});

test('contact store validation fails with missing required fields', function () {
    $response = $this->post(route('contact.store'), []);

    $response->assertSessionHasErrors(['name', 'email', 'message']);
});

test('contact store validation fails with invalid email', function () {
    $contactData = [
        'name' => 'Jane Doe',
        'email' => 'invalid-email',
        'message' => 'Test message',
        'experience' => 'general',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertSessionHasErrors('email');
});

test('contact store works without subject', function () {
    $contactData = [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'message' => 'This is a test message without subject.',
        'experience' => 'general',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertRedirect();

    $this->assertDatabaseHas('contact_messages', [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
    ]);
});
