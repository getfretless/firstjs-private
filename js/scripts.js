var App = {
  name:  '',
  quest: '',
  color: '',
  watchForEvents: function() {
    var form = document.querySelector('form')
    document.querySelector('form').addEventListener('submit', App.handleSubmission);
    document.querySelector('#story+button').addEventListener('click', function() {
      form.reset();
      var story = document.getElementById('story');
      story.parentElement.classList.add('hidden');
    });
  },
  handleSubmission: function(e) {
    e = e ? e : window.event;
    e.preventDefault();
    var form = e.currentTarget;
    App.captureValues(form.elements);
    App.displayStory();
  },
  captureValues: function(fields) {
    App.name = fields['name'].value;
    App.quest = fields['quest'].value;
    App.color = fields['color'].value;
  },
  displayStory: function() {
    var story = document.getElementById('story');
    story.parentElement.classList.remove('hidden');
    story.innerHTML = '<p>There once was a warrior named ' + App.name + ' ' +
      'on a mighty quest indeed: ' + App.quest + '. Luckily, ' +
      App.name + ' was wearing lucky socks&mdash;colored ' + App.color + '.' +
      '</p>';
  }
}

App.watchForEvents();
