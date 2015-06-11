var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var App = require('../components/App.react');

var routes = (
    <Route path='/data/App.html'>
        <DefaultRoute handler={App} />
    </Route>
);

module.exports = routes;
