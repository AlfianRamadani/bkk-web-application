<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    protected $model = Company::class;

    public function definition()
    {
        return [
            'company_name' => $this->faker->company,
            'contact' => $this->faker->name,
            'email' => $this->faker->companyEmail,
            'address' => $this->faker->address,
            'company_logo' => $this->faker->imageUrl(),
            'header' => $this->faker->imageUrl(),
            'website_url' => $this->faker->url,
            
        ];
    }
}
