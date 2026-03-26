<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Experience extends Model
{
    protected $fillable = [
        'slug',
        'title_es',
        'title_en',
        'description_es',
        'description_en',
        'category_id',
        'destination_id',
        'difficulty',
        'duration_days',
        'price_from_usd',
        'rating',
        'reviews_count',
        'badge_es',
        'badge_en',
        'badge_color',
        'image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'price_from_usd' => 'decimal:2',
        'rating' => 'decimal:1',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }
}
