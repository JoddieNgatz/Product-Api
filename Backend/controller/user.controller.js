
var model = require('../models');
const user = model.user;
//Users
//Creates a new user in the database
exports.register= (req, res,next) => {
    const body = req.body;
    if (!body) {
        res.status(418).json('No user details');
    }
    else {
        const usr = new user({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            userId: req.body.userId,
            inStock: req.body.instock
        });

        user.save(usr).then((data) => {
            res.status(200).json({ product: data });
        }).catch((err) => {
            
            res.status(500).json({ message: err + 'Error Creating try again' });
        })
    }
};


//Returns the product with the provided  _id  as  { product: Product }
exports.login = (req, res, next) => {
    let email= req.body.email;
    user.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(401).json({
              error: new Error('User not found!')
            });
          }
          bcrypt.compare(req.body.password, user.password).then(
            (valid) => {
              if (!valid) {
                return res.status(401).json({
                  error: new Error('Incorrect password!')
                });
              }
              res.status(200).json({
                userId: user._id,
                token: 'token'
              });
            }
          ).catch(
            (error) => {
              res.status(500).json({
                error: error
              });
            }
          );
        }).catch((err) => {
        res
        .status(500)
        .send({ error: err });

    });
};