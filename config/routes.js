module.exports = function(app) {

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);
	app.get('/graph', home.graph);
	app.post('/', home.create);
};
