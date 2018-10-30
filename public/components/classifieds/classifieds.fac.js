(function(){

    'use strict';

    angular
        .module('ngClassifieds')
        .factory('classifiedsFactory', function($http, $firebaseArray){

            var ref = new Firebase('https://ngclassifieds-5d475.firebaseio.com/');
            
            return {
                ref: $firebaseArray(ref)
            };
        });
})();