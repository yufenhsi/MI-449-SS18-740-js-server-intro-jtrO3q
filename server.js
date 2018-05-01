// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Home</h1>' + 'Welcome to my site!!')
  } else if (request.url === '/random-joke') {
    var randomNumber = Math.random()
    if (randomNumber > 0.7) {
      response.end('<h1>New Jokes</h1>' + 'Knock knock.' + 'Who\'s there?' + 'The door.' + '<a href="/">Back to Homepage</a>')
    } else if (randomNumber > 0.5) {
      response.end('<h1>New Jokes</h1>' + 'Knock knock.' + 'Who\'s there?' + 'Double.' + 'Double who?' + 'W!' + '<a href="/">Back to Homepage</a>')
    } else if (randomNumber > 0.3) {
      response.end('<h1>New Jokes</h1>' + 'Knock knock.' + 'Who\'s there?' + 'No-one.' + 'No-one who?(Remain silent)' + '<a href="/">Back to Homepage</a>')
    }
  } else if (request.url === '/cuteness') {
    response.end('<h1>Pictures</h1>' + '<img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny8wNzQvb3JpZ2luYWwvbW9ua2V5LWNvdW50aW5nLmpwZw==" alt="Waving hi">' + '<a href="/">Back to Homepage</a>')
  } else {
    response.end('<h1>Page Not Found</h1>' + 'The requested URL /secret-plan-to-take-over-the-world was not found on this server.' + '<a href="/">Back to Homepage</a>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)
// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
