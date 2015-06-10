<?php

return [
    'title' => 'Roles',               //used for UI
    'model' => 'Caffeinated\Shinobi\Models\Role',                //Model name
    'singular' => 'role',             //Singular and lowercase of model name
    'has_media' => false,
    'use_form_columns' => true,        //true|false Split form fields in 2 columns?
    'rules' => [
        'name' => 'required|unique:roles,name,{id}',
        'slug' => 'required|unique:roles,slug,{id}',
    ],
    'actions' => [
        'create' => [],
        'edit' => [],
        'delete' => []
    ],
    'columns' => [
        'id' => [
            'type' => 'pk',
            'label' => '#'
        ],
        'name' => [
            'type' => 'text',
            'label' => 'Name'
        ],
        'slug' => [
            'type' => 'text',
            'label' => 'Slug'
        ],
        'description' => [
            'type' => 'textarea',
            'label' => 'Description'
        ],
        'permissions' => [
            'type' => 'fk',
            'label' => 'Permissions',
            'relationship' => [
                'type' => 'belongsToMany',
                'fm' => 'Caffeinated\Shinobi\Models\Permission',
                'fc' => 'name'
            ],
            'attributes' => [
                'inForm' => [
                    'class' => 'chosen-select'
                ]
            ]
        ],
    ],
    'hideInList' => [
        'description'
    ],
    'hideInCreate' => [
        'id'
    ],
    'hideInEdit' => [
        'id'
    ],
];
