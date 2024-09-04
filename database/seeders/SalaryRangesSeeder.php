<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalaryRangesSeeder extends Seeder
{
    public function run()
    {
        DB::table('salary_ranges')->insert([
            ['range' => 5000000],
            ['range' => 6000000],
            ['range' => 7000000],
        ]);
    }
}
