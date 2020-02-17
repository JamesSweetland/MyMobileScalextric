(function () {

    'use strict';

    var app = angular.module('app.loseState');

    app.controller('loseCtrl', winCtrl);

    loseCtrl.$inject = [];

    function loseCtrl() {
        var vm = angular.extend(this, {});
        return vm;
    }

})();

