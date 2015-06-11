<?php
/** Scaffenger Routes **/
Route::controller('admin', 'Wislem\Scaffenger\Http\Controllers\ScaffengerController');
if(class_exists(Config::get('scaffenger.config.custom_controller'))) {
    Route::controller('admin/custom', Config::get('scaffenger.config.custom_controller'));
}
