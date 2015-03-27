<?php namespace Wislem\Scaffenger\Http\Middleware;

use Auth;
use Closure;
use Session;
use Illuminate\Contracts\Routing\Middleware;

class ScaffengerAuth implements Middleware {

  public function handle($request, Closure $next)
  {
    if (!Auth::check()) {
      return redirect()->intended('scaffenger/login');
    }else {
      if (!Auth::user()->can('access.admin')) {
        Session::flash('admin_error', 'Sorry, you do not have the proper permissions.');

        return redirect()->intended('admin/login');
      }
    }

    return $next($request);
  }

}
