'use strict';

// Configuring the Articles module
angular.module('negocios').run(['Menus',
	function(Menus) {
		// Add the negocios dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Negocio',
			state: 'negocio',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'negocio', {
			title: 'Listado de Negocios',
			state: 'negocios.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'negocio', {
			title: 'Crear Negocio',
			state: 'negocios.create'
		});
	}
]);
