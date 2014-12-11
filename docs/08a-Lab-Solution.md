## Lab Solution
```js
var name = prompt('What is your name?');
var quest = prompt('What is your quest?');
var color = prompt('What is your favorite color?');
document.writeln('<p>There once was a warrior named ' + name + ' ' +
                   'on a mighty quest indeed: ' + quest + '. Luckily, ' +
                   name + ' was wearing lucky socks&mdash;colored ' + color + '.' +
                 '</p>');
```

Before we move on, let's make sure those prompts and alerts don't pop up again next time. Rather than simply deleting our JavaScript, let's wrap all of that behavior in a **function**. We will have so, so much to say about functions later. For now, update _scripts.js_ as follows:

_js/scripts.js_
```js
function questPrompts() {
  var name = prompt('What is your name?');
  var quest = prompt('What is your quest?');
  var color = prompt('What is your favorite color?');
  document.writeln('<p>There once was a warrior named ' + name + ' ' +
                     'on a mighty quest indeed: ' + quest + '. Luckily, ' +
                     name + ' was wearing lucky socks&mdash;colored ' + color + '.' +
                   '</p>');
}
```
