micromedProject.controller('HomeCtrl', function ($scope, $location, $rootScope) {
	$scope.goToProdutos = function () {
		$location.path("/produtos");
	};

	$scope.goToPedidos = function () {
		$location.path("/pedidos");
	};
});
