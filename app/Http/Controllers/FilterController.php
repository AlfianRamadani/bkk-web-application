<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\JobType;
use App\Models\Location;
use App\Models\SalaryRange;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function __invoke(){
        $locations = Location::get(['id', 'location_name']);
        $job_type = JobType::get(['id', 'job_type_name']);
        $experience = Experience::get(['id', 'experience_name']);
        $salary_range = SalaryRange::get(['id', 'range']);

        return response()->json([
            'status' => 'success',
            "data" => [
                'locations' => $locations,
                'job_type' => $job_type,
                'experience' => $experience,
                'salary_range' => $salary_range,
            ]   
        ]);
    }
}
