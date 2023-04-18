<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rezultat extends Model
{
    use HasFactory;

    public function izbor()
    {
        return $this->belongsTo(Izbor::class);
    }
}
