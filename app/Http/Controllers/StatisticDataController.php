<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatisticDataController extends Controller
{
    public function __invoke(){
        return response()->json(
            [
                // $totalVacancy = Vacancy::where();
                'status' => "success",
                'data' => $data
            ]

                );
    }
}
