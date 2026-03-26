<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Services\ContactService;

class ContactController extends Controller
{
    public function __construct(
        protected ContactService $contactService,
    ) {}

    public function store(StoreContactRequest $request)
    {
        $contactMessage = $this->contactService->createMessage([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        return response()->json(['message' => 'Contact message received successfully!', 'id' => $contactMessage->id]);
    }
}
