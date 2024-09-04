<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GendersSeeder extends Seeder
{
    public function run()
    {
        DB::table('genders')->insert([
            ['gender_name' => 'Male'],
            ['gender_name' => 'Female'],
        ]);
    }
}
