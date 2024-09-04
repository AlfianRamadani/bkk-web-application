<?php

namespace App\Http\Controllers;

use App\Models\JobType;
use Illuminate\Http\Request;

class JobTypeController extends Controller
{
    public function __invoke(){
        $locations = JobType::get(['id', 'location_name']);

        return response()->json([
            'status' => 'success',
            [
                'locations' => $locations,
            ]
        ]);
    }
}
