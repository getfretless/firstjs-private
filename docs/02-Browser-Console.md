# Browser Console

As promised, we going to jump straight into a web browser. Fire up Google Chrome, or open a new tab if Chrome is already running.

Chrome has some great development tools built in, as do pretty much all of the major, modern browsers—some better than others.

One of these development tools is a JavaScript console. It's a REPL environment right in the browser, with all the context of the currently loaded page.

The simplest way to open the JavaScript console is via keyboard shortcut:

* `Ctrl Shift J` on Windows
* `⌥ ⌘ J` on Mac

Try `console.log("Hello, world.")` again.

```js
> console.log("Hello, world.")
   Hello, world.
⋖ undefined
```

Isn't that delightful? Now let's give ourselves an HTML document to work with.

Create a project folder called _firstjs_ and change to that directory. Open the directory in Atom, and create a file called _index.html_.

## Empty HTML5 document

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>JavaScript Exercises</title>

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
<body>
</body>
</html>
```

Notice that we're including an external JavaScript file from Google if the page is visited using any version of Internet Explorer before version 9. That script, _html5.js_, enables many of the new elements in HTML5 in browsers that don't support them natively.

Save _index.html_, open it in a web browser. It's a blank page, of course, but if you _view source_ in your browser you'll see the markup that we saved.
