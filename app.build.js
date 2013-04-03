({
    appDir: "../",
    baseUrl: "js",
    dir: "../../requireJS",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS.
    optimize: "none",

    paths: {
        "myLib": "application/library/myLib"
    },

    modules: [
        {
            name: "main",
            exclude: ["jquery"]
        }
    ]
})