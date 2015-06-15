var React = require('react');
var Router = require('react-router');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var Actions = require('../actions/TaskTrackerActions');

var Auth = React.createClass({
    mixins: [ Router.State ],

    refreshToken: function() {
        Actions.refreshToken();
    },

    componentDidMount: function() {
        this.refreshToken();
    },

    render: function() {
        return (
            <div>
	        <Jumbotron>
	            <h1>Task Tracker</h1>
		    <p>Googleカレンダーへのアクセスを承認してください。</p>
		    <p><Button bsStyle='primary' bsSize='large' onClick={this.refreshToken}>ログイン・承認</Button></p>
                </Jumbotron>
            </div>
	);
    }
});

module.exports = Auth;
