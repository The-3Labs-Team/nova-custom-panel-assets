# Nova Custom Panel Assets
Our assets (CSS/JS) for Laravel Nova 4 improvements

# Parsers
- csso for CSS
- terser for JS // todo

# How to use

In `NovaServiceProvider`:
```php
public function boot()
{
    // ...
    Nova::style('nova-custom-panel-assets', 'https://cdn.jsdelivr.net/gh/The-3Labs-Team/nova-custom-panel-assets@1/dist/css/main.css');
//    Nova::script('nova-custom-panel-assets', __DIR__.'/../dist/js/nova-custom-panel-assets.js');
}
```
