const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');


//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://arif:arif1234@clusterx.mzj4i.gcp.mongodb.net/ClusterX?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
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


app.get('/', (req, res) => {
    res.render('index');
});


//userRoutes
app.use('/users', userRoutes);


