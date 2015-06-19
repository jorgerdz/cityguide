'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Negocio Schema
 */
var NegocioSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	addresses: [{
		address : {
			type: String,
			default: ''
		}	
	}],
	phones: [{
		phone : {
			type: String,
			default: '',
			trim: true
		},
		kind: {
			type: String,
			default: '',
			trim: true
		}
	}],
	promos : [{
		title: {
			type: String,
			default: '',
			trim: true
		},
		body : {
			type: String
		},
		img : {
			type : String
		}
	}],
	category: {
		type: String,
		default: '',
		trim: true,
		required: 'Category cannot be blank'
	},
	coordinates : [{
		x: {
			type: String,
			default: '',
			trim: true
		},
		y: {
			type: String,
			default: '',
			trim: true
		}
	}],
	url : {
		type : String,
		trim: true
	},
	images : [{
		kind: {
			type: String,
			default: '',
			trim: true
		},
		src: {
			type: String,
			default: '',
			trim: true
		}
	}],
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	priority : {
		type : Number,
		default : 1
	},
	featured : {
		type : Boolean,
		default : false
	}

});

mongoose.model('Negocio', NegocioSchema);
