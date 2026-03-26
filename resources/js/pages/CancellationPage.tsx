import { Head } from '@inertiajs/react';
import React from 'react';

export default function CancellationPage() {
  return (
    <>
      <Head title="Cancellation Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cancellation Policy</h1>
        <p className="mb-4">
          At Aventura con Esencia, we understand that plans can change. This Cancellation Policy outlines the terms
          and conditions for cancelling bookings made through our website.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Booking Cancellation</h2>
        <p className="mb-4">
          You may cancel your booking within [Number] days of purchase for a full refund, provided the cancellation
          is made at least [Number] days before the scheduled experience date.
        </p>
        <p className="mb-4">
          Cancellations made after this period or closer to the experience date may be subject to a partial refund or no refund,
          depending on the specific terms of the experience and our partners' policies.
        </p>
        <h2 className="text-2xl font-semibold mb-3">How to Cancel</h2>
        <p className="mb-4">
          To cancel a booking, please contact our customer service team at [email address] or [phone number] with
          your booking details.
        </p>
        {/* More cancellation policy details could be added here */}
      </div>
    </>
  );
}
