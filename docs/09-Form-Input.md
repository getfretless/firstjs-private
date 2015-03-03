# Form input

Let's add a form to the page.

Tip: Create a closing tag to match an opening tag with Ctrl+alt+. (Cmd + opt + . on Mac)


Note: Why am I using IDs instead of NAMEs?

```html
<body>
  <div>
    <form role="form">
      <div>
        <label for="name">What is your name?</label><br>
        <input name="name" type="text">
      </div>
      <div>
        <label for="quest">What is your quest?</label><br>
        <input name="quest" type="text">
      </div>
      <div>
        <label for="color">What is your favorite color?</label><br>
        <input name="color" type="text">
      </div>
      <input type="submit" value="Tell a story">
    </form>
  </div>
  <script src="js/scripts.js"></script>
</body>
```
