var React = require('react');
var Router = require('react-router');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var Actions = require('../actions/TaskTrackerActions');

var Main = React.createClass({
  mixins: [Router.State],

  render: function () {
    return (
      <div>
        <Jumbotron>
          <h1>Task Tracker</h1>
          <p>メイン画面</p>
          <p><Button bsSize='large' bsStyle='primary' disabled>dummy</Button></p>
        </Jumbotron>
      </div>
    );
  }
});

module.exports = Main;
