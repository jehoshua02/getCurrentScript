# getCurrentScript

Get the currently executing script in the browser.

## demo

See simple [demo](https://jehoshua02.github.io/getCurrentScript/).

## bower

```shell
bower install --save get-current-script
```

## npm

```shell
npm install --save get-current-script
```

## usage

__CommonJS__

```javascript
var currentScript = require('get-current-script')();
```

---
__NOTE__: This module is intended for use in the browser.
___

__AMD__

This library is published as UMD format, so theoretically it can be done. If
you figure it out, please submit a pull request. You'll be famous!

__Global__ (Boo, hiss!)

index.html

```html
<script src="bower_components/get-current-script/dist/getCurrentScript.js"></script>
```

script.js

```javascript
var currentScript = getCurrentScript();
```

---
__NOTE__: Please, for the sake of the future, consider using a module loader of
some kind.
___
