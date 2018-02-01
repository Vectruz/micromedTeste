micromedProject.controller('PedidoRecordCtrl', function ($scope, $location, $routeParams, toastr, PedidosService, ProdutosService) {
	$scope.titulo = "Pedido";
	
	$scope.id = $routeParams.id;
	$scope.itemDoPedido = {};
	$scope.pedido = {};

	$scope.produtos = new ProdutosService();
	ProdutosService.query(
			function(data){
				$scope.produtos = data;
			},
			function(response){
			}
	);
	
	$scope.addToPedido = function() {
		if ($scope.itemDoPedido.valor && $scope.itemDoPedido.produto) {
			if (!$scope.pedido.itens) {
				$scope.pedido.itens = [];
			}
			console.log($scope.pedido.itens);
			$scope.pedido.itens.push($scope.itemDoPedido);
			$scope.itemDoPedido = {};
		}
	}
	
	$scope.pedido = new PedidosService();

	$scope.save = function() {
		if (!$scope.pedido._id) {
		$scope.pedido.$save({id: $scope.pedido.id},
				function(){
					$location.path("/pedidos");
				},
				function(response){
				}
			);
		} else {
			PedidosService.update({id: $scope.pedido._id}, $scope.pedido,
					function(){
						$location.path("/pedidos");
					},
					function(response){
					}
				);
		}
	}
	
	if($scope.id){		
		PedidosService.get({id: $scope.id},
			function(data){
				$scope.pedido = data;
			},
			function() {
			}
		);
	}
	
	$scope.goToHome = function () {
		$location.path("/home");
	};
	
	$scope.goToPedidos = function () {
		$location.path("/pedidos");
	};
});
