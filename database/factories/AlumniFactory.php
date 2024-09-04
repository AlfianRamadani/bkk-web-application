<?php

namespace Database\Factories;

use App\Models\Alumni;
use App\Models\Gender;
use App\Models\GraduationYear;
use App\Models\Status;
use App\Models\Vocation;
use Illuminate\Database\Eloquent\Factories\Factory;

class AlumniFactory extends Factory
{
    protected $model = Alumni::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'birthdate' => $this->faker->date(),
            'gender_id' => Gender::inRandomOrder()->first('id'),
            'address' => $this->faker->address,
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'vocation_id' => Vocation::inRandomOrder()->first('id'),
            'graduation_year_id' => GraduationYear::inRandomOrder()->first('id'),
            'status_id' => Status::inRandomOrder()->first('id'),
        ];
    }
}
