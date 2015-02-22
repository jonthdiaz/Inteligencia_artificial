module.exports = function  (app) {
    var home = require('../controllers/home');
    var user = require('../controllers/user');
    // home
    app.namespace('/',function  () {
       app.get('/', home.index); 
    });

    app.namespace('/settings',function  () {
       app.get('/', user.settings); 
       app.get('/profile', user.profile); 
    });
}