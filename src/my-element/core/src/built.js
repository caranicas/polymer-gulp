'use strict';

Polymer({

  is: 'my-element',
  properties: {
    world: {
      type: String,
      value: "World"
    }
  },

  attached: function attached() {
    var test = [1, 2, 3];
    alert('attach');
  }
});