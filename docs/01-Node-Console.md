# Node Console

Remember that REPL thing we talked about earlier? We're going to use it from time to time to experiment with JavaScript. Like right now! Don't worry; we'll be using a web browser before you know it.

Type `node` in your shell, and you should see the REPL prompt, indicated by `>`.

```shell
$ node
>
```

Try typing a basic arithmetic expression, like `1 + 3`.

```js
> 1 + 3
```

The `4` that appears is called the _return value_ of our simple JavaScript statement. Return values are essentially the _result_ of a JavaScript statement. As you can imagine, they will be very relevant to our studies.

Type another JavaScript statement.

```js
> console.log("Hello, world.")
```

The result should look like this:

```js
> console.log("Hello, world.")
Hello, world.
undefined
```

In this case, the _return value_ is `undefined`. `Hello, world.` is simply being printed to the console. JavaScript statements can perform actions that have little to do with their return values. In some cases, such as this one, the return value is essentially meaningless. `console.log` is intended to perform an action—printing to the console—rather than to return a meaningful value that we can act on.
