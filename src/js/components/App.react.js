var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var Actions = require('../actions/TaskTrackerActions');

var App = React.createClass({
    refreshToken: function() {
        Actions.refreshToken();
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

module.exports = App;
