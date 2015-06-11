var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var App = React.createClass({
    login: function() {
        self.port.emit('login');
    },
    render: function() {
        return (
            <div>
	        <Jumbotron>
	            <h1>Task Tracker</h1>
		    <p>Googleカレンダーへのアクセスを承認してください。</p>
		    <p><Button bsStyle='primary' bsSize='large' onClick={this.login}>ログイン・承認</Button></p>
                </Jumbotron>
            </div>
	);
    }
});

module.exports = App;
