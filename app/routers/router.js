module.exports = function  (app) {
    var home = require('../controllers/home');
    var user = require('../controllers/user');
    var it = require('../controllers/inteligencia-artificial');
    // home
    app.namespace('/',function  () {
       app.get('/', home.index); 
    });

    app.namespace('/settings',function  () {
       app.get('/', user.settings); 
       app.get('/profile', user.profile); 
    });

    app.namespace('/inteligencia-artificial',function  () {
       app.get('/tanques-de-agua', it.tanges_agua); 
    });
}