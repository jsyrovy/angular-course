(function () {
  var CustomersController = function ($scope, customersService, appSettings) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
      $scope.customers = customersService.getCustomers();
    }

    init();

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersService", "appSettings"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
