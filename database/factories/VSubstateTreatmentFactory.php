<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VSubstateTreatment>
 */
class VSubstateTreatmentFactory extends Factory
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
            'substate_id' => 1,
            'from' => now(),
            'till' => NULL
        ];
    }
}
