var app = angular.module('app', []);

app.directive('fooBar', function(){
    var bookmarks = [
        { id: 1, name: 'AngularJS'},
        { id: 2, name: 'EmberJS'},
        { id: 3, name: 'ReactJS'}
    ];

    return {
        template: "<div ng-repeat='b in myBookmarks'>{{b.name}}</div>",
        link: function(scope, element, attrs){
            console.log('fooBar');
            scope.name = "Sasha";
            scope.myBookmarks = bookmarks;
        }
    };
});