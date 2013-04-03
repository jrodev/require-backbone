// Filename: app.js
define([
    'jquery', 'underscore', 'backbone', 'router', // Request router.js
    ], function($, _, Backbone, Router){
        var initialize = function(){
            Router.initialize(); // Pass in our Router module and call it's initialize function
        };
        return { initialize: initialize };
    });
