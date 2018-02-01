'use strict';

angular.module('appServices').factory('ProdutosService', function ($resource) {
	var resources = $resource('http://169.57.156.62:3003/api/produtos/:id',{
		id: '@id'
	},{
		'update': {method: 'PUT'}
	});
	return resources; 
});
