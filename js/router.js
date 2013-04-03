// Filename: router.js
define([
    //Dependencias principales
    'jquery', 'underscore', 'backbone',
    //----- Vistas
    //'views/home/HomeView',
    //'views/projects/ProjectsView',
    //'views/contributors/ContributorsView',
    //'views/footer/FooterView'
    ], function($, _, Backbone, HomeView, ContributorsView, FooterView) {
  
        var AppRouter = Backbone.Router.extend({
            routes: {
                'projects': 'showProjects',     // Define some URL routes
                'users'   : 'showContributors', // Define some URL routes
                '*actions': 'defaultAction'     // Default
            }
        });
  
        var initialize = function(){

            var app_router = new AppRouter;
    
            app_router.on('route:showProjects', function(){
                // Call render on the module we loaded in via the dependency array
                require(['views/projects/ProjectsView'], function(ProjectsView){
                    (new ProjectsView()).render(); console.log('_render projects!!!');
                });
                //var projectsView = new ProjectsView(); projectsView.render();
            });

            app_router.on('route:showContributors', function () {
                // Like above, call render but know that this view has nested sub views which 
                // handle loading and displaying data from the GitHub API  
                require(['views/contributors/ContributorsView'], function(ContributorsView){ new ContributorsView() });
                //var contributorsView = new ContributorsView(); console.log('showContributors: contributorsView', contributorsView);
            });

            app_router.on('route:defaultAction', function (actions) {
                // We have no matching route, lets display the home page //console.log('No tenemos ninguna ruta coincidente, vamos a mostrar la página de inicio')
                require(['views/home/HomeView'], function(HomeView){
                    (new HomeView()).render(); console.log('_render Home!!!');
                });
                //var homeView = new HomeView(); homeView.render();
            });

            // Unlike the above, we don't call render on this view as it will handle the render call internally after it loads data. 
            // Further more we load it outside of an on-route function to have it loaded no matter which page is loaded initially.
            require(['views/footer/FooterView'], function(FooterView){ new FooterView() });
            //var footerView = new FooterView(); console.log('footerView:',footerView);
            Backbone.history.start();
        };
        return { initialize: initialize };
    });
