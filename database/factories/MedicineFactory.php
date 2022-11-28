<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Medicine>
 */
class MedicineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition()
    {
        return [
            'name' => $this->faker->lastName(),
            'type' => $this->faker->numberBetween(0,4),
            'version' => $this->faker->numberBetween(0,222),
            'company_id' => $this->faker->numberBetween(1,8)
        ];
    }
}
