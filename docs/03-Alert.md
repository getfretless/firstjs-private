# Presenting text to users with `alert`

With an HTML document loaded, we have access to some new JavaScript objects and functions. We can't very well use `console.log` all the time. Our users can't see the console output (unless they go looking for it with developer tools), so it's really just for our use as developers. It can be very helpful during development.

## `console.log` is non-standard.

I'll go so far as to say you should _never_ have a `console.log` statement in a production app. While it may seem like it's unhelpful but harmless, `console.log` is non-standard JavaScript. It's not even on a track to become standard. It's just a convenience provided by browsers, and they don't all implement it the same way.

So we need some way to actually present some sort of output to people visiting our page. One of the oldest, and most annoying, is the `alert` function.

## Using `alert`

Type this in the console:

```js
> alert('How many times must I say "Hello, world"?')
```

Aside from using `alert` in place of `console.log`, I also wrapped text in single quotes rather than double-quotes. The quotation marks mark a piece of text data called a `String`. They can be wrapped in either single or double quotes. I used single quotes in this case, because the string itself contains double quotes. I still could have used double quotes, but I'd have to _escape_ the quotes inside the string.
