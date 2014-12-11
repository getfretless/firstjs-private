var App = (function() {
  function App() {
    var _this = this;
    watchForEvents();
    function watchForEvents() {
      var form = document.querySelector('form')
      document.querySelector('form').addEventListener('submit', handleSubmission);
      document.querySelector('#story+button').addEventListener('click', function() {
        form.reset();
        var story = document.getElementById('story');
        story.parentElement.classList.add('hidden');
      });
    }
    function handleSubmission(e) {
      e = e ? e : window.event;
      e.preventDefault();
      var form = e.currentTarget;
      captureValues(form.elements);
      displayStory();
    }
    function captureValues(fields) {
      _this.name = fields['name'].value;
      _this.quest = fields['quest'].value;
      _this.color = fields['color'].value;
    }
    function displayStory() {
      var story = document.getElementById('story');
      story.parentElement.classList.remove('hidden');
      story.innerHTML = '<p>There once was a warrior named ' + _this.name + ' ' +
        'on a mighty quest indeed: ' + _this.quest + '. Luckily, ' +
        _this.name + ' was wearing lucky socks&mdash;colored ' + _this.color + '.' +
        '</p>';
    }
  }
  return App;
})();

app = new App();
