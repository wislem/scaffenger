<?php
/**
 * Inside the menu array:
 * 'Item title' => [
 * 'url' => 'url/path', //or # if parent menu
 * 'icon' => '<i class="fa glyphicon... sidebar-nav-icon"></i>', //optional
 * 'target' => '', //optional,
 * 'role' => '*' //optional: *, admin or mod.
 * 'subitems' => [ //optional
 * //Same block as parent but without the icon
 * ]
 * ],
 * 'separatorX' => [ //the word separator does the job. X is for the menu loop to work
 * 'url' => '#',
 * ],
 */
return [
    'title' => 'Scaffenger',
    'locale' => 'en',
    'rpp' => 20, //rows per page,
    'datetimepicker_date_format' => 'YYYY-MM-DD', //for datetimepicker to go along with your date accessors (if any)
    'datetimepicker_datetime_format' => 'YYYY-MM-DD HH:mm:ss', //for datetimepicker to go along with your date accessors (if any)
    'form_left_column_types' => ['slug', 'text', 'textarea', 'wysiwyg', 'number'],
    'form_right_column_types' => ['select', 'image', 'file', 'email', 'password', 'date', 'datetime', 'fk', 'bool', 'order', 'url', 'address'],
    'custom_controller' => 'Wislem\Scaffenger\Http\Controllers\CustomController'
  'media_model' => 'Wislem\Scaffenger\Models\Media',
  'media_rel_func' => 'media',
  'uploads_folder' => public_path() . '/uploads/scaffenger',
  'menu' => [
    'Dashboard' => [
        'url' => 'admin',
        'icon' => '<i class="fa fa-home sidebar-nav-icon"></i>',
    ],
    'separator1' => [
        'url' => '#',
    ],
    'User Management' => [
        'role' => 'admin',
        'url' => '#',
        'icon' => '<i class="fa fa-users sidebar-nav-icon"></i>',
        'subitems' => [
            'Users' => [
                'url' => 'admin/list/users',
            ],
            'Roles' => [
                'url' => 'admin/list/roles'
            ],
            'Permissions' => [
                'url' => 'admin/list/permissions'
            ]
        ]
    ],
    'Tests' => [
        'role' => '*',
        'url' => 'admin/list/tests',
        'icon' => '<i class="fa fa-cogs sidebar-nav-icon"></i>',
    ],
    'separator2' => [
        'url' => '#',
    ],
    'Logout' => [
        'url' => 'admin/logout',
        'icon' => '<i class="fa fa-lock sidebar-nav-icon"></i>',
    ]
],
];
