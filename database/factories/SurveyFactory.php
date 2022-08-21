<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Survey>
 */
class SurveyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'image' => 'https://source.unsplash.com/random/?survey',
            'title' => fake()->sentence(),
            'status' => 1,
            'description' => fake()->paragraph(rand(1, 5)),
            'expire_date' => fake()->dateTimeBetween('+1 day', '+1 year')
        ];
    }
}
