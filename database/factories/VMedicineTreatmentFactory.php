<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VMedicineTreatment>
 */
class VMedicineTreatmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'treatment_id' => 1,
            'medicine_id' => 1,
            'main' => 0,
            'from' => now(),
            'till' => NULL,
            'removal' => "",
            'dosage_time' => $this->faker->numberBetween(1,3),
            'dosage_period' => $this->faker->numberBetween(1,5),
        ];
    }
}
