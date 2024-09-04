<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use Illuminate\Http\Request;

class IndustryController extends Controller
{
    public function __invoke(){

        $industry = Industry::has('Vacancy')->withCount('Vacancy')->orderBy('vacancy_count', 'desc')->limit(15)->get();
        return response()->json([
            'status' => 'success',
            'data' => $industry
        ]);
    }
}
