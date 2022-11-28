<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','location','phone','mail','desc'
    ];

    public function medicines(){
        return $this->hasMany(Medicine::class);
    }

    public function user(){
        return $this->hasOne(User::class);
    }
}
