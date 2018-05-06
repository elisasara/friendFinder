var friends = require("../data/friends");

// compare the array of scores to other friends

function matchFriends(newFriend) {
    var bestMatch = "";
    var smallestDiff = 40;
    for (var i = 0; i < friends.length; i++) {
        if (newFriend.name != friends[i].name) {
            var totalDiff = 0;
            // create a second for loop that goes through the values of the scores
            for (var j = 0; j < friends.scores.length; j++) {
                // find the absolute value of the difference for the user's scores and the friends
                var diff = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                totalDiff += diff;

                console.log("total difference: " + totalDiff);
            };
            // create an if statement to assess if that friend has the lowest value, store into appropriate variable
            if (totalDiff < smallestDiff) {
                smallestDiff = totalDiff;
                bestMatch = friends[i].name;
            };
        };
    };

    console.log("Best Match: " + bestMatch);
    console.log("Smallest difference: " + smallestDiff);

}

// best match gets displayed on a modal
// after going through all friends export the result to be used for the modal

module.exports = matchFriends;