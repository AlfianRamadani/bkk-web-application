<?php

namespace Database\Factories;

use App\Models\GraduationYear;
use Illuminate\Database\Eloquent\Factories\Factory;

class GraduationYearFactory extends Factory
{
    protected $model = GraduationYear::class;

    public function definition()
    {
        return [
            'year' => $this->faker->year(2050),
        ];
    }
}
