<?php
namespace App\Http\Controllers;

use App\Models\Alumni;
use Illuminate\Http\Request;

class AlumniController extends Controller
{
    public function __invoke()
    {

        $alumni = Alumni::with(["Gender", "GraduationYear", 'Status', 'Vocation'])
        ->join('graduation_years', 'alumnis.graduation_year_id', '=', 'graduation_years.id')
        ->join('vocations', 'alumnis.vocation_id','=','vocations.id')
        ->select('alumnis.*', 'graduation_years.year as graduation_year', 'vocations.vocation_name as vocation_name')
        ->orderBy('graduation_year', 'desc')
        ->orderBy('vocation_name','asc')
        ->orderBy('name', 'asc')
        ->get();


        return response()->json([
            'status' => 'success',
            'data' => [
                'alumni' => $alumni
            ]
        ]);
    }
}
