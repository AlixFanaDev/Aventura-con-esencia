<?php

use App\Models\NewsletterSubscriber;

test('newsletter subscribe creates a new subscriber', function () {
    $subscriberData = [
        'email' => 'newsubscriber@example.com',
        'name' => 'New Subscriber',
    ];

    $response = $this->post(route('newsletter.subscribe'), $subscriberData);

    $response->assertStatus(200)
        ->assertJsonStructure(['message']);

    $this->assertDatabaseHas('newsletter_subscribers', [
        'email' => 'newsubscriber@example.com',
        'name' => 'New Subscriber',
        'is_active' => true,
    ]);
});

test('newsletter subscribe validation fails with invalid email', function () {
    $subscriberData = [
        'email' => 'invalid-email',
    ];

    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('newsletter.subscribe'), $subscriberData);

    $response->assertStatus(422);
});

test('newsletter subscribe fails with duplicate email', function () {
    NewsletterSubscriber::create([
        'email' => 'existing@example.com',
    ]);

    $subscriberData = [
        'email' => 'existing@example.com',
    ];

    $response = $this->withHeaders(['Accept' => 'application/json'])
        ->post(route('newsletter.subscribe'), $subscriberData);

    $response->assertStatus(422);
});

test('newsletter unsubscribe route exists', function () {
    $response = $this->post(route('newsletter.unsubscribe'), ['email' => 'test@example.com']);

    $response->assertStatus(302);
});
