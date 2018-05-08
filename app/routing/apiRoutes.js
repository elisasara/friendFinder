
var friends = require("../data/friends.js");
var matchFriends = require("../data/match.js")

module.exports = function(app) {
    app.get("/api/friends", function (req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        friends.push(req.body);
        // res.json(friends);

        var bestMatch = matchFriends(friends);
        res.json(bestMatch);

        // matchFriends.matchFriends(friends);
    });
};
