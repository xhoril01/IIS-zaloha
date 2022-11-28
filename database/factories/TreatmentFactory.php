<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Treatment>
 */
class TreatmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $genders = array("Male","Female");
        $day = $this->faker->date('Y-m-d');
        return [
            'age' => $this->faker->numberBetween(1,120),
            'gender' => $genders[array_rand($genders,1)],
            'diagnosis' => $day,
            'next_visit' => $this->faker->date('Y-m-d'),
            'start' => date('Y-m-d',strtotime($day. ' + '.$this->faker->numberBetween(0,5).' days')),
            'patient_id' => 1
        ];
    }
}
