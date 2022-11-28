<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DoctorReport>
 */
class DoctorReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'Ront' => $this->faker->numberBetween(0,4),
            'Func' => $this->faker->numberBetween(0,4),
            'Pain' => $this->faker->numberBetween(0,28),
            'Swell' => $this->faker->numberBetween(0,28),
            'Sediment' => $this->faker->numberBetween(0,100),
            'VAS' => $this->faker->numberBetween(0,100),
            'VASp' => $this->faker->numberBetween(0,100),
            'CRP' => $this->faker->randomFloat(2,0,100),
            'DAS' => $this->faker->randomFloat(2,0,100),
            'treatment_id' => 1
        ];
    }
}
