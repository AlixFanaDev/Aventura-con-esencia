<?php

namespace App\Filament\Resources\ContactMessages\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ContactMessageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(),
                TextInput::make('email')->email()->required(),
                TextInput::make('subject')->nullable(),
                Textarea::make('message')->required(),
                Checkbox::make('is_read')->label('Mark as read'),
            ]);
    }
}
