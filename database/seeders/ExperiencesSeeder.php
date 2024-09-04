<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperiencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('experiences')->insert([
            ['experience_name' => 'Junior'],
            ['experience_name' => 'Mid-Level'],
            ['experience_name' => 'Senior'],
        ]);
    }
}
