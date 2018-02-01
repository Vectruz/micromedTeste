micromedProject.controller('PedidosCtrl', function ($scope, $location, $rootScope, $window, PedidosService) {
	$scope.titulo = "Pedidos";

	$scope.newPedido = function(){
		$location.path('/pedido');
	};
	
	$scope.pedidoRecord = function(id) {
		if (!id) {
			$location.path('/pedido');
		} else {
			$location.path('/pedido/' + id);
		}
	}
	
	$scope.pedidoDisable = function(id) {
		var pedido = PedidosService.get({id: id},
				function(data){
					pedido = data;
					pedido.pedidoUsers = [];
					pedido.disabled = true;
					pedido.$save({id: pedido.id},
							function(){
								$window.location.reload();
							},
							function(response){
							}
					);
				});
	}

	$scope.pedidos = new PedidosService();
	PedidosService.query(
			function(data){
				$scope.pedidos = data;
				for (var i = 0; i < $scope.pedidos.length; i++) {
					var time = new Date($scope.pedidos[i].time);
					var textDate = time.getFullYear() + '/';
					if ((time.getMonth()+1) < 10) {
						textDate += '0';
					}
					textDate += time.getMonth()+1 + '/';
					if (time.getDate() < 10) {
						textDate += '0';
					}
					textDate += time.getDate() + ' at ';
					if (time.getHours() < 10) {
						textDate += '0';
					}
					textDate += time.getHours() + ':';
					if (time.getMinutes() < 10) {
						textDate += '0';
					}
					textDate += time.getMinutes();
					$scope.pedidos[i].textDate = textDate;
				}
			},
			function(response){
			}
	);
});
