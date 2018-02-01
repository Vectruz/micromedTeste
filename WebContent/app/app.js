angular.module('appControllers', ['ngRoute', 'ngAnimate', 'toastr']);
angular.module('appServices', ['ngResource']);

var micromedProject = angular.module('micromedProject', [
	'appControllers',
	'appServices',
	'ngAnimate',
	'toastr'
]);

micromedProject.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'app/home/home.html',
		controller: 'HomeCtrl',
	})
	
	.when('/produtos', {
		templateUrl: 'app/produtos/produtos.html',
		controller: 'ProdutosCtrl',
	})
	.when('/produto', {
		templateUrl: 'app/produtos/produto-record.html',
		controller: 'ProdutoRecordCtrl',
	})
	.when('/produto/:id', {
		templateUrl: 'app/produtos/produto-record.html',
		controller: 'ProdutoRecordCtrl',
	})
	
	
	.when('/pedidos', {
		templateUrl: 'app/pedidos/pedidos.html',
		controller: 'PedidosCtrl',
	})
	.when('/pedido', {
		templateUrl: 'app/pedidos/pedido-record.html',
		controller: 'PedidoRecordCtrl',
	})
	.when('/pedido/:id', {
		templateUrl: 'app/pedidos/pedido-record.html',
		controller: 'PedidoRecordCtrl',
	})
	
	.otherwise ({ redirectTo: '/home' });
});
