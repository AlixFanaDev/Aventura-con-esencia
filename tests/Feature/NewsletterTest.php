<?php

use App\Models\NewsletterSubscriber;

test('newsletter subscribe creates a new subscriber and returns redirect with flash', function () {
    $subscriberData = [
        'email' => 'newsubscriber@example.com',
        'name' => 'New Subscriber',
    ];

    $response = $this->post(route('newsletter.subscribe'), $subscriberData);

    $response->assertRedirect();
    $response->assertSessionHas('success');

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

    $response = $this->post(route('newsletter.subscribe'), $subscriberData);

    $response->assertSessionHasErrors('email');
});

test('newsletter subscribe fails with duplicate email', function () {
    NewsletterSubscriber::create([
        'email' => 'existing@example.com',
    ]);

    $subscriberData = [
        'email' => 'existing@example.com',
    ];

    $response = $this->post(route('newsletter.subscribe'), $subscriberData);

    $response->assertSessionHasErrors();
});

test('newsletter unsubscribe route exists and returns redirect with flash', function () {
    NewsletterSubscriber::create([
        'email' => 'test@example.com',
    ]);

    $response = $this->post(route('newsletter.unsubscribe'), ['email' => 'test@example.com']);

    $response->assertRedirect();
    $response->assertSessionHas('success');
});
