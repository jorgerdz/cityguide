'use strict';

//Negocios service used for communicating with the negocios REST endpoints
angular.module('negocios').factory('Negocios', ['$resource',
	function($resource) {
		return $resource('api/negocios/:negocioId', {
			negocioId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
