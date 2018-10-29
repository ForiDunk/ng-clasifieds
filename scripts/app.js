angular
    .module("ngClassifieds", ["ngMaterial", "ui.router"])
    .config(function($mdThemingProvider, $stateProvider, $locationProvider) {

        $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('orange');

        $stateProvider
            .state('one', {
                url: '/stateone',
                template: '<h1>{{ stateone.message }}</h1>',
                controller: 'stateOneCtrl as stateone'
            })
            .state('two', {
                url: '/statetwo',
                template: '<h1>State Two</h1> <md-button ui-sref="two.more">go nested state</md-button> <ui-view></ui-view>'
            })
            .state('two.more', {
                url: '/more',
                template: '<p>This is the deeper state</p>'
            });

        $locationProvider.hashPrefix('');
    })
    .controller('stateOneCtrl', function() {
        var vm = this;
        vm.message = 'Hello from state one controller';
    });