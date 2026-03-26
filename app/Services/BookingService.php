<?php

namespace App\Services;

use App\Models\Booking;
use Illuminate\Support\Str;

class BookingService
{
    public function generateBookingCode(): string
    {
        return 'AV-'.strtoupper(Str::random(8));
    }

    public function createBooking(array $data): Booking
    {
        $booking = Booking::create([
            'experience_id' => $data['experience_id'],
            'date' => $data['date'],
            'num_travelers' => $data['num_travelers'],
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'notes' => $data['notes'] ?? null,
            'status' => 'pending',
            'booking_code' => $this->generateBookingCode(),
        ]);

        return $booking;
    }

    public function updateBookingStatus(Booking $booking, string $status): Booking
    {
        $validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];

        if (! in_array($status, $validStatuses)) {
            throw new \InvalidArgumentException("Invalid status: {$status}");
        }

        $booking->update(['status' => $status]);

        return $booking->fresh();
    }

    public function assignGuide(Booking $booking, int $guideId): Booking
    {
        $booking->update(['guide_id' => $guideId]);

        return $booking->fresh();
    }
}
