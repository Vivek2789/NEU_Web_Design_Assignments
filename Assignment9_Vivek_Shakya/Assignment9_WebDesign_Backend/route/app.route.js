module.exports = (app) => {
    const user = require('../controller/userController');

    app.post('/user/create', user.createUser);
    app.post('/user/login', user.login);
    app.put('/user/:userName',user.updateUser);
}