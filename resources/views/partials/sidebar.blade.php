<div id="sidebar-wrapper">
  <ul class="sidebar-nav">
    <li class="sidebar-brand">
        <a href="#">
            {!! \Config::get('scaffenger.title') !!}
        </a>
    </li>
    @foreach($menu as $name => $item)
      @if(strstr($name, 'separator'))
      <li class="sidebar-separator">
        <i class="fa fa-ellipsis-h"></i>
      </li>
      @else
      <li>
        @if(isset($item['subitems']) and count($item['subitems']))
        <a href="#" class="toggle-submenu" {!! isset($item['target']) ? 'target="'.$item['target'].'"' : '' !!}>
          <i class="fa fa-chevron-left sidebar-nav-indicator"></i>
          {!!$item['icon']!!} {!!$name!!}
        </a>
        <ul>
        @foreach($item['subitems'] as $subname => $subitem)
          <li><a href="{!!url($subitem['url'])!!}" {!!isset($subitem['target']) ? 'target="'.$subitem['target'].'"' : ''!!}>{!!$subname!!}</a></li>
        @endforeach
        </ul>
        @else
        <a href="{!! url($item['url']) !!}" {!!isset($item['target']) ? 'target="'.$item['target'].'"' : ''!!}>
          {!! $item['icon'] !!} {{ $name }}
        </a>
        @endif
      </li>
      @endif
    @endforeach
  </ul>
</div>
