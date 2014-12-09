## Inline: `prompt`, `document.writeln` and `document.write`

Capture user input with `prompt` and use `document.writeln` to print it.

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
  <script>
    var name = prompt('What is your name?');
    document.writeln('Hello, ' + name + '!');
  </script>
</body>
</html>
```

Use the JavaScript console to try some more. Try putting HTML inside `writeln`.
