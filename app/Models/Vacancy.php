<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;
    protected $guarded = [
        'id'
    ];

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i:s',
    ];

    public function Industry(){
        return $this->belongsTo(Industry::class);
    }
    public function Company(){
        return $this->belongsTo(Company::class);
    }
    public function Location(){
        return $this->belongsTo(Location::class);
    }
    public function JobType(){
        return $this->belongsTo(JobType::class, 'type_id');
    }
    public function Experience(){
        return $this->belongsTo(Experience::class);
    }
    public function SalaryRange(){
        return $this->belongsTo(SalaryRange::class, 'salary_id');
    }



}
