<?php

use Illuminate\Database\Seeder;
use \Caffeinated\Shinobi\Models\Permission;

class PermissionTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('permissions')->delete();

        Permission::create([
            'name' => 'Access Administration area',
            'slug' => 'access.admin',
            'description' => ''
        ]);
    }

}