<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = [
        'slug',
        'name_es',
        'name_en',
        'icon',
    ];

    public function experiences(): HasMany
    {
        return $this->hasMany(Experience::class);
    }
}
