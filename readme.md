Scaffenger for Laravel 5
========================

A scaffolding generator for any database setup ;)

It has its own UI (can be swapped with any custom made template).

Supports a total of 17 column types including:

Column type  |  Description
:------------|:------------
`pk` | The primary key of the table (usually `id`)
`slug` | A varchar that gets slugified by the column with name `title` and type `text`
`text` | Plain text
`textarea` | Plain textarea
`password` | A password column (has several functionalities for changing it or not preloading its value etc.)
`wysiwyg` | It's a textarea marked as a wysiwyg along with the proper css class to load your preferred js editor (I'm using summernote here)
`date` | A date field that gets formatted according to your needs and shows a datepicker in forms
`datetime` | See `date` plus time support
`fk` | If your table has relationships, then this type is for you
`image` | Using dropzone.js to handle this on forms, shows thumbnail with lightbox in list view
`file` | `TODO`
`bool` | A 0|1 column
`order` | input[type="number"] in forms and can be updated in the list view on the fly
`select` | A set of custom selections (can be anything in your db table -- enum, tinyint... w/e)
`url` | Text column (input[type="url"] in forms)
`number` | Int column (input[type="number"] in forms)
`email` | Email column (input[type="email"] in forms)
`address` | `TODO`


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

Add
```
use Caffeinated\Shinobi\Traits\ShinobiTrait;
```
and
```
class User extends Model implements AuthenticatableContract, CanResetPasswordContract {

	use Authenticatable, CanResetPassword, ShinobiTrait;
```
to your app/User.php model

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

Create your db table config files inside 
```
/config/scaffenger/tables
```
based on 
```
/config/scaffenger/tables/guide.php
```
E.g. 
```
/config/scaffenger/tables/pages.php
```
and then you can navigate to 
```
/admin/list/pages
```
to manage your db table through the UI.
