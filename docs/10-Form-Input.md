# Form input

Let's add a form to the page. We'll add some `class` attributes to our elements for the sake of Bootstrap styling.

```html
<body>
  <div class="well">
    <form role="form">
      <div class="form-group">
        <label for="name">What is your name?</label><br>
        <input id="name" class="form-control"  type="text">
      </div>
      <div class="form-group">
        <label for="quest">What is your quest?</label><br>
        <input id="quest" class="form-control"  type="text">
      </div>
      <div class="form-group">
        <label for="color">What is your favorite color?</label><br>
        <input id="color" class="form-control"  type="text">
      </div>
      <input type="submit" class="btn btn-default" value="Tell a story">
    </form>
  </div>
  <script src="js/scripts.js"></script>
</body>
```
