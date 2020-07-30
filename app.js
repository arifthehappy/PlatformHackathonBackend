const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const passport = require('passport');
const config = require('./config/database');
//const flash = require('flash');



//express app
const app = express();

//connect to mongodb
const dbURI = config.database;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => {
        console.log('connected to db');
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

//register view engines
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Passport Config
require('./config/passport')(passport);

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// Home route
app.get('/', (req, res) => {
    res.render('index');
});


//userRoutes
app.use('/users', userRoutes);


