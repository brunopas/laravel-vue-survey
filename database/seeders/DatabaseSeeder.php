<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Survey;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@larasurveys.com',
        ]);

        User::factory(9)->create();

        for ($i = 1; $i <= 10; $i++) {
            Survey::factory(25)->create([
                'user_id' => $i
            ]);
        }
    }
}
