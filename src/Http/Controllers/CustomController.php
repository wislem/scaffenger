<?php namespace Wislem\Scaffenger\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Steer\Subscription;

class CustomController extends Controller {

  public function __construct()
  {
    $this->middleware('scaffenger.auth');
  }

  public function getActiveSubscriptions(){
    $active_customers = DB::table('users')
                          ->join('subscription_user', 'user_id', '=', 'subscription_user.user_id')
                          ->where('subscription_user.is_active', '=', 1)
                          ->get();

    dd($active_customers);
  }

}