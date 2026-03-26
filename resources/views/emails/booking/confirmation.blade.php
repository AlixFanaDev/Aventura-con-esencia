<x-mail::message>
# Booking Confirmation

Hello {{ $booking->name }},

Thank you for your booking with Aventura con Esencia!

Here are your booking details:

- **Experience:** {{ $booking->experience_id }}
- **Date:** {{ $booking->date }}
- **Number of Travelers:** {{ $booking->num_travelers }}
- **Email:** {{ $booking->email }}
- **Phone:** {{ $booking->phone }}
@if ($booking->notes)
- **Additional Notes:** {{ $booking->notes }}
@endif

We look forward to seeing you!

<x-mail::button :url="url('/')">
Visit Our Website
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>