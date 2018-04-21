
var friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);

    });

    app.post('/api/friends', function (req, res) {
        var lowestDifference = 100000;
        var bestMatch;
        var newFriend = req.body;

        for (let j = 0; j < friends.length; j++) {
            const currentFriend = friends[j];
            var currentScore = 0;

            for (var i = 0; i < newFriend.score.length; i++) {
 
                currentScore += Math.abs(parseInt(newFriend.score[i]) - parseInt(currentFriend.score[i]));
            };


            if(currentScore < lowestDifference){
                lowestDifference = currentScore;
                bestMatch = currentFriend;
            }
        }

        friends.push(newFriend);
        res.json(bestMatch);
    })
};