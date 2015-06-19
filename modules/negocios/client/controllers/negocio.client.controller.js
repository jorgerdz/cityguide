'use strict';

angular.module('negocios').controller('NegociosController', ['$scope', '$stateParams', '$location', 'Authentication', 'Negocios', '$http',
	function($scope, $stateParams, $location, Authentication, Negocios, $http) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var negocio = new Negocios({
				title: this.title,
				content: this.content,
				addresses : [{
					address: this.address
				}],
				phones :  [{
					phone : this.phone,
					kind : 'Main'
				}],
				category : this.category,
				url : this.url,
				coordinates : [{
					x : this.x,
					y : this.y
				}],
				priority : this.priority,
				featured : this.featured

			});
			negocio.$save(function(response) {
				$location.path('negocios/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(negocio) {
			if (negocio) {
				negocio.$remove();

				for (var i in $scope.negocios) {
					if ($scope.negocios[i] === negocio) {
						$scope.negocios.splice(i, 1);
					}
				}
			} else {
				$scope.negocio.$remove(function() {
					$location.path('negocios');
				});
			}
		};

		$scope.update = function() {
			var negocio = $scope.negocio;

			negocio.$update(function() {
				$location.path('negocios/' + negocio._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.negocios = Negocios.query();
		};

		$scope.findOne = function() {
			$scope.negocio = Negocios.get({
				negocioId: $stateParams.negocioId
			});
		};
	}
]);
