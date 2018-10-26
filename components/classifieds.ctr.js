(function() {

    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {

            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.classifieds = classifieds.data;
            });

            var contact = {
                name: 'Szabolcs Forreiter',
                phone: '(555) 555-5555',
                email: 'theresa@onmynose.com'
            };

            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            };
            $scope.closeSidebar = function() {
                $mdSidenav('left').close();
            };
            $scope.saveClassified = function(classified) {
                if(classified) {
                    classified.contact = contact;
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    $mdToast.show(
                        $mdToast.simple()
                            .content("Classified Saved!")
                            .position('top, right')
                            .hideDelay(3000)
                    );
                }
            };
        });
})();