<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookingRequest;
use App\Services\BookingService;
use App\Services\EmailService;

class BookingController extends Controller
{
    public function __construct(
        protected BookingService $bookingService,
        protected EmailService $emailService,
    ) {}

    public function store(StoreBookingRequest $request)
    {
        $booking = $this->bookingService->createBooking([
            'experience_id' => $request->experience,
            'date' => $request->date,
            'num_travelers' => $request->participants,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'notes' => $request->notes,
        ]);

        $this->emailService->sendBookingConfirmation($booking);

        return back()->with('success', 'Booking created successfully!');
    }
}
