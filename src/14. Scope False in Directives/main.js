var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
    console.log('ctrl scope', $scope);
    $scope.posts = [
        {name: "Cats"},
        {name: "Dogs"}
    ];
    
    $scope.getPosts = function(){
        return $scope.posts;
    }
});

app.directive('post', function(){
    return {
        scope: false,
        template: "<div ng-repeat='p in getPosts()'>{{p.name}}</div>",
        link: function(scope, element, attrs){
            console.log('scope', scope);
        }
    };
});