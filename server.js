const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');

let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));

app.get('/', function (req, res) {
    res.render('index');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});