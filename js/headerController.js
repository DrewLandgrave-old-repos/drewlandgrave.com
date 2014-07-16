myApp.controller('NavController', function ($scope) {
    $scope.navs = [
        { title: 'Home', container: 'homeContainer', icon: 'home'},
        { title: 'About', container: 'aboutContainer', icon: 'account-circle'},
        { title: 'Polymer Examples', container: 'polymerContainer', icon: 'polymer'}
    ]
});