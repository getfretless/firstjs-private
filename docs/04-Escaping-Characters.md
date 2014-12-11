# Escaping characters

```js
> alert("How many times must I say \"Hello, world\"?")
```

Strings can contain pretty much any piece of text imaginable, including unprintable characters, like a character marking the end of a line. Such characters we must escape using the backslash `\`. As you might suspect, that means we also need to escape the backslash character if we want an actual backslash to print. Similarly, when a string is marked enclosed in single quotes, the single quote character (or apostrophe) must be escaped whenever we want one to print. Ditto for double quotes in string wrapped in double quotes.

Let's try some examples.

```js
> alert("The file is in the directory \"C:\\Program Files\".")
```

If you've properly escaped the double quote and backslash characters, the alert box should show a well-formed Windows path.

The unprintable newline character that I referred to earlier is represented with `\n`. Let's try putting a long string in an alert box without any newlines.

```js
> alert("These alert boxes are really annoying. I can't imagine when I'll ever use them. When do we get to the good stuff?")
```

Chrome wraps the text as you'd expect. But what if we want "When do we get to the good stuff?" to appear on its own line? Let's add a newline character.

```js
> alert("These alert boxes are really annoying. I can't imagine when I'll ever use them.\n When do we get to the good stuff?")
```

In this example, I put the newline right after the end of one sentence, and then I left a space before the beginning of the next sentence. As you'll see in the alert box, there is now a space at the beginning of the new line. The space isn't necessary. In fact, it's undesirable. Let's get rid of it.

```js
> alert("These alert boxes are really annoying. I can't imagine when I'll ever use them.\nWhen do we get to the good stuff?")
```

Let's add an extra newline character in there, so there's an empty line.

```js
> alert("These alert boxes are really annoying. I can't imagine when I'll ever use them.\n\nWhen do we get to the good stuff?");
```
