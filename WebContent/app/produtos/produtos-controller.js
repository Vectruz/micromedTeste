micromedProject.controller('ProdutosCtrl', function ($scope, $location, $rootScope, $window, toastr, ProdutosService) {
	$scope.titulo = "Produtos";
	
	$scope.produtoRecord = function(id) {
		if (!id) {
			$location.path('/produto');
		} else {
			$location.path('/produto/' + id);
		}
	}

	$scope.produtos = new ProdutosService();
	ProdutosService.query(
			function(data){
				$scope.produtos = data;
			},
			function(response){
			}
	);
});
