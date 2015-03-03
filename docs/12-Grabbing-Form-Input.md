# Using form data

More bootstrap classes...

```html
<div class="well col-sm-6 col-sm-offset-3 col-xs-12">
```

First create variables to hold the form itself, and each of the text inputs.

```js
var my_form, name_field, quest_field, user_data;
```

Now we're going to actually assign the values to these variables.

```js
my_form = document.querySelector('form');
name_field = my_form.elements.name;
quest_field = my_form.elements.quest;
color_field = my_form.elements.color;
```

```js
function getValues(ev) {
  ev.preventDefault();
  user_data = {
    name: name_field.value,
    quest: quest_field.value,
    color: color_field.value
  }
}
```

```js
my_form.onsubmit = getValues;
```

```js
function writeData() {
  var storyDiv = document.getElementById('story');
  storyDiv.innerHTML = userData.name + ', ' + userData.quest;
}
```

```js
function getValues(ev) {
  ev.preventDefault();
  user_data = {
    name: name_field.value,
    quest: quest_field.value
  }
}
```


```js
function writeStory(data) {
  var story_div = document.getElementById('story');
  story_div.innerHTML = '<p>There once was a warrior named ' + data.name + ' ' +
                     'on a mighty quest indeed: ' + data.quest + '. Luckily, ' +
                     data.name + ' was wearing lucky socks&mdash;colored ' + data.color + '.' +
                   '</p>';
}
```

```js
function getValues(ev) {
  ev.preventDefault();
  user_data = {
    name: name_field.value,
    quest: quest_field.value
  }
  writeStory();
}
```


## LAB: Clicking the button replaces the inputs with H2s containing their values.

```js
function replaceFormFields(data) {
  name_field.parentElement.innerHTML = '<h2>' + data.name + '</h2>';
  quest_field.parentElement.innerHTML = '<h2>' + data.quest + '</h2>';
  color_field.parentElement.innerHTML = '<h2>' + data.color + '</h2>';
}

function getValues(ev) {
  ev.preventDefault();
  user_data = {
    name: name_field.value,
    quest: quest_field.value,
    color: color_field.value
  };
  //writeStory();
  replaceFormFields(user_data);
}
```
