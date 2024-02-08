# nova-custom-panel-assets
Our assets (CSS/JS) for Laravel Nova 4 improvements

# terser (https://github.com/terser/terser) for JS <- todo
# csso for CSS

# How to use

## Install
In `NovaServiceProvider`:
```php
public function boot()
{
    // ...
    Nova::style('nova-custom-panel-assets', 'https://cdn.jsdelivr.net/gh/The-3Labs-Team/nova-custom-panel-assets@1/dist/css/main.css');
//    Nova::script('nova-custom-panel-assets', __DIR__.'/../dist/js/nova-custom-panel-assets.js');
}
```

Version 1: https://cdn.jsdelivr.net/gh/The-3Labs-Team/nova-custom-panel-assets@1/dist/css/main.css
