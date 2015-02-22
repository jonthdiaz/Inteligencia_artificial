var express = require('express')
    ,   http = require('http')
    ,   path = require('path')
    ,   namespace = require('express-namespace');

var app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


// app.configure('development', function () {
//     app.use(express.errorHandler());
// });



// app.get("/",function  (req,res) {
//     res.send("hello word prueba");
// });

require('./app/routers/router')(app);



// app
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

module.exports = app;