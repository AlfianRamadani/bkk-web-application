<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function __invoke(){
        $locations = Location::get(['id', 'location_name']);
        
        return response()->json([
            'status' => 'success',
            [
                'locations' => $locations,

            ]
        ]);
    }
}
