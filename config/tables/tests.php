<?php

return array(

    'title' => 'Tests',
    'model' => 'Wislem\Scaffenger\Models\Test',
    'singular' => 'test',
    'has_media' => true,
    'use_form_columns' => true,        //true|false Split form fields in 2 columns?
    'rules' => [
        'slug' => 'required|unique:tests,slug,{id}',
        'title' => 'required|unique:tests,title,{id}',
        'email' => 'required|email',
        'selection' => 'required'
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
        'slug' => [
            'type' => 'slug',
            'label' => 'Slug'
        ],
        'title' => [
            'type' => 'text',
            'label' => 'Title',
        ],
        'content' => [
            'type' => 'textarea',
            'label' => 'Textarea'
        ],
        'wysiwyg' => [
            'type' => 'textarea',
            'label' => 'Wysiwyg',
            'attributes' => [
                'inForm' => [
                    'class' => 'wysiwyg'
                ]
            ]
        ],
        'selection' => [
            'type' => 'select',
            'label' => 'Custom Selection',
            'options' => [
                '0' => 'Off',
                '1' => 'On'
            ],
            'attributes' => [
                'inForm' => [
                    'class' => 'chosen-select'
                ]
            ]
        ],
        'image' => [
            'type' => 'image',
            'label' => 'Image upload',
        ],
        'email' => [
            'type' => 'email',
            'label' => 'Email',
        ],
        'url' => [
            'type' => 'url',
            'label' => 'URL',
        ],
        'ordr' => [
            'type' => 'order',
            'label' => 'Order',
        ],
        'is_active' => [
            'type' => 'bool',
            'label' => 'Bool'
        ],
        'datefield' => [
            'type' => 'date',
            'label' => 'Date',
            'attributes' => [
                'inForm' => [
                    'class' => 'date'
                ]
            ]
        ],
        'datetimefield' => [
            'type' => 'datetime',
            'label' => 'Datetime',
            'attributes' => [
                'inForm' => [
                    'class' => 'datetime'
                ]
            ]
        ]
    ],
    'hideInList' => [

    ],
    'hideInCreate' => [
        'id'
    ],
    'hideInEdit' => [
        'id'
    ]

);