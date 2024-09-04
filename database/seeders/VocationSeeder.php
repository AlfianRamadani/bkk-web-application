<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('vocations')->insert([
            [
                'vocation_name' => 'Rekayasa Perangkat Lunak',
            ],
            [
                'vocation_name' => 'Akuntansi dan Keuangan Lembaga',
            ],
            [
                'vocation_name' => 'Perbankan dan Keuangan Mikro
',
            ],
            [
                'vocation_name' => 'Bisnis Daring dan Pemasaran
',
            ],
            [
                'vocation_name' => 'Otomatisasi dan Tata Kelola Perkantoran
',
            ],
            [
                'vocation_name' => 'Teknik Komputer dan Jaringan
',
            ],
            [
                'vocation_name' => 'Multimedia
',
            ],

        ]);
    }
}
