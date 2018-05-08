
var friends = require("../data/friends.js");
var matchFriends = require("../data/match.js")

module.exports = function(app) {
    app.get("/api/friends", function (req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        friends.push(req.body);

        // store the returned value from the matchFriends function in a variable
        var bestMatch = matchFriends(friends);
        // pass that variable as the information being returned after the promise is fulfilled in the AJAX post request
        res.json(bestMatch);

    });
};
