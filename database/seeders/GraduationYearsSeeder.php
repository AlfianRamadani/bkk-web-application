<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GraduationYearsSeeder extends Seeder
{
    public function run()
    {
        DB::table('graduation_years')->insert([
            ['year' => '2020'],
            ['year' => '2021'],
            ['year' => '2022'],
        ]);
    }
}
