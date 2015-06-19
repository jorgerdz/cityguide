'use strict';

/**
 * Module dependencies.
 */
var negociosPolicy = require('../policies/negocios.server.policy'),
	negocios = require('../controllers/negocios.server.controller');

module.exports = function(app) {
	// Negocios collection routes
	app.route('/api/negocios').all(negociosPolicy.isAllowed)
		.get(negocios.list)
		.post(negocios.create);

	// Single negocio routes
	app.route('/api/negocios/:negocioId').all(negociosPolicy.isAllowed)
		.get(negocios.read)
		.put(negocios.update)
		.delete(negocios.delete);

	// Finish by binding the negocio middleware
	app.param('negocioId', negocios.negocioByID);
};
