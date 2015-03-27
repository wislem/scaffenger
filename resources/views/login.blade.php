<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>{{Config::get('scaffenger.config.title')}}</title>

    <!-- Bootstrap Core CSS -->
    <link href="{!! asset('packages/wislem/scaffenger/css/bootstrap.css') !!}" rel="stylesheet">

    <!-- Custom CSS -->

    <link href="{!! asset('packages/wislem/scaffenger/vendor/font-awesome/css/font-awesome.min.css') !!}" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
    html, body {min-height:100%}
    body {
        background-color: transparent;
    }
    html {
        background:radial-gradient(circle at 0% 53.77%, #587d54, transparent 100%),radial-gradient(circle at 99.96% 99.61%, #054240, transparent 100%),radial-gradient(circle at 50% 50%, #fefffa, #fefffa 100%)
    }
    #login {
        margin-top:300px
    }
    .label {
        font-weight: normal;
    }
    </style>

</head>
<body>

    <div id="login" class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">

                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Enter your administration panel
                        <a href="{{URL::to('/')}}" class="pull-right"><span class="label label-default">Go home</span></a>
                        </h3>

                    </div>
                    <div class="panel-body">
                      {!! Form::open(['url' => 'admin/login', 'method' => 'POST']) !!}

                      @if($errors->has('generic'))
                      <div class="alert alert-danger">
                      @foreach($errors->get('generic') as $message)
                        <p>{{$message}}</p>
                      @endforeach
                      </div>
                      @endif

                      @if(\Session::has('scaffenger_error'))
                      <div class="alert alert-danger">
                        {{\Session::get('scaffenger_error')}}
                      </div>
                      @endif

                      {!! Form::hidden('redirect', \Session::get('url.intended', 'admin')) !!}

                      <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
                          {!! Form::label('email', 'Email') !!}
                          {!! Form::email('email', '', ['class' => 'form-control']) !!}
                          {!! $errors->first('email', '<span class="help-block">:message</span>') !!}
                      </div>

                      <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                          {!! Form::label('password', 'Password') !!}
                          {!! Form::input('password', 'password', '', ['class' => 'form-control']) !!}
                          {!! $errors->first('password', '<span class="help-block">:message</span>') !!}
                      </div>

                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="remember" value="1"> Remember me
                        </label>
                      </div>

                      <p class="text-right">
                        <button class="btn btn-success">Login</button>
                      </p>

                      {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
