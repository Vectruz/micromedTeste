micromedProject.controller('MainCtrl', function MainCtrl($scope, $location) {
	$scope.goToHome = function () {
		$location.path("/home");
	};
	$scope.goToProdutos = function () {
		$location.path("/produtos");
	};
	$scope.goToPedidos = function () {
		$location.path("/pedidos");
	};
});
