<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description_es',
        'description_en',
        'image',
    ];

    public function experiences(): HasMany
    {
        return $this->hasMany(Experience::class);
    }
}
