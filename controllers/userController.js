const User = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcryptjs');
//const flash = require('flash');

//const router = require('../routes/userRoutes');

const user_index = (req, res) => {
    res.send('hellohome');
}
//register

const user_register_get = (req, res) => {
    res.render('users/register');
}


const user_register_post = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const contact = req.body.contact;
    const budget = req.body.budget;
    // const user = new User(req.body);
    // user.save()
    //     .then((result) => {
    //         res.redirect('/users/login');
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    // req.checkBody('password', 'password is required').notEmpty();
    // req.checkBody('password2', 'Passwords do not match').equals(res.body.password);

    //let errors = req.validationErrors();    

    let newUser = new User({
        name: name,
        email: email,
        username: username,
        password: password,
        contact: contact,
        budget: budget
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash('newUser.password', salt, (err, hash) => {
            if (err) {
                console.log(err);
            }
            newUser.password = hash;
            newUser.save((err) => {
                if (err) {
                    console.log(err);
                    return;
                } else {


                    res.redirect('/users/login');

                }

            });
        });
    });

}


//Login Form
const login = (req, res) => {
    res.render('users/login');
}

//Login process
const login_post = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        //failureFlash: true
    })(req, res, next);
}

module.exports = {
    user_register_get,
    user_register_post,
    login,
    login_post,
    user_index
}