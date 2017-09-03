var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
    this.myLesson = "Main Lesson";

    this.addLesson = function(){
        console.log("Add Lesson clicked!");
    };

    $scope.mainCtrl = this;
});

app.controller('firstCtrl', function(){
    this.myLesson = "First Lesson";
});

app.controller('secondCtrl', function(){
    this.myLesson = "Second Lesson";
});