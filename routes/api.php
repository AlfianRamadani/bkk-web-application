<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\CountController;
use App\Http\Controllers\FilterController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\JobTypeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\StatisticDataController;
use App\Http\Controllers\TopCompanyController;
use App\Http\Controllers\VacancyController;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('v1/vacancy', VacancyController::class)->name('Vacany');
Route::get('v1/alumni', AlumniController::class)->name('Alumni');
Route::get('v1/location', LocationController::class)->name('Location');
Route::get('v1/vacancy/{id}', [VacancyController::class, 'show'])->name('Vacancy.show');
Route::get('v1/job-type', JobTypeController::class)->name('JobType');
Route::get('v1/filter', FilterController::class)->name('Filter');
Route::get('v1/statistic-data', StatisticDataController::class);
Route::get('v1/top-company', TopCompanyController::class)->name('top_company');
Route::get('v1/industry', IndustryController::class)->name('industry');
Route::get('v1/count', CountController::class)->name('count');

