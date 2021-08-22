
var model = require('../models');
const user = model.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//Users
//Creates a new user in the database
exports.register= (req, res,next) => {
    const body = req.body;
    if (!body) {
        res.status(418).json('No user details');
    }
    else {
        const usr = new user({
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 4),
        });

        usr.save(usr).then((data) => {
            res.status(200).json({ message:`${req.body.email} registered in` });
        }).catch((err) => {
            
            res.status(500).json({ message: err + 'Error Creating try again' });
        })
    }
};


//Returns the product with the provided  _id  as  { product: Product }
exports.login = (req, res, next) => {
  let email = req.body.email;
  if (email.includes('@')) { //checks if email is valid   
      user.findOne({
          email: req.body.email
      }).exec((err, user) => {
          if (err) {
              res.status(500), json({ message: err });
              return;
          }
          if (!user) {
              res.status(404).json({ message: "User Not Found. Register" })
          }

          var passwordValid = bcrypt.compareSync(
              req.body.password,
              user.password
          );
          if (!passwordValid) {
              res.status(401).json({
                  message: 'Invalid Passowrd'
              });
          } else {
            const token = jwt.sign(
              { userId: user._id },
              'JNM Product backend',
              { expiresIn: '4h' });
              res.status(200).json({
                  message: "Logged In",
                  name: user.email,
                  token: token,
              });
          }
      });
  } else {
      res.status(400).json({ message: "Not an email" });
  }


};