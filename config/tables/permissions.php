<?php

return [
'title' => 'Permissions',               //used for UI
'model' => 'Caffeinated\Shinobi\Models\Permission',                //Model name
'singular' => 'permission',             //Singular and lowercase of model name
'has_media' => false,             //Supports media? Set it to true
  'use_form_columns' => true,        //true|false Split form fields in 2 columns?
  'rules' => [
    'name' => 'required|unique:permissions,name,{id}',
    'slug' => 'required|unique:permissions,slug,{id}',
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
