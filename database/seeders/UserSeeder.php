<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::query()->create([
            'name' => 'Bariq Firjatullah',
            'email' => 'bariqfirjatullah1803@gmail.com',
            'password' => Hash::make('aku089619')
        ]);
        User::query()->create([
            'name' => 'Sefprina Sulisiani',
            'email' => 'sefprinaana@gmail.com',
            'password' => Hash::make('sefprina123')
        ]);
    }
}
