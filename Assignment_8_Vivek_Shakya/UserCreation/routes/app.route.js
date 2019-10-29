module.exports = (app) => {
    const user = require('../controller/userController');
    


    




    app.post('/user',user.create);
    app.post('/user/:userName/product',user.productCreate);
    app.put('/user/:userName/product/:id',user.productUpdate);
    app.delete('/user/:userName/product/:id',user.productDelete);
    app.delete('/user/:userName', user.delete);
    app.get('/user/:userName/product',user.productRead);
}