<?php

namespace App\Services;

use App\Models\ContactMessage;

class ContactService
{
    public function createMessage(array $data): ContactMessage
    {
        return ContactMessage::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'subject' => $data['subject'] ?? null,
            'message' => $data['message'],
            'is_read' => false,
        ]);
    }

    public function markAsRead(ContactMessage $message): ContactMessage
    {
        $message->update(['is_read' => true]);

        return $message->fresh();
    }

    public function markAsUnread(ContactMessage $message): ContactMessage
    {
        $message->update(['is_read' => false]);

        return $message->fresh();
    }

    public function getUnreadCount(): int
    {
        return ContactMessage::where('is_read', false)->count();
    }

    public function getRecentMessages(int $limit = 10): \Illuminate\Database\Eloquent\Collection
    {
        return ContactMessage::latest()->limit($limit)->get();
    }
}
