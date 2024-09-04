<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function Gender(){
        return $this->belongsTo(Gender::class);
    }
    public function GraduationYear(){
        return $this->belongsTo(GraduationYear::class);
    }
    public function Status(){
        return $this->belongsTo(Status::class);
    }
    public function Vocation(){
        return $this->belongsTo(Vocation::class);
    }


}
