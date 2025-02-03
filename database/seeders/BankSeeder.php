<?php

namespace Database\Seeders;

use App\Models\Bank;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Bank::factory()->create([
            'id' => 'd0f7472a-c0eb-11ef-b015-0a0027000004',
            'name' => 'UD. Jambu Plastik',
            'description' => 'Agen dan Pabrik potong Plastik',
            'address' => '[{"id":1,"title":"UD. Jambu Plastik","address":"Ud. Jambu Plastik berlokasi di Jl. Raya Wedung - Demak, Beji, Betokan, Kec. Demak, Kabupaten Demak, Jawa Tengah 59513, Indonesia."}]',
            'phone' => '[{"id": 1, "number":"62 823-2347-7975"}]',
            'email' => '[{"id":1,"email":"a@b.com"}]',
            'logo' => 'https://via.placeholder.com/200',
            'license_number' => '1234567890',
        ]);
    }
}
