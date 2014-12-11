# Inline Javascript

Let's leave the console behind for a moment and start putting some JavaScript inside our HTML document so it will be run every time the page loads.

Simply place JavaScript code inside a `script` HTML element. `<script>` tags can appear in the `head` or `body` of a page. Unless you know that you must place a script in the head, it is good practice to put scripts just before the end of the body.

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
    alert('Hi there! This isn\'t annoying, is it?');
  </script>
</body>
</html>
```

Notice that I've escaped the apostrophe character since I used single quotes for my string literal. Personally, I use single quotes for strings more often than not. For what it's worth, that's the preference in [Google's style guide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#Strings).

We can capture something a user types with `prompt`.

```html
<body>
  <script>
    prompt("HI! What's your name?"); // Double-quotes this time!
    alert('Hi there! This isn\'t annoying, is it?');
  </script>
</body>
```

We can do some good old-fashioned concatenation to use the result of our prompt in the alert!

```html
<body>
  <script>
     // Double-quotes this time!
    alert('Hi there, ' + prompt("HI! What's your name?") + '! This isn\'t annoying, is it?');
  </script>
</body>
```

To answer the question that is no doubt on your mind: No, you would never really do this. In fact, one almost never uses `alert` or `prompt` in the wild these days—and certainly not nested like that!

## `document.write` and `document.writeln`

We'll stick with `prompt` for grabbing input for the moment, but we'll use `document.write` and `document.writeln` to display text.

Capture user input with `prompt` and use `document.writeln` to print it.

```html
<body>
  <script>
    var name = prompt('What is your name?');
    document.writeln('Hello, ' + name + '!');
  </script>
</body>
```

Use the JavaScript console to try some more. Try putting HTML inside `writeln`.

## LAB

Modify the inline script to print other things using the name entered.
