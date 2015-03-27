<?php namespace Wislem\Scaffenger\Http\Controllers;

use Illuminate\Routing\Controller;

class CustomController extends Controller {

  public function __construct()
  {
    $this->middleware('scaffenger.auth');
  }

  public function getIndex(){
    return 'custom index';
  }

}