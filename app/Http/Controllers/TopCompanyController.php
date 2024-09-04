<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class TopCompanyController extends Controller
{
    public function __invoke(){
        $top_company = Company::has('Vacancy')->withCount('Vacancy')->inRandomOrder()->limit(15)->get();

    return response()->json([
        'status' => 'success',
        'data' => $top_company
    ]);
    }
}
