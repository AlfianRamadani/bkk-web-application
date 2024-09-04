<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status;
class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("statuses")->insert([
            ['status_name' => "Menganggur"],
            ['status_name' => "Bekerja"],
            ['status_name' => "Melanjutkan Studi"],
        ]);
        
    }
}
