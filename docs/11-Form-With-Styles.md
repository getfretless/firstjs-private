# Form input

Next we'll add some `class` attributes to our elements for the sake of Bootstrap styling.

```html
<body>
  <div class="well">
    <form role="form">
      <div class="form-group">
        <label for="name">What is your name?</label><br>
        <input name="name" class="form-control"  type="text">
      </div>
      <div class="form-group">
        <label for="quest">What is your quest?</label><br>
        <input name="quest" class="form-control" type="text">
      </div>
      <div class="form-group">
        <label for="color">What is your favorite color?</label><br>
        <input name="color" class="form-control"  type="text">
      </div>
      <input type="submit" class="btn btn-default" value="Tell a story">
    </form>
  </div>
  <script src="js/scripts.js"></script>
</body>
```
