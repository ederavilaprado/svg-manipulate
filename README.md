# svg-manipulate
Toy project to learn how to manipulate svg for print

**Svg to canvas**
Took from some gist on the web
```javascript
var svgData = new XMLSerializer().serializeToString(document.getElementById('canvas') );

var canvas = document.createElement( "canvas" );
var ctx = canvas.getContext( "2d" );

var img = document.createElement( "img" );
img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );

img.onload = function() {
    ctx.drawImage( img, 0, 0);

    // Now is done
    console.log( canvas.toDataURL( "image/png" ) );
};
```
