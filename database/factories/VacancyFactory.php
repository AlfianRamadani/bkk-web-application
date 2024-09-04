<?php

namespace Database\Factories;

use App\Models\Industry;
use App\Models\Job;
use App\Models\Company;
use App\Models\Location;
use App\Models\JobType;
use App\Models\Experience;
use App\Models\SalaryRange;
use Database\Seeders\IndustriesSeeder;
use Illuminate\Database\Eloquent\Factories\Factory;

class VacancyFactory extends Factory
{

    public function definition()
    {
        return [
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->text,
            'profil_img' => $this->faker->imageUrl(),
            'requirement' => $this->faker->text,
            'application_link' => $this->faker->url,
            'benefit' => $this->faker->text,
            'number_of_hires' => $this->faker->numberBetween(1, 10),
            'job_tags' => $this->faker->words(3, true),
            'work_model' => $this->faker->randomElement(['remote', 'on-site']),
            'company_id' => Company::inRandomOrder()->first('id'),
            'location_id' => Location::inRandomOrder()->first('id'),
            'type_id' => JobType::inRandomOrder()->first('id'),
            'experience_id' => Experience::inRandomOrder()->first('id'),
            'created_at' => $this->faker->dateTimeBetween('2024-01-01', '2024-12-30')->format('Y-m-d H:i:s'),
            'updated_at' => now(),
            'salary_id' => SalaryRange::inRandomOrder()->first('id'),
'close_at' => $this->faker->dateTimeBetween('2023-01-01', '2025-12-31')->format('Y-m-d H:i:s'),
            'industry_id' => Industry::inRandomOrder()->first('id')
        ];
    }
}
