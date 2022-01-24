@isset($seo)
    <title>{{ $seo['seo_title']?? '' }}</title>


    <meta name="description" content="{{ $seo['seo_test']?? '' }}">
    @if(isset($seo['keywords']))
        <meta name="keywords" content="{{ $seo['keywords']?? '' }}"/>
    @endif

    @if(!empty($seo['og_description']))
        <meta property="og:description" content="{{$seo['og_description']}}"/>
    @endif
    @if(!empty($seo['seo_fb_file']))
        <meta property="og:image" content="{{asset($seo['seo_fb_file'])}}"/>
    @endif
    <meta property="og:url" content="{{url()->full()}}"/>
    <meta property="og:type" content="website"/>
@endisset
