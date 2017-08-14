const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override')

const burgersRoute = require('./controllers/burgers_controller');

let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));

app.use('/', burgersRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});