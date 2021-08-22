

    const express = require('express');

    const router = express.Router();
    const controller = require('../controller/user.controller');

// const router = express.Router();
    
    console.log('in user routes')

    
    //create profile
    
    /**
     * @method - GET
     * @param - /
     * @description - login user in the database 
     */
     router.post("/login", controller.login);

    
    

    //create profile
    
    /**
     * @method - POST
     * @param - /
     * @description - Creates a new user in the database
     */
     router.post("/register", controller.register);

    
        
    //     /**
    //  * @method - PUT
    //  * @param - /
    //  * @description - Updates the product with the provided  _id  with the data provided in the request body
    //  */
    // router.delete("/:email", controller.deleteUser);

module.exports = router;