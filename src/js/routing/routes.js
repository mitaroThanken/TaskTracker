var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var Auth = require('../components/Auth.react');

var routes = (
    <Route path='/data/App.html'>
        <DefaultRoute handler={Auth} />
    </Route>
);

module.exports = routes;
