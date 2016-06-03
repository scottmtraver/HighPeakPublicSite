new Vue({
  el: '#checklist',
  data: {
    groups: [
      {
        name: 'Passes',
        items: [
          { text: 'Linter - no syntax errors', checked: false },
          { text: 'Tests - new tests written if necessary', checked: false },
          { text: 'Code Review - at least one other developer is aware of change', checked: false },
          { text: 'Names are clear and concise - follow project standards', checked: false },
          { text: 'Does not create duplicate code', checked: false }
        ]
      },
      {
        name: 'Defensively Coded',
        items: [
          { text: 'Module, scope, exposure correct - has proper interfaces', checked: false },
          { text: 'CSS classes specific', checked: false },
          { text: 'Nulls and defaults accounted for', checked: false }
        ]
      },
      {
        name: 'NO',
        items: [
          { text: 'No magic numbers - static hardcoded values', checked: false },
          { text: 'Console logs and debugging statements removed', checked: false },
          { text: 'No infinite loops', checked: false }
        ]
      },
      {
        name: 'Code Paths',
        items: [
          { text: 'Identified all ways this code will run - via search', checked: false },
          { text: 'Nulls and defaults accounted for', checked: false },
          { text: 'Discussed where this code may be used - in the future', checked: false }
        ]
      },
      {
        name: 'Source Control',
        items: [
          { text: 'Good commit message - clear and descriptive', checked: false }
        ]
      },
      {
        name: 'Line by Line',
        items: [
          { text: 'What is the responsibility of this code existing?', checked: false }
        ]
      }
    ]
  },
  computed: {
    progress: function () {
      var ara = this.groups.map((group) => { return group.items; });
      return [].concat.apply([], ara).map((item) => { return item.checked; }).filter((checked) => { return checked; }).length;
    },
    total: function () {
      var ara = this.groups.map((group) => { return group.items; });
      return [].concat.apply([], ara).length;
    }
  },
  methods: {
    updateProgress: function () {
      $('#progress')
        .progress({
          value: this.progress
        });
    }
  }
})
