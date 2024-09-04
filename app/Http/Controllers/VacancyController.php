<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Response;

class VacancyController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $vacancy = Vacancy::with([
            'Company:id,company_name,contact,email,address',
            'Location:id,location_name',
            'JobType:id,job_type_name',
            'Experience:id,experience_name',
            'SalaryRange:id,range',
            'Industry:id,name'
        ])
        // ->select('id', 'title', 'description', 'created_at',
        //  'company_id', 'location_id', 'type_id', 'experience_id', 'salary_id', 'profil_img', 'industry_id')

        ->orderBy('created_at', 'desc')
            ->get();

        // $companyTotal = Company::where('', $vacancy->id)->count();

        return response()->json([
            'status' => 'success',
            'data' => $vacancy


        ]);

    }
}
