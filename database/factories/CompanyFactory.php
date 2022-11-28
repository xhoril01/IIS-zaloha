<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //Country (State) City Address
            'name' => $this->faker->lastName(),
            'user_id' => 1,
            'location' => "This is address",
            'phone' => "Phone here",
            'mail' => "Something at something",
            'desc' =>  "And here is description",
        ];
    }
}
