<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('job_types')->insert([
            ['job_type_name' => 'Full-Time'],
            ['job_type_name' => 'Part-Time'],
            ['job_type_name' => 'Contract'],
        ]);
    }
}
