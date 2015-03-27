<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Role;

class RoleTableSeeder extends Seeder {

  public function run()
  {
    DB::table('roles')->delete();

    $admin_role = Role::create([
      'name' => 'Administrator',
      'slug' => 'admin',
      'description' => 'Administrators that have full access'
    ]);
    $admin_role->assignPermission(1);
    $admin_role->save();

    $mod_role = Role::create([
        'name' => 'Moderator',
        'slug' => 'mod',
        'description' => 'Moderators that have limited access to Administration area'
    ]);
    $mod_role->assignPermission(1);
    $mod_role->save();

    $user_role = Role::create([
        'name' => 'Member',
        'slug' => 'member',
        'description' => 'Website users. No access to Administration area'
    ]);
  }

}