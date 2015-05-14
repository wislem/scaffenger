<?php

return [
	'title' => 'Model Title',               //used for UI
	'model' => 'Model',                //Model name (namespaced model? sure! go ahead!)
	'singular' => 'model',             //Singular and lowercase of model name
  'has_media' => false,             //(Optional) Supports media? Set it to true
  'use_form_columns' => true,        //true|false Split form fields in 2 columns?
  'rules' => [                 //(Optional) Validation Rules
    'fieldname' => 'rule1|rule2...{column_name}',
    /*...*/
  ],
  'custom_actions' => [     //(Optional) Custom actions that appear next to edit and delete in List table
    [
     'url' => '#',
     'label' => '',
     'icon' => '',        //(Optional)
     'class' => '',       //(Optional)
     'id' => '',          //(Optional)
     ]
  ],
  'actions' => [
    'create' => [     //(Optional) If you remove it, the Create button will not render
			'url' => '',
      'label' => '',
			'class' => '',       //(Optional)
			'id' => ''           //(Optional)
    ],
    'edit' => [       //(Optional) If you remove it, the Edit button will not render
      'url' => '',
      'label' => '',
      'class' => '',       //(Optional)
      'id' => ''           //(Optional)
    ],
    'delete' => [     //(Optional) If you remove it, the Delete button will not render
      'url' => '',
      'label' => '',
      'class' => '',       //(Optional)
      'id' => ''           //(Optional)
    ]
  ],
  'columns' => [
    //The order the fields will be shown on all views is the one you type 'em in here
    'column_name' => [                        //If type == 'fk' then use the Relationship method from your model
      'type' => 'xxx',                        //One of pk, slug, text, textarea, password, wysiwyg, date, datetime, fk, image, bool, order, select, url, address, email, number
      'label' => 'ColumnName',                 //UI use
      'attributes' => [
        'inList' => [
          'html_attribute' => 'value'         //Custom html attributes in List view
        ],
        'inForm' => [
          'html_attribute' => 'value'         //Custom html attributes in Form views (create and edit)
        ]
      ],
      'relationship' => [                //(Optional) If type => 'fk'
        'type' => 'laravel_style',            //Type of relationship (belongsTo|belongsToMany)
        'fm' => 'EvenNamespaced\ForeignModel',//Name of model (supports namsspaces)
        'fc' => 'foreign_column'              //Name of field on the foreign table to use
      ],
      'options' => [                     //(Optional) If type == 'select'
        'value1' => 'label1',
        'value2' => 'label2',
      ]
    ],
    /*...*/
  ],
  'hideInList' => [
    //list of fieldnames to hide in List view (table)
  ],
  'hideInCreate' => [
    //list of fieldnames to hide in Create view (form)
  ],
  'hideInEdit' => [
    //list of fieldnames to hide in Edit view (form)
  ]
];