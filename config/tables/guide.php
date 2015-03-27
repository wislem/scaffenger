<?php

return [
	//used for UI
	'title'	=> 'Model Title',
	//Model name (namespaced model? sure! go ahead!)
	'model'	=> 'Model',
	//Singular and lowercase of model name
	'singular' => 'model',
	//(Optional) Supports media? Set it to true
  'has_media' => false,
  //true|false Split form fields in 2 columns?
  'use_form_columns' => true,
  //(Optional) Validation Rules
  'rules'	=> [
    'fieldname' => 'rule1|rule2...{column_name}',
    /*...*/
  ],
  //(Optional) Custom actions that appear next to edit and delete in List table
  'custom_actions' => [
    [
     'url' => '#',
     'label' => '',
     //(Optional)
     'icon' => '',
     //(Optional)
     'class' => '',
     //(Optional)
     'id' => '',
     ]
  ],
  'actions' => [
  	//(Optional) If you remove it, the Create button will not render
    'create' => [
			'url' => '',
      'label' => '',
      //(Optional)
			'class' => '',
			//(Optional)
			'id' => ''
    ],
    //(Optional) If you remove it, the Edit button will not render
    'edit' => [
      'url' => '',
      'label' => '',
      //(Optional)
      'class' => '',
      //(Optional)
      'id' => ''
    ],
    //(Optional) If you remove it, the Delete button will not render
    'delete' => [
      'url' => '',
      'label' => '',
      //(Optional)
      'class' => '',
      //(Optional)
      'id' => ''
    ]
  ],
  'columns' => [
    //The order the fields will be shown on all views is the one you type 'em in here
    
    //If type == 'fk' then use the Relationship method from your model
    'column_name' => [
    	//One of pk, slug, text, textarea, password, wysiwyg, date, datetime, fk, image, bool, order, select, url, address, email, number
      'type' => 'xxx',
      'label' => 'ColumnName',
      'attributes' => [
        'inList' => [
        	//Custom html attributes in List view
          'html_attribute' => 'value'
        ],
        'inForm' => [
        	//Custom html attributes in Form views (create and edit)
          'html_attribute' => 'value'
        ]
      ],
      //(Optional) If type => 'fk'
      'relationship' => [       
      	//Type of relationship (belongsTo|belongsToMany)
        'type' => 'laravel_style',
        //Name of model (supports namsspaces)
        'fm' => 'EvenNamespaced\ForeignModel',
        //Name of field on the foreign table to use
        'fc' => 'foreign_column'
      ],
      //(Optional) If type == 'select'
      'options' => [
        'value1' => 'label1',
        'value2' => 'label2',
      ]
    ],
    /*...*/
  ],
  'hideInList' => [
    //list of column names to hide in List view (table)
  ],
  'hideInCreate' => [
    //list of column names to hide in Create view (form)
  ],
  'hideInEdit' => [
    //list of column names to hide in Edit view (form)
  ]
];
