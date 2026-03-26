<?php

namespace App\Services;

use App\Models\NewsletterSubscriber;

class NewsletterService
{
    public function subscribe(array $data): NewsletterSubscriber
    {
        return NewsletterSubscriber::create([
            'email' => $data['email'],
            'name' => $data['name'] ?? null,
            'is_active' => true,
        ]);
    }

    public function unsubscribe(string $email): bool
    {
        $subscriber = NewsletterSubscriber::where('email', $email)->first();

        if (! $subscriber) {
            return false;
        }

        $subscriber->update(['is_active' => false]);

        return true;
    }

    public function isSubscribed(string $email): bool
    {
        return NewsletterSubscriber::where('email', $email)
            ->where('is_active', true)
            ->exists();
    }

    public function getActiveSubscribers(): \Illuminate\Database\Eloquent\Collection
    {
        return NewsletterSubscriber::where('is_active', true)->get();
    }
}
