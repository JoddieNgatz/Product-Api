// CRUD Operations

var model = require('../models');
const product = model.prod;

//Creates a new product in the database
exports.createProduct = (req, res,next) => {
    const body = req.body;
    if (!body) {
        res.status(418).json('No product');
    }
    else {
        const produ = new product({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            userId: req.body.userId,
            inStock: req.body.instock
        });

        produ.save(produ).then((data) => {
            res.status(200).json({ product: data });
        }).catch((err) => {
            
            res.status(500).json({ message: err + 'Error Creating try again' });
        })
    }
};


//Returns the product with the provided  _id  as  { product: Product }
exports.findProduct = (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    product.findOne({ _id: id }).then(data => {
        if (!data) {
            res.status(404).json({error:'Not Found' });
        } else {
            res.status(200).json(data);
            console.log(data);
        }
    }).catch((err) => {
        res
        .status(500)
        .send({ error: err });

    });
};

//Returns all products in the database as  { products: Product[] }
exports.returnAllProduct = (req, res ,next) => {

    product.find().then(data => {
        if (!data) {
            res.status(404).json({message:'Not Found' });
        } else {
            res.status(200).json({ products: data } );
        }
    }).catch((err) => {
        res
        .status(500)
        .send({ error: err });

    });
};

//Returns all products in the database as  { products: Product[] }
exports.updateProduct = (req, res, next) => {
    let id = req.params.id;
    const produ = new product({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId,
        inStock: req.body.instock
    });
    product.UpdateOne({_id: id}, produ).then(data => {
        if (!data) {
            res.status(404).json({message:'Not Found' });
        } else {
            res.status(200).json( {message: 'Updated!'});
        }
    }).catch((err) => {
        res
        .status(500)
        .send({ error: err });

    });
};

exports.deleteProduct = (req, res, next) => {
    let id = req.params.id;
    product.deleteOne({_id:id}).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Not Found' });
        } else {
            res.status(200).json({ message: 'Deleted!'});
        }
    }).catch((err) => {
        res
        .status(500)
        .send({ error: err });

    });
};