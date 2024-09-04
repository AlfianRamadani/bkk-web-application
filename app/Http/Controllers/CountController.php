<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CountController extends Controller
{
    public function __invoke(){
        $count = [
            'vacancy' => \App\Models\Vacancy::count(),
            'company' => \App\Models\Company::count(),
            'alumni' => \App\Models\Alumni::count(),
            'industry' => \App\Models\Industry::count(),
        ];
        return response()->json([
            'status' => 'success',
            'data' => $count
        ]);

        
        }
    }
