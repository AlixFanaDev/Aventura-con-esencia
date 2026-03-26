<?php

namespace App\Services;

use App\Mail\BookingConfirmation;
use App\Models\Booking;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EmailService
{
    public function sendBookingConfirmation(Booking $booking): void
    {
        try {
            Mail::to($booking->email)->send(new BookingConfirmation($booking));
        } catch (\Exception $e) {
            Log::error('Failed to send booking confirmation: '.$e->getMessage());
        }
    }

    public function sendContactAutoReply(string $toEmail, string $subject, string $content): void
    {
        try {
            Mail::raw($content, function ($message) use ($toEmail, $subject) {
                $message->to($toEmail)
                    ->subject($subject);
            });
        } catch (\Exception $e) {
            Log::error('Failed to send contact auto-reply: '.$e->getMessage());
        }
    }

    public function sendNewsletterWelcome(string $toEmail): void
    {
        try {
            Mail::raw('Welcome to our newsletter!', function ($message) use ($toEmail) {
                $message->to($toEmail)
                    ->subject('Welcome to Aventuras con Esencia!');
            });
        } catch (\Exception $e) {
            Log::error('Failed to send newsletter welcome: '.$e->getMessage());
        }
    }

    public function sendBulkNewsletter(array $emails, string $subject, string $content): int
    {
        $count = 0;
        foreach ($emails as $email) {
            try {
                Mail::raw($content, function ($message) use ($email, $subject) {
                    $message->to($email)
                        ->subject($subject);
                });
                $count++;
            } catch (\Exception $e) {
                Log::error("Failed to send newsletter to {$email}: ".$e->getMessage());
            }
        }

        return $count;
    }
}
