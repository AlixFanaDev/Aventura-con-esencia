<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsletterRequest;
use App\Http\Requests\UnsubscribeNewsletterRequest;
use App\Services\NewsletterService;

class NewsletterController extends Controller
{
    public function __construct(
        protected NewsletterService $newsletterService,
    ) {}

    public function subscribe(StoreNewsletterRequest $request)
    {
        $this->newsletterService->subscribe([
            'email' => $request->email,
            'name' => $request->name,
        ]);

        return back()->with('success', 'Successfully subscribed to newsletter!');
    }

    public function unsubscribe(UnsubscribeNewsletterRequest $request)
    {
        $this->newsletterService->unsubscribe($request->email);

        return back()->with('success', 'Successfully unsubscribed from newsletter.');
    }
}
