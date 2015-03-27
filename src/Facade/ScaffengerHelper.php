<?php namespace Wislem\Scaffenger\Facade;

use Illuminate\Support\Facades\Facade;

class ScaffengerHelper extends Facade {

  /**
   * Get the registered name of the component.
   *
   * @return string
   *
   * @throws \RuntimeException
   */
  protected static function getFacadeAccessor()
  {
    return 'scaffengerhelper';
  }

  /**
   * Place any front-end helper functions here.
   * In my own CMS built with Scaffenger I have loadModules() and parseMenu() methods
   */

}