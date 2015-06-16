var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var App = require('../components/App.react');
var Auth = require('../components/Auth.react');
var Main = require('../components/Main.react');

var routes = (
    <Route handler={App} path='/'>
      <Route handler={Main} name='Main'/>
      <DefaultRoute handler={Auth}/>
    </Route>
);

module.exports = routes;
