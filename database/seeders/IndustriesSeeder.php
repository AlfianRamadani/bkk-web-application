<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndustriesSeeder extends Seeder
{
    public function run()
    {
        DB::table('industries')->insert([
            ['name' => 'Akuntansi'],
            ['name' => 'Administrasi & Dukungan Perkantoran'],
            ['name' => 'Arsitektur & Desain'],
            ['name' => 'Kesehatan'],
            ['name' => 'Hiburan'],
            ['name' => 'Teknologi Informasi'],
            ['name' => 'Keuangan & Perbankan'],
            ['name' => 'Manufaktur & Produksi'],
            ['name' => 'Energi & Sumber Daya Alam'],
            ['name' => 'E-commerce'],
            ['name' => 'Transportasi & Logistik'],
            ['name' => 'Pendidikan'],
            ['name' => 'Perhotelan & Restoran'],
            ['name' => 'Media & Komunikasi'],
            ['name' => 'Hukum'],
            ['name' => 'Pertanian & Agroindustri'],
            ['name' => 'Lingkungan & Pengelolaan Sumber Daya'],
            ['name' => 'Riset & Pengembangan'],
            ['name' => 'Penjualan'],
            ['name' => 'Customer Service'],
            ['name' => 'Teknik & Konstruksi'],
            ['name' => 'Logistik & Rantai Pasokan'],
            ['name' => 'Penelitian & Pengembangan'],
            ['name' => 'Desain Grafis'],
            ['name' => 'Bioteknologi'],
            ['name' => 'Keamanan Siber'],
            ['name' => 'Konsultasi'],
            ['name' => 'Periklanan'],
            ['name' => 'Event Management'],
        ]);
    }
}
