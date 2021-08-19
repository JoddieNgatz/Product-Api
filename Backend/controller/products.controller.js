// CRUD Operations

var model = require('../models');
const product = model.prod;

//Creates a new product in the database
exports.createProduct = (req, res) => {
    const body = req.body;
    console.log(body);
    if (!body) {
        res.status(418).json('No product');
    }
    else {
        const produ = new product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
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
exports.findProduct = (req, res) => {
    let id = req.params.id;
    console.log(id);
    product.findOne({ _id: id }).then(data => {
        if (!data) {
            res.status(404).json({message:'Not Found' });
        } else {
            res.status(200).json({ products: data } );
        }
    }).catch((err) => {
        res
        .status(500)
        .send({ message: err });

    });
};

//Returns all products in the database as  { products: Product[] }
exports.returnAllProduct = (req, res) => {

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
exports.updateProduct = (req, res) => {
    let id = req.params.id;
    product.findOneAndUpdate({_id: id}).then(data => {
        if (!data) {
            res.status(404).json({message:'Not Found' });
        } else {
            res.status(200).json( {message: 'Modified!'});
        }
    }).catch((err) => {
        res
        .status(500)
        .send({ error: err });

    });
};

exports.deleteProduct = (req, res) => {
    let id = req.params.id;
    product.findOneAndDelete({_id:id}).then(data => {
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