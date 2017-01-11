var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path')//,  
// change to jade  exphbs = require('express-handlebars')

// To read POST data, we use the body-parser middleware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

// Tell the app that the templating engine is Handlebars.
// switch to jade app.engine('handlebars',
// switch to jade  // Pass default configuration to express-handlebars module.
//switch to jade  exphbs({
//switch to jade    defaultLayout: 'main'
//switch to jade  }))
app.set('views', './views')
// Tell the app that the view engine is also Handlebars.
app.set('view engine', 'jade') //change to jade

// Serve static files.

//switch to jade app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/public/css/'))
// redirect material-design-lite JS and CSS
//switch to jade app.use('/js/material.min.js', express.static(__dirname + '/node_modules/material-design-lite/dist/material.min.js'))
//switch to jade app.use('/css/material.min.css', express.static(__dirname + '/node_modules/material-design-lite/dist/material.min.css'))
app.use(express.static(path.join(__dirname, 'public')))

// Use the controllers.
app.use(require('./controllers'))

// Tell Express on which port to listen.
var port = Number(process.env.PORT || 8080)
app.listen(port, function() {
  console.log('listening on port ' + port)
})
