<?php

test('contact page loads successfully', function () {
    $response = $this->get(route('contact'));

    $response->assertOk();
});

test('contact store creates a new contact message', function () {
    $contactData = [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'subject' => 'Test Subject',
        'message' => 'This is a test message from the contact form.',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertStatus(200)
        ->assertJsonStructure(['message', 'id']);

    $this->assertDatabaseHas('contact_messages', [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'subject' => 'Test Subject',
    ]);
});

test('contact store validation fails with missing required fields', function () {
    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('contact.store'), []);

    $response->assertStatus(422);
});

test('contact store validation fails with invalid email', function () {
    $contactData = [
        'name' => 'Jane Doe',
        'email' => 'invalid-email',
        'message' => 'Test message',
    ];

    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('contact.store'), $contactData);

    $response->assertStatus(422);
});

test('contact store works without subject', function () {
    $contactData = [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'message' => 'This is a test message without subject.',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertStatus(200);

    $this->assertDatabaseHas('contact_messages', [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'subject' => null,
    ]);
});
