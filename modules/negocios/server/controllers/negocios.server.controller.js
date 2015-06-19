'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
	mongoose = require('mongoose'),
	Negocio = mongoose.model('Negocio'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a negocio
 */
exports.create = function(req, res) {
	var negocio = new Negocio(req.body);
	negocio.user = req.user;

	negocio.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(negocio);
		}
	});
};

/**
 * Show the current negocio
 */
exports.read = function(req, res) {
	res.json(req.negocio);
};

/**
 * Update a negocio
 */
exports.update = function(req, res) {
	var negocio = req.negocio;

	negocio.title = req.body.title;
	negocio.content = req.body.content;

	negocio.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(negocio);
		}
	});
};

/**
 * Delete an negocio
 */
exports.delete = function(req, res) {
	var negocio = req.negocio;

	negocio.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(negocio);
		}
	});
};

/**
 * List of Negocios
 */
exports.list = function(req, res) {
	Negocio.find().sort('-created').populate('user', 'displayName').exec(function(err, negocios) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(negocios);
		}
	});
};

/**
 * Negocio middleware
 */
exports.negocioByID = function(req, res, next, id) {
	Negocio.findById(id).populate('user', 'displayName').exec(function(err, negocio) {
		if (err) return next(err);
		if (!negocio) return next(new Error('Failed to load negocio ' + id));
		req.negocio = negocio;
		next();
	});
};
