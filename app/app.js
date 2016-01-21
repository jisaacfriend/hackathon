(function() {

	var app = angular.module('hackathon', []);

	app.controller('submitVin', ['$scope','$http', function($scope, $http) {

		console.log("in our controller");
		$scope.vin = "";

		$scope.showData = function() {
			console.log("it ran");
			$scope.vinVehicles = "";
			var url = "/api/vehicles/"+$scope.vin;

			$http.get(url).success( function(response) {
				$scope.vinVehicles = response;
				console.log($scope.vinVehicles);
			}).error( function() {
				$scope.vinVehicles = "No VIN by that number. Such Fail!";
				console.log($scope.vinVehicles);
			});
		};

	}]);

})();