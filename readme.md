## Scaffenger for Laravel 5

Installation:

- composer require wislem/scaffenger

- php artisan vendor:publish --tag=scaffenger --force

- php artisan migrate

- php artisan db:seed


This will result in these tables in you db:

1. migrations, users, password_resets (default Laravel migration)
2. permissions, roles, permission_role, role_user (caffeinated/shinobi migrations)

Scaffenger's seed will create 3 Roles:

1. Administrator (admin)
2. Moderator (mod)
3. Member (member)

1 Permission:

1. access.admin

and finally 1 administrator user

Email: admin@scaffenger.com
Password: admin

Scaffenger's config files will be /config/scaffenger/config.php and /config/scaffenger/tables/*

=========

You can now navigate to /admin, login and play around.

=========

Create your db table config files inside /config/scaffenger/tables based on /config/scaffenger/tables/guide.php

E.g. /config/scaffenger/tables/pages.php and then you can navigate to /admin/list/pages to manage your db table through the UI.

=========

