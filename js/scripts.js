var App = {
  name:  '',
  quest: '',
  color: '',
  watchForSubmit: function() {
    document.querySelector('form').addEventListener('submit', App.handleSubmission);
  },
  handleSubmission: function(e) {
    e = e ? e : window.event;
    e.preventDefault();
    var form = e.target;
    App.captureValues(form.elements);
    App.displayStory();
  },
  captureValues: function(fields) {
    App.name = fields['name'].value;
    App.quest = fields['quest'].value;
    App.color = fields['color'].value;
  },
  displayStory: function() {
    document.writeln('<p>There once was a warrior named ' + App.name + ' ' +
      'on a mighty quest indeed: ' + App.quest + '. Luckily, ' +
      App.name + ' was wearing lucky socks&mdash;colored ' + App.color + '.' +
      '</p>'
    );
  }
}

App.watchForSubmit();
