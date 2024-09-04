<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            IndustriesSeeder::class,
                        LocationsSeeder::class,
VocationSeeder::class,
            ExperiencesSeeder::class,
            SalaryRangesSeeder::class,
            CompaniesSeeder::class,
            GendersSeeder::class,
            GraduationYearsSeeder::class,
            JobTypesSeeder::class,
            VacanciesSeeder::class,
            FiltersSeeder::class,
            StatusesSeeder::class,
            AlumniSeeder::class,
        ]);
    }
}
