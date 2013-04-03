define([
    'jquery',
    'underscore',
    'backbone',
    'views/sidebar/SidebarView',
    'models/project/ProjectModel',
    'collections/projects/ProjectsCollection',
    'views/projects/ProjectsListView',
    'text!templates/projects/projectsTemplate.html'
    ], function($, _, Backbone, SidebarView, ProjectModel, ProjectsCollection, ProjectsListView, projectsTemplate){

        var ProjectsView = Backbone.View.extend({
            el: $("#page"),
            render: function(){
                $('.menu li').removeClass('active');
                $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
                this.$el.html(projectsTemplate);
                
                var miUrl='https://github.com/thomasdavis/backbonetutorials/tree/', aProjects=[];
                aProjects.push(
                    new ProjectModel({title:'Cross Domain'                 , url:miUrl+'gh-pages/examples/cross-domain'}), 
                    new ProjectModel({title:'Infinite Scroll'              , url:miUrl+'gh-pages/examples/infinite-scroll'}),
                    new ProjectModel({title:'Modular Backbone'             , url:miUrl+'gh-pages/examples/modular-backbone'}),
                    new ProjectModel({title:'Node MongoDB Mongoose Restify', url:miUrl+'gh-pages/examples/nodejs-mongodb-mongoose-restify'}),
                    new ProjectModel({title:'Todo App'                     , url:miUrl+'gh-pages/examples/todo-app'})
                );

                var projectsCollection = new ProjectsCollection(aProjects);  
                var projectsListView = new ProjectsListView({collection: projectsCollection}); 
      
                projectsListView.render(); 

                // add the sidebar 
                var sidebarView = new SidebarView();
                sidebarView.render();

            }
        });

        return ProjectsView;
    });
