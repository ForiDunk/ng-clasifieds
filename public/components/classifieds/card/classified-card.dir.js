(function() {

    "use strict";
    angular
        .module("ngClassifieds")
        .directive('classifiedCard', function() {
            return {
                templateUrl:'components/classifieds/card/classified-card.tpl.html',
                scope: {
                    classifieds: '=classifieds',
                    classifiedsFilter: '=classifiedsFilter',
                    category: '=category'
                },
                controller: classifiedCardController,
                controllerAs: 'vm'
            };

            function classifiedCardController($state, $scope, $mdToast, $mdDialog, classifiedsFactory) {

                var vm = this;
                vm.deleteClassfied = deleteClassfied;
                vm.editClassified = editClassified;
                vm.classifieds = classifiedsFactory.ref;

                function editClassified(classified) {
                    $state.go('classifieds.edit', {
                        id: classified.$id
                    });
                };

                function deleteClassfied(event, classified) {
                    var confirm = $mdDialog.confirm()
                        .title("Are you sure you want to delete " + classified.title + '?')
                        .ok('Yes')
                        .cancel('No')
                        .targetEvent(event);
                    $mdDialog.show(confirm).then(function() {
                        vm.classifieds.$remove(classified);
                        showToast('Classified deleted!!');
                    }, function() {/* to do when the user clicks 'No' */});
                };

                function showToast(message) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content(message)
                            .position('top, right')
                            .hideDelay(3000)
                    );
                };
    
            }
        });
})();