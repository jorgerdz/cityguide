'use strict';

// Setting up route
angular.module('negocios').config(['$stateProvider',
	function($stateProvider) {
		// Negocios state routing
		$stateProvider.
		state('negocios', {
			abstract: true,
			url: '/negocios',
			template: '<ui-view/>'
		}).
		state('negocios.list', {
			url: '',
			templateUrl: 'modules/negocios/views/list-negocio.client.view.html'
		}).
		state('negocios.create', {
			url: '/create',
			templateUrl: 'modules/negocios/views/create-negocio.client.view.html'
		}).
		state('negocios.view', {
			url: '/:negocioId',
			templateUrl: 'modules/negocios/views/view-negocio.client.view.html'
		}).
		state('negocios.edit', {
			url: '/:negocioId/edit',
			templateUrl: 'modules/negocios/views/edit-negocio.client.view.html'
		});
	}
]);
