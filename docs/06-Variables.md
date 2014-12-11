## Variables

A value, like `"I'm Dave!"` can be stored in a variable, very much like a variable in algebra. This allows us to reuse them and do all sorts of other things with them.

```js
var message = 'Welcome to the most exciting page on the Web!'
alert(message);
```

There's a common refrain in programming that has become known as the DRY principle: Don't Repeat Yourself. From the book [_The Pragmatic Programmer_](https://pragprog.com/the-pragmatic-programmer) by Andy Hunt and Dave Thomas:

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

It has long been a good practice, but Hunt and Thomas gave the principle a name. If you fail to follow the DRY Principle, you'll end up with WET code: Write Everything Twice, or We Enjoy Typing.

There are all kinds of reasons to keep your code DRY, not the least of which is that the more we type, the more likely we are to make a typo.

To declare a variable, use the keyword `var`, and then provide a name for the variable. The variable name is arbitrary; that is, you can name it what you like. There are a few rules though.

Variable names

* Must start with a letter
* Can only contain letters, digits, and underscores
* Cannot be a reserved word

### Current reserved words

What's a reserved word? Most often, reserved words are words that have some special meaning in JavaScript—`var`, for example. Here's a complete list of such [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) as of the current standard, ECMAScript 6:

```
break
case class catch const continue
debugger default delete do
else export extends
false finally for function
if import in instanceof
let
new null
return
super switch
this throw true try typeof
var void
while with
yield
```

### Future reserved words

Other words are reserved for future use. That is, they're not actually used in JavaScript right now, but it's anticipated that they will be in the future. Thus, you can't use them for names.

```
await
enum
implements interface
package private protected public
static
```

### Legacy reserved words

The silliest group of reserved words date back to the early years of JavaScript, when the authors reserved a bunch of words (many of them used in other languages) that they never ended up using in JavaScript.

```
abstract
boolean byte
char
double
final float
goto
int
long
native
short synchronized
transient
volatile
```
