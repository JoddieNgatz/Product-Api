

module.exports = app => {

    const controller = require('../controller/products.controller');
    console.log('in routes')  

    
    //create profile
    
    /**
     * @method - GET
     * @param - /
     * @description - Returns all products in the database as  { products: Product[] }
     */
     app.get("/api/products/", controller.returnAllProduct);

    
    
    //create profile
    
    /**
     * @method - Get
     * @param - /id
     * @description - Returns the product with the provided  _id  as  { product: Product }
     */
     app.get("/api/products/:id/", controller.findProduct);

    //create profile
    
    /**
     * @method - POST
     * @param - /username
     * @description - Creates a new product in the database
     */
    app.post("/api/products", controller.createProduct);

}