var React = require('react');
var router = require('./routing/router');

router.run(function(Handler) {
    React.render(
        <Handler />,
	document.getElementById('app')
    );
});
