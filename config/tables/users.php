<?php

return [
  'title' => 'Users',               //used for UI
  'model' => 'App\User',            //Model name
  'singular' => 'user',             //Singular and lowercase of model name
  'use_form_columns' => false,        //true|false Split form fields in 2 columns?
  'rules' => [
    'username' => 'required|unique:users,username,{id}',
    'email' => 'required|email|unique:users,email,{id}',
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
    'email' => [
      'type' => 'email',
      'label' => 'Email'
    ],
    'roles' => [
      'type' => 'fk',
      'label' => 'Roles',
      'relationship' => [
        'type' => 'belongsToMany',
        'fm' => 'Caffeinated\Shinobi\Models\Role',
        'fc' => 'name'
      ],
      'attributes' => [
        'inForm' => [
          'class' => 'chosen-select'
        ]
      ]
    ],
    'password' => [
      'type' => 'password',
      'label' => 'Password'
    ]
  ],
  'hideInList' => [
    'password'
  ],
  'hideInCreate' => [
    'id'
  ],
  'hideInEdit' => [
    'id'
  ]
];