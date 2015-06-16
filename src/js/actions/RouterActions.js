var AppDispatcher = require('../dispatcher/AppDispatcher');
var router = require('../routing/router');

var RouterActions = {
  transition: function(nextPage) {
    router.transitionTo('step', {
      stepUrl: nextPage
    });
  }
};
