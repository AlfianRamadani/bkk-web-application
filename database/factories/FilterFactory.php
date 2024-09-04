<?php

namespace Database\Factories;

use App\Models\Experience;
use App\Models\Job;
use App\Models\JobType;
use App\Models\Location;
use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Filter>
 */
class FilterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'vacancy_id' => Vacancy::inRandomOrder()->first()->id,
            'location_id' => Location::inRandomOrder()->first()->id,
            'job_type_id' => JobType::inRandomOrder()->first()->id,
            'experience_id' => Experience::inRandomOrder()->first()->id,
        ];
    }
}
