var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // to avoid needing to serve individual styles, look into serving from a public directory
    // https://expressjs.com/en/starter/static-files.html
    // there were some examples in class activities last week IIRC
    app.get("/style.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/style.css"));
    });

    app.get("/images/goldenRetriever.jpg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/images/goldenRetriever.jpg"));
    });

    app.get("/survey/images/goldenRetriever.jpg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/images/goldenRetriever.jpg"));
    });


    app.get("/public/images/doggo.jpg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/images/doggo.jpg"));
    });

    app.get("/public/images/pupper.jpg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/images/pupper.jpg"));
    });

    app.get("/public/images/floof.png", function(req, res){
        res.sendFile(path.join(__dirname, "../public/images/floof.png"));
    });

    // app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    //   });

};
