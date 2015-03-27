
<!DOCTYPE html>
<!--[if IE 9]>         <html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">

	<title>Socims v1.0 - Reset Password</title>

	<meta name="robots" content="noindex, nofollow">
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">

	<!-- Icons -->
	<!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
	<link rel="shortcut icon" href="{{asset('packages/wislem/scaffenger/img/favicon.ico')}}">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon57.png')}}" sizes="57x57">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon72.png')}}" sizes="72x72">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon76.png')}}" sizes="76x76">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon114.png')}}" sizes="114x114">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon120.png')}}" sizes="120x120">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon144.png')}}" sizes="144x144">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon152.png')}}" sizes="152x152">
	<link rel="apple-touch-icon" href="{{asset('packages/wislem/scaffenger/img/icon180.png')}}" sizes="180x180">
	<!-- END Icons -->

	<!-- Stylesheets -->
	<!-- Bootstrap is included in its original form, unaltered -->
	<link rel="stylesheet" href="{{asset('packages/wislem/scaffenger/css/bootstrap.min.css')}}?v=1.2">

	<!-- Related styles of various icon packs and plugins -->
	<link rel="stylesheet" href="{{asset('packages/wislem/scaffenger/css/plugins.css')}}">

	<!-- The main stylesheet of this template. All Bootstrap overwrites are defined in here -->
	<link rel="stylesheet" href="{{asset('packages/wislem/scaffenger/css/main.css')}}">

	<!-- Include a specific file here from css/themes/ folder to alter the default theme of the template -->

	<!-- The themes stylesheet of this template (for using specific theme color in individual elements - must included last) -->
	<link rel="stylesheet" href="{{asset('packages/wislem/scaffenger/css/themes.css')}}">
	<!-- END Stylesheets -->

	<!-- Modernizr (browser feature detection library) -->
	<script src="{{asset('packages/wislem/scaffenger/js/vendor/modernizr-2.8.3.min.js')}}"></script>
</head>
<body>
	<!-- Login Container -->
	<div id="login-container">
		<h1 class="h2 text-light text-center push-top-bottom animation-slideDown">
			<i class="fa fa-history"></i> <strong>Password Reminder</strong>
		</h1>
		<div class="block animation-fadeInQuickInv">
			<div class="block-title">
				<div class="block-options pull-right">
					<a href="{{URL::to('scaffenger/login')}}" class="btn btn-effect-ripple btn-primary" data-toggle="tooltip" data-placement="left" title="" style="overflow: hidden; position: relative;" data-original-title="Back to login"><i class="fa fa-user"></i></a>
				</div>
				<h2>Reminder</h2>
			</div>
			{{Form::open(array('url' => 'scaffenger/forgot-password', 'method' => 'POST', 'id' => 'form-reminder', 'class' => 'form-horizontal', 'novalidate' => 'novalidate'))}}
				@if(isset($msg))
				<div class="alert alert-success">
					{{$msg}}
				</div>
				@endif
				<div class="form-group">
					<div class="col-xs-12">
						<input type="text" id="email" name="email" class="form-control" placeholder="Enter your email..">
					</div>
				</div>
				<div class="form-group form-actions">
					<div class="col-xs-12 text-right">
						<button type="submit" class="btn btn-effect-ripple btn-sm btn-primary"><i class="fa fa-check"></i> Remind Password</button>
					</div>
				</div>
			{{Form::close()}}
		</div>
		<footer class="text-muted text-center animation-pullUp">
			<small><span id="year-copy"></span> &copy; <a href="#">SoCiMS</a></small>
		</footer>
	</div>
	<!-- END Login Container -->

	<!-- Include Jquery library from Google's CDN but if something goes wrong get Jquery from local file (Remove 'http:' if you have SSL) -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script>!window.jQuery && document.write(decodeURI('%3Cscript src="{{asset('package/wislem/scaffenger/js/vendor/jquery-2.1.1.min.js')}}"%3E%3C/script%3E'));</script>

	<!-- Bootstrap.js, Jquery plugins and Custom JS code -->
	<script src="{{asset('packages/wislem/scaffenger/js/vendor/bootstrap.min.js')}}"></script>
	<script src="{{asset('packages/wislem/scaffenger/js/plugins.js')}}"></script>
	<script src="{{asset('packages/wislem/scaffenger/js/app.js')}}"></script>

	<!-- Load and execute javascript code used only in this page -->
	<script src="{{asset('packages/wislem/scaffenger/js/pages/readyLogin.js')}}"></script>
	<script>$(function(){ ReadyLogin.init(); });</script>
</body>
</html>