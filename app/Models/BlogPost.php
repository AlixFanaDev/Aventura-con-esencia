<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $fillable = [
        'slug',
        'title_es',
        'title_en',
        'excerpt_es',
        'excerpt_en',
        'content_es',
        'content_en',
        'image',
        'author',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];
}
