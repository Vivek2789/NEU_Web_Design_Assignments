const User = require('../model/user');
const emailValidator = require("email-validator");
const passwordValidator = require('password-validator');
const passwordPattern = new passwordValidator();

exports.createUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const error = [];

    if(firstName == "") {
        error.push("Please enter first name");
    }
    if(lastName == "") {    
        error.push("Please enter last name");
    }

    const validEmail = emailValidator.validate(req.body.userName);

    if(!validEmail) {
        error.push("Email format is invalid");
    }

    passwordPattern.is().min(8)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits()
        .has().not().spaces();

    const validPassword = passwordPattern.validate(req.body.password);

    if(!validPassword) {
        error.push("Password format is invalid");
    }

    const userValidation = new Promise((resolve, reject) => {
        if (error.length == 0) {
            resolve(200);
        } else {
            reject(400);
        }
    });

    userValidation.then((value) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password
        });
        user.save().
        then(() => {
            res.status(value).json({
                'message': ['User successfully created']
            });
        }).catch(() => {
            res.status(400).json({
                'message': ['User already exists']
            });
        });
    }).catch((err) => {
        res.status(err).json({
            'message': error
        });
    });
};

exports.login = (req, res) => {
    User.findOne({
        userName: req.body.userName,
        password: req.body.password
    }, (err, arr) => {
        if (err || arr == null) {
            res.status(400).json({
                'message': ['Username or password is invalid']
            });
            return;
        }

        res.status(200).json({
            'user' : arr,
            'message': 'Login successful'
        });
    });
};

exports.updateUser =(req,res)=>{

    const data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        userName : req.body.userName,
        password : req.body.password,
       
    };
    User.findOneAndUpdate({userName:req.params.userName},{$set:req.body},function (err, user) {
        console.log(user);
        if (err) return next(err);
        res.send({            'message': 'Login successful'
    });
    });


}