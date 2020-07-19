var express = require('express');
var app = express();

var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var routes = require('./controllers/burger_controller.js');

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//Setting handlebar engines
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

//Start of server
app.listen(PORT, function() {
	console.log('Server listening on: http://localhost:' + PORT);
});
