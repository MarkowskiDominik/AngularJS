angular.module('app.booksList', ['ngRoute', 'ui.bootstrap', 'app.component1.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/component-1/dialog-a', {
            templateUrl: 'component-1/dialog-a/dialog-a.html',
            controller: 'booksListController',
            resolve: {
                books: function($http){
                    return $http.get('/component-1/books.json');
                }
            }
        });
    });
