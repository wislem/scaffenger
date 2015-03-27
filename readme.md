Scaffenger for Laravel 5
========================

A scaffolding generator for any database setup ;)

It has its own UI (can be swapped with any custom made template).

Supports a total of 12 field types including:
* pk
* slug
* text
* textarea
* password
* wysiwyg
* date
* datetime
* fk
* image
* bool
* order
* select
* url
* address
* email
* number

## Installation steps

### Step 1: Install package

Add the package inside your composer.json requirements

```bash
composer require wislem/scaffenger
```

and add its ServiceProvider

```
'Wislem\Scaffenger\ScaffengerServiceProvider',
```

to your `/config/app.php` file

### Step 2: Publish stuff

```bash
php artisan vendor:publish --tag=scaffenger --force
```

#### This will do the following:

* Config files will be
```
/config/scaffenger/config.php
/config/scaffenger/tables/*.php
```

* Migration files
```
	/database/migrations/2015_03_22_065314_create_tests_table.php
	/database/migrations/2015_03_24_113432_create_media_table.php
```
* Seed files
```
	/database/seeds/PermissionTableSeeder.php
	/database/seeds/RoleTableSeeder.php
	/database/seeds/UserTableSeeder.php
```
* Assets under
```
/public/packages/scaffenger
```


### Step 3: Run migrations and seeds

Add seeds to your main `DatabaseSeeder.php` class

```
<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

    $this->call('PermissionTableSeeder');
    $this->call('RoleTableSeeder');
    $this->call('UserTableSeeder');
	}

}
```

Run

```
php artisan migrate
```

and

```
php artisan db:seed
```

#### Result of the above actions

* DB tables:
	`users`, `password_resets` (default Laravel migration)
	`permissions`, `roles`, `permission_role`, `role_user` (Caffeinated\Shinobi migrations)
	`media`, `tests` (Scaffenger's migrations)
* Seeds
	* Roles
		* Administrator
		* Moderator
		* Member
	* Permission
		* access.admin
	* Users
		* admin@scaffenger.com:admin

## Step 4

Navigate to /admin and play around.


## What now?

Create your db table config files inside /config/scaffenger/tables based on /config/scaffenger/tables/guide.php

E.g. /config/scaffenger/tables/pages.php and then you can navigate to /admin/list/pages to manage your db table through the UI.
