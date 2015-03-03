
Replace the contents of the `body` element with a `script` tag pointing to an external file. _Do not replace the body itself—only its contents._

```html
<script src="js/scripts.js"></script>
```

```js
var name = prompt('What is your name?');
document.writeln('<p>Hi there, ' + name  +'!</p>');
```

To deal with `name` being left blank:

```js
var name = prompt('What is your name?');

if (name && name !== 'null') {
  document.writeln('<p>Hi there, ' + name  +'!</p>');
}
else {
  document.writeln('<p>Fine. Be that way.</p>');
}

```

## LAB TIME!
Write a script that does the following things:

Print "Enter your name" to a prompt
Grab the user's input.
Print "Enter your secret agent name" to a prompt.
Grab the user's input.
Prompt with "Tell me a story about yourself."
Grab the user's input.
Spit back the story in an alert, replacing the person's name with theperson's secret agent name.

```js
var name = prompt('What is your name?');
var secretName = prompt('What is your secret agent name?');
var story = prompt('Tell me a story about yourself.');
var thingToSearchFor = new RegExp(name, 'g');
//var thingToSearchFor = new RegExp(name, 'gi'); // case insensitive
story = story.replace(thingToSearchFor, secretName);
alert(story);

// /(^|\s)Cat(\s|$)/gi
```

## LAB

Go full Monty Python! Ask "What is your name?", "What is your quest?", and "What is your favorite color". Write something to the document using all three of the entered values.
