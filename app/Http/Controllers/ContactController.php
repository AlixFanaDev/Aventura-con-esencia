<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Services\ContactService;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function __construct(
        protected ContactService $contactService,
    ) {}

    public function store(StoreContactRequest $request)
    {
        $subject = $request->experience 
            ? 'Contact Request: ' . ucfirst($request->experience)
            : 'General Contact Request';

        $contactMessage = $this->contactService->createMessage([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $subject,
            'message' => $request->message,
        ]);

        return back()->with('success', 'Contact message received successfully!');
    }
}

