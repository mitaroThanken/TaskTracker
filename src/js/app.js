var React = require('react');
var Router = require('react-router');
var routes = require('./routing/routes');
var RouterContainer = require('./routing/RouterContainer');

var router = Router.create({
  routes: routes
});

RouterContainer.set(router);

router.run(function(Root) {
  React.render(
    <Root />,
    document.getElementById('app')
  );
});
