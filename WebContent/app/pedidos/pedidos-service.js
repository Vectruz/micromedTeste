'use strict';

angular.module('appServices').factory('PedidosService', function ($resource) {
	var resources = $resource('http://169.57.156.62:3003/api/pedidos/:id',{
		id: '@id'
	},{
		'update': {method: 'PUT'}
	});
	return resources; 
});
