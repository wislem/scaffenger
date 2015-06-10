<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{

    use Illuminate\Console\AppNamespaceDetectorTrait;

    public function run()
    {
        DB::table('users')->delete();

        $user_model = $this->getAppNamespace() . 'User';

        $user = $user_model::create([
            'name' => 'Admin',
            'email' => 'admin@scaffenger.com',
            'password' => bcrypt('admin')
        ]);

        $user->save();

        $user->assignRole(1);
        $user->save();
    }

}