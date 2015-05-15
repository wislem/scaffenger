<?php
/** Scaffenger Routes **/
Route::controllers([
    'admin/custom' => Config::get('scaffenger.custom_controller'),
    'admin' => 'Wislem\Scaffenger\Http\Controllers\ScaffengerController'
]);
