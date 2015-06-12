var React = require('react');
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    mixins: [ Router.State ],

    render: function() {
        return (
            <div>
	        <RouteHandler/>
	    </div>
	);
    }
});

module.exports = App;
