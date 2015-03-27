<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="_token" content="{{csrf_token()}}">
    <title>{{Config::get('scaffenger.config.title')}}</title>
    <!-- Bootstrap Core CSS -->
    <link href="{!! asset('vendor/wislem/scaffenger/css/bootstrap.css') !!}" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="{!! asset('vendor/wislem/scaffenger/vendor/font-awesome/css/font-awesome.min.css') !!}" rel="stylesheet">
    <link href="{!! asset('vendor/wislem/scaffenger/vendor/summernote/summernote.css') !!}" rel="stylesheet">
    <link href="{!! asset('vendor/wislem/scaffenger/vendor/summernote/summernote-bs3.css') !!}" rel="stylesheet">
    <link href="{{ asset('vendor/wislem/scaffenger/css/plugins.css') }}" rel="stylesheet"/>
    <link href="{!! asset('vendor/wislem/scaffenger/css/app.css') !!}" rel="stylesheet">

    <!-- Icons -->
    <!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
    <link rel="shortcut icon" href="{{asset('vendor/wislem/scaffenger/img/favicon.png')}}">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon57.png')}}" sizes="57x57">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon72.png')}}" sizes="72x72">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon76.png')}}" sizes="76x76">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon114.png')}}" sizes="114x114">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon120.png')}}" sizes="120x120">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon144.png')}}" sizes="144x144">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon152.png')}}" sizes="152x152">
    <link rel="apple-touch-icon" href="{{asset('vendor/wislem/scaffenger/img/icon180.png')}}" sizes="180x180">
    <!-- END Icons -->

    @yield('css')
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div id="wrapper">
      <!-- Sidebar -->
      @include('scaffenger::partials.sidebar')
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <p><a href="#menu-toggle" class="btn btn-sm btn-default" id="menu-toggle"><i class="fa fa-fw fa-navicon"></i></a></p>
              @yield('content')
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="{!! asset('vendor/wislem/scaffenger/js/jquery.js') !!}"></script>

    <script>
    var baseUrl = '{{Config::get('app.url')}}';
    var _token = $('meta[name="_token"]').attr('content');
    var datetimepicker_date_format = '{{Config::get('scaffenger.config.datetimepicker_date_format')}}';
    var datetimepicker_datetime_format = '{{Config::get('scaffenger.config.datetimepicker_datetime_format')}}';
    </script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{!! asset('vendor/wislem/scaffenger/js/bootstrap.min.js') !!}"></script>
    <script src="{!! asset('vendor/wislem/scaffenger/vendor/summernote/summernote.min.js') !!}"></script>
    <script src="{!! asset('vendor/wislem/scaffenger/vendor/summernote/summernote-ext-video.js') !!}"></script>
    <script src="{!! asset('vendor/wislem/scaffenger/vendor/summernote/summernote-ext-fontstyle.js') !!}"></script>
    <script src="{!! asset('vendor/wislem/scaffenger/js/plugins.js') !!}"></script>
    <script src="{!! asset('vendor/wislem/scaffenger/js/app.js') !!}"></script>
    @yield('js')
  </body>
</html>