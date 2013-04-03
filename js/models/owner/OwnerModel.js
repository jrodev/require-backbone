define([
    'underscore', 'backbone',
    ], function(_, Backbone){

    var OwnerModel = Backbone.Model.extend({
        defaults  : { query:"unknown" },  
        initialize: function( options ){ this.query=options.query },
        url       : function(){ return 'https://api.github.com/users/' + this.query },
        parse     : function(res) { return res.data } // because of jsonp 
    });

    return OwnerModel;

});
