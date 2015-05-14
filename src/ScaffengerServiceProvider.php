<?php namespace Wislem\Scaffenger;

use Config;
use Auth;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class ScaffengerServiceProvider extends ServiceProvider
{
  protected $defer = false;

  const VERSION = '2.0.0';

  /**
   * Register the service provider.
   *
   * @return void
   */
  public function register()
  {
    //Share with app
    $this->app['scaffenger'] = $this->app->share(function () {
      return true;
    });

    //Register dependencies
    $this->app->register('Collective\Html\HtmlServiceProvider');
    $this->app->register('Caffeinated\Shinobi\ShinobiServiceProvider');
    $this->app->register('Folklore\Image\ImageServiceProvider');

    //Register aliases
    $loader = AliasLoader::getInstance();
    $loader->alias('Column', 'Wislem\Scaffenger\Helpers\Column');
    $loader->alias('CHTML', 'Wislem\Scaffenger\Helpers\HTML');
    $loader->alias('ScaffengerHelper', 'Wislem\Scaffenger\Helpers\ScaffengerHelper');
    $loader->alias('Form', 'Collective\Html\FormFacade');
    $loader->alias('HTML', 'Collective\Html\HtmlFacade');
    $loader->alias('Image', 'Folklore\Image\Facades\Image');

    //Publish views
    $this->loadViewsFrom(__DIR__.'/../resources/views', 'scaffenger');

    //Seed classes (add them to your app's DatabaseSeeder class

    //Config files
    $this->publishes([
      __DIR__.'/../config/config.php' => config_path('scaffenger/config.php'),
      __DIR__.'/../config/tables' => config_path('scaffenger/tables'),
      __DIR__.'/../database/seeds' => app_path().'/../database/seeds',
      __DIR__.'/../database/migrations' => app_path().'/../database/migrations',
      __DIR__.'/../public' => public_path().'/vendor/wislem/scaffenger',
      //__DIR__.'/../resources/views' => app_path().'/../resources/views/scaffenger'
    ], 'scaffenger');

    //Load scaffenger routes
    require __DIR__.'/Http/routes.php';
    //Load scaffenger macros
    require __DIR__.'/macros.php';

    //Load Middleware
    $this->app['router']->middleware('scaffenger.auth', 'Wislem\Scaffenger\Http\Middleware\ScaffengerAuth');

    //Load scaffenger view composers
    $this->app['view']->composer('scaffenger::partials.sidebar',function($view){
      //Clear up the menu according to user role
      $menu = Config::get('scaffenger.config.menu');
      $roles = Auth::user()->getRoles();
      if(in_array('admin', $roles)) {
        $final_menu = $menu;
      }else {
        $final_menu = [];
        foreach ($menu as $name => $item) {
          if (!isset($item['role']) or $item['role'] == '*' or in_array($item['role'], $roles)) {
            $final_menu[$name] = $item;
          }
        }
      }

      $view->menu = $final_menu;
    });
  }

  /**
   * Get the services provided by the provider.
   *
   * @return array
   */
  public function provides()
  {
    return ['scaffenger'];
  }


}