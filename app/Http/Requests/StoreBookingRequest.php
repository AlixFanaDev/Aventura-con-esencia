<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'experience' => 'required|string',
            'date' => 'required|date',
            'participants' => 'required|integer|min:1',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'notes' => 'nullable|string|max:1000',
        ];
    }

    public function messages(): array
    {
        return [
            'experience.required' => 'Please select an experience.',
            'date.required' => 'Please select a date.',
            'date.date' => 'Please provide a valid date.',
            'participants.required' => 'Please specify the number of participants.',
            'participants.min' => 'At least one participant is required.',
            'name.required' => 'Please provide your name.',
            'email.required' => 'Please provide your email address.',
            'email.email' => 'Please provide a valid email address.',
            'phone.required' => 'Please provide your phone number.',
        ];
    }
}
