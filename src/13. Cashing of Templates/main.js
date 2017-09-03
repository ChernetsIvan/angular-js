var app = angular.module('app', []);

app.run(function($templateCache){
    $templateCache.put('bookmarks.html', 
        '<div ng-repeat="b in bookmarks">{{b.name}}</div>')
});

app.directive('fooBar', function($templateCache){
    var bookmarks = [
        {id: 1, name: 'EmberJS'},
        {id:2, name:'AngularJS'},
        {id:3, name:'ReactJS'}
    ];

    return{
        restrict: 'E',
        templateUrl: "bookmarks.html",
        link: function(scope, element, attrs){
            console.log('directive');
            scope.bookmarks = bookmarks;
            console.log($templateCache.info());
        }
    };
}); 