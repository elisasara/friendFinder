var friends = require("../data/friends");

// compare the array of scores to other friends

function matchFriends() {
    // the current user will always be the last object added to the friends array
    var currentUser = friends[friends.length - 1]
    var bestMatch = "";
    var smallestDiff = 40;

    // for loop for length of friends minus one so that it does not include the current user
    for (var i = 0; i < friends.length -1; i++) {
            // set a base value for the total difference
            var totalDiff = 0;

            // a nested for loop goes through the values of the scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                // find the absolute value of the difference for the user's scores and the friends.
                var diff = Math.abs(currentUser.scores[j] - friends[i].scores[j]);
                // add the difference of each score together
                totalDiff += diff;

                console.log("total difference: " + totalDiff);
            };
            // assess if that friend has the lowest value, store into appropriate variable
            if (totalDiff < smallestDiff) {
                smallestDiff = totalDiff;
                bestMatch = friends[i];
            };

    };

    return bestMatch;

}

module.exports = matchFriends;