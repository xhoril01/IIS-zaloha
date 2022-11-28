<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\preport>
 */
class PreportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $other = $this->faker->boolean();
        $helpers = array("Motorova pila","Handra na palicke","Pavucik menom Dory","Zavislost na cokolade","Moj osobny Denis");
        if($other) $oot = $helpers[array_rand($helpers,1)];
            else $oot = "";
        return [
            'Q1' => $this->faker->numberBetween(0,4),
            'Q2' => $this->faker->numberBetween(0,4),
            'Q3' => $this->faker->numberBetween(0,4),
            'Q4' => $this->faker->numberBetween(0,4),
            'Q5' => $this->faker->numberBetween(0,4),
            'Q6' => $this->faker->numberBetween(0,4),
            'Q7' => $this->faker->numberBetween(0,4),
            'Q8' => $this->faker->numberBetween(0,4),
            'Q9' => $this->faker->numberBetween(0,4),
            'Q10' => $this->faker->numberBetween(0,4),
            'Q11' => $this->faker->numberBetween(0,4),
            'Q12' => $this->faker->numberBetween(0,4),
            'Q13' => $this->faker->numberBetween(0,4),
            'Q14' => $this->faker->numberBetween(0,4),
            'Q15' => $this->faker->numberBetween(0,4),
            'Q16' => $this->faker->numberBetween(0,4),
            'Q17' => $this->faker->numberBetween(0,4),
            'Q18' => $this->faker->numberBetween(0,4),
            'Q19' => $this->faker->numberBetween(0,4),
            'Q20' => $this->faker->numberBetween(0,4),
            'B11' => $this->faker->boolean(),
            'B12' => $this->faker->boolean(),
            'B13' => $this->faker->boolean(),
            'B14' => $this->faker->boolean(),
            'B15' => $this->faker->boolean(),
            'B16' => $this->faker->boolean(),
            'B17' => $this->faker->boolean(),
            'B18' => $this->faker->boolean(),
            'B19' => $this->faker->boolean(),
            'B110' => $this->faker->boolean(),
            'B111' => $this->faker->boolean(),
            'B112' => $this->faker->boolean(),
            'B113' => $other,
            'B21' => $this->faker->boolean(),
            'B22' => $this->faker->boolean(),
            'B23' => $this->faker->boolean(),
            'B24' => $this->faker->boolean(),
            'B25' => $this->faker->boolean(),
            'B26' => $this->faker->boolean(),
            'B27' => $this->faker->boolean(),
            'B28' => $this->faker->boolean(),
            'HQp' => $this->faker->randomFloat(2,0,100),
            'Other' => $oot,
            'treatment_id' => 1
        ];
    }
}
