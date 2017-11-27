var express = require('express')
var app = express()
var port = 5000

// Facebook
var randomstring = require('randomstring')
var FB = require('fb')
FB.setAccessToken('<TOKEN>')

app.get('/fb-post/:number', function (req, res) {
    var number_posts = req.params.number
    for (i=0; i<= number_posts; i++) {
        FB.api('me/feed', 'post', { message: randomstring.generate() }, function(response) {
            if (!response || response.error) {
                console.log(response.error)
                return
            }
            return
        })
    }
    res.send('Complete')
})


app.get('/test', function(req, res) {
    res.send('Hello');
})


app.listen(port)
console.log("App listening on port " + port)

module.exports = app
