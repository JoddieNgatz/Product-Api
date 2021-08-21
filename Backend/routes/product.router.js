

    const express = require('express');

    const router = express.Router();
    const controller = require('../controller/products.controller');
    
// const router = express.Router();
    
    console.log('in routes')

    
    //create profile
    
    /**
     * @method - GET
     * @param - /
     * @description - Returns all products in the database as  { products: Product[] }
     */
     router.get("/", controller.returnAllProduct);

    
    
    //create profile
    
    /**
     * @method - Get
     * @param - /id
     * @description - Returns the product with the provided  _id  as  { product: Product }
     */
    router.get("/:id ", controller.findProduct);

    //create profile
    
    /**
     * @method - POST
     * @param - /
     * @description - Creates a new product in the database
     */
     router.post("/", controller.createProduct);



        /**
     * @method - PUT
     * @param - /
     * @description - Updates the product with the provided  _id  with the data provided in the request body
     */
         router.put("/:id", controller.updateProduct);

    
        
        /**
     * @method - PUT
     * @param - /
     * @description - Updates the product with the provided  _id  with the data provided in the request body
     */
    router.delete("/:id", controller.deleteProduct);

module.exports = router;