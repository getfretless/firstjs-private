
Replace the contents of the `body` element with a `script` tag pointing to an external file. _Do not replace the body itself—only its contents._

```html
<script src="js/scripts.js"></script>
```

```js
var name = prompt('What is your name?');
document.writeln('<p>Hi there, ' + name  +'!</p>');
```

## LAB

Go full Monty Python! Ask "What is your name?", "What is your question?", and "What is your favorite color". Write something to the document usin all three of the entered values.
