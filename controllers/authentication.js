const jwt = require('jwt-simple');
const User= require('../models/user');
const{ secret } = require('../config/keys');

function tokenForUser(user){
    const timeStamp = new Date().getTime();

    return jwt.encode({
        uid: user.id,
        ts: timeStamp
    }, secret);
}

exports.signup = (req, res, next) => {
    const { email, password, username } = req.body;

    if(!email || !password || !username){
        const output = [];

        if(!email){
            output.push('No email found');
        }

        if(!password){
            output.push('No password found');
        }

        if(!username){
            output.push('No username found');
        }

        return res.status(422).send(output);
    }

    User.findOne({email}, (err, existingUser) => {
        if(err) return next(err);

        if(existingUser) {
            return res.status(422).send(['Email already in use']);
        }

        const newUser = new User({email, username, password});

        newUser.save(err =>{
            if(err) return next(err);

            res.send({
                username,
                token: tokenForUser(newUser)
            });
        });
    });
}

exports.signin = (req, res, next) => {
    res.send({
        username: req.user.username,
        token: tokenForUser(req.user)
    });
}

