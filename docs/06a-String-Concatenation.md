# String concatenation

Let's look an example where a variable might actually keep us from repeating ourselves.

```js
var name = 'Dave';
var message = 'Your instructors are ' + name + ' and ' + name + '.';
alert(message);
```

Math with words! Let's break it down.

Adding two strings smashes the two together to form a new string. This is called concatenation. Let's experiment in the console a little so we don't have to keep editing, saving, and reloading.

```js
var first_name = 'Dave';
var full_name = first_name + 'Strus';
console.log(full_name);
```

This logs `DaveStrus`. Concatenation just smashes strings together; it doesn't add any extra spaces. Also notice that I can add strings together regardless of whether they're stored in variables or wrapped in quotation marks.

## Vocab time: _literal_

When a use a string value by wrapping it in quotes, that's called a string _literal_. In general, a _literal_ is a value referenced directly, as opposed to being referenced in a variable or something else.

```js
var first_name = 'Dave';
var full_name = first_name + 'Strus';
console.log(full_name);
```

In this case, `'Dave'` and 'Strus' are string literals. `first_name` and `full_name` are variables that hold string values.

Let's clean up that example by adding a `last_name` variable and adding some space in the concatenated string.

```js
var first_name = 'Dave';
var last_name = 'Strus';
var full_name = first_name + ' ' + last_name;
console.log(full_name);
```

Notice that `' '` is a perfectly valid string, containing just a space. For that matter, `''` is a perfectly valid, albeit empty, string.
