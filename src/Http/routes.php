<?php
/** Scaffenger Routes **/
Route::controller('admin', 'Wislem\Scaffenger\Http\Controllers\ScaffengerController');
Route::controller('admin/custom', Config::get('scaffenger.config.custom_controller'));
