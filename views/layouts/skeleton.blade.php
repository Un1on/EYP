<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('parts.meta')


</head>
<body>

@include('parts.header')

<div class=" container pd-sm-0">
    @yield('content')


@include('parts.footer')
</div>


@include('parts.meta-footer')
</body>
</html>
