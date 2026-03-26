<?php

namespace App\Filament\Resources\Bookings\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class BookingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(),
                TextInput::make('email')->email()->required(),
                TextInput::make('phone')->required(),
                TextInput::make('experience_id')->label('Experience ID')->required(),
                DatePicker::make('date')->required(),
                TextInput::make('num_travelers')->label('Number of Travelers')->numeric()->required(),
                Textarea::make('notes')->nullable(),
            ]);
    }
}
