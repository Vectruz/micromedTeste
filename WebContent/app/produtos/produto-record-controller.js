micromedProject.controller('ProdutoRecordCtrl', function ($scope, $location, $routeParams, toastr, ProdutosService) {
	$scope.titulo = "Produto";
	
	$scope.id = $routeParams.id;
	
	$scope.produto = new ProdutosService();

	$scope.save = function() {
		if(!$scope.produto._id) {
		$scope.produto.$save({id: $scope.produto._id},
				function(){
					$location.path("/produtos");
				},
				function(response){
				}
			);
		} else {
			ProdutosService.update({id: $scope.produto._id}, $scope.produto,
				function(){
					$location.path("/produtos");
				},
				function(response){
				}
			);
		}
	}
	
	if($scope.id){		
		ProdutosService.get({id: $scope.id},
			function(data){
				$scope.produto = data;
			},
			function() {
			}
		);
	}
	
	$scope.goToHome = function () {
		$location.path("/home");
	};
	
	$scope.goToProdutos = function () {
		$location.path("/produtos");
	};
});
