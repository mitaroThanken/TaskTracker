var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var App = require('../components/App.react');
var Auth = require('../components/Auth.react');
var Main = require('../components/Main.react');

var routes = (
    <Route path='/' handler={App}>
        <Route name='Main' handler={Main} />
        <DefaultRoute handler={Auth} />
    </Route>
);

module.exports = routes;
