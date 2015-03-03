exports.tanges_agua = function(req, res){
    var grafo = [];

    var Estado = function  (x , y) {
        this.x = x;
        this.y = y;
        this.hijos = [];
        return {
            x:this.x,
            y:this.y,
            hijos:this.hijos,
        }
    }

    // llenar el grafo
    for (var x = 0; x <= 5; x++) {
        for (var y = 0; y <= 3; y++) {
            grafo.push(new Estado(x, y));
        };
    };

    var funcionesGrafo = function  () {
        this.llenarX=function  (Estado) {
            grafo.forEach(function  (sig) {
                if(5 == sig.x && Estado.y == sig.y)
                    Estado.hijos.push(sig);
            });
        };
        this.llenarY=function  (Estado) {
          grafo.forEach(function  (sig) {
                if(Estado.x == sig.x && 3 == sig.y)
                    Estado.hijos.push(sig);
            });  
        },
        this.vaciarX=function  (Estado) {
          grafo.forEach(function  (sig) {
                if(0 == sig.x && Estado.y == sig.y)
                    Estado.hijos.push(sig);
            });    
        },
        this.vaciarY=function  (Estado) {
            grafo.forEach(function  (sig) {
                if(Estado.x == sig.x && 0 == sig.y)
                    Estado.hijos.push(sig);
            });
        },
        this.txYX=function  (Estado) {
            var xy = Estado.x + Estado.y;
            var ny = xy > 5  ? xy - 5 : 0;
            var nx = xy > 5 ? 5 : xy;
            grafo.forEach(function  (sig) {
                if(nx == sig.x && ny == sig.y)
                    Estado.hijos.push(sig);
            });
        },
        this.txXY=function  (Estado) {
            var xy = Estado.x + Estado.y;
            var ny = xy > 3 ? 3 : xy;
            var nx = xy > 3 ? xy -3 : 0;
            grafo.forEach(function  (sig) {
                if(nx == sig.x && ny == sig.y)
                    Estado.hijos.push(sig);

            });
        }

    }


    // conectar nodos
    var connectarNodos = function  () {
        var fngrafo = new funcionesGrafo();
        grafo.forEach(function  (e) {
            fngrafo.llenarX(e);
            fngrafo.llenarY(e);
            fngrafo.vaciarX(e);
            fngrafo.vaciarY(e);
            fngrafo.txXY(e);
            fngrafo.txYX(e);
            // console.log(e.x,e.y,e.hijos);
        });
    }();

    var printGrafo = function  () {
        grafo.forEach(function  (e) {
            var text, text1 = '';
            text = "(" + e.x + "," + e.y + ")";

            e.hijos.forEach(function  (hijo) {
                text1 = text1 + "("+ hijo.x + "," + hijo.y +")";
            });
            console.log(text + " => "+ text1)
        });
    }();


    res.render('inteligencia-artificial/tanques_agua',
        {'grafo': grafo})
};

exports.monjes_canibales = function  (req, res) {
    var grafo = [];

    // var Nodo = function  () {
    //     this.hijos = [];
    //     return{
    //         hijos : this.hijos,
    //     }
    // }

    var Estado = function  (c, m, b, mv) {
        this.c = c;
        this.m = m;
        this.b = b;
        this.mv = mv,
        this.hijos = [];
        return {
            c: this.c,
            m: this.m,
            b: this.b,
            hijos: this.hijos,
            mv: this.mv,

        }
    };

    // lleno grafo para espacio de soluciones de monjes y canibales
    for (var i = 0; i <= 1; i++) {
        for (var j = 0; j <= 3; j++) {
            for (var k = 0; k <= 3; k++) {
                grafo.push(new Estado(j,k,i));
            };
        };
    };

    var funcionesGrafo = function  () {
        this.M2M=function  (Estado) {
            grafo.forEach(function  (e) {
                if(Estado.b == 0){
                    var nm = parseInt(Estado.m) - 2;
                    if(e.c == Estado.c && nm == e.m && e.b == 1){
                        e.mv = "(" + Estado.c + "," + Estado.m + "," + Estado.b + ")";
                        Estado.hijos.push(e);
                    }
                }
                else if(Estado.b == 1){
                    var nm = parseInt(Estado.m) + 2;
                    if(e.c == Estado.c && nm == e.m && e.b == 0){
                        e.mv = "(" + Estado.c + "," + Estado.m + "," + Estado.b + ")";
                        Estado.hijos.push(e);
                    }
                }
            });
        },
        this.M2C=function  (Estado) {
            grafo.forEach(function  (e) {
                if(Estado.b == 0){
                    var nc = parseInt(Estado.c) - 2;
                    if(e.c == nc && Estado.m == e.m && e.b == 1){
                        Estado.hijos.push(e);
                    }
                }
                else if(Estado.b ==1){
                    var nc = parseInt(Estado.c) + 2;
                    if(e.c == nc && Estado.m == e.m && e.b == 0){
                        Estado.hijos.push(e);
                    }
                } 
            });
        },
        this.M1M=function  (Estado) {
            grafo.forEach(function  (e) {
               if(Estado.b == 0){
                    var nm = parseInt(Estado.m) - 1;
                    if(e.c == Estado.c && nm == e.m && e.b == 1){
                        Estado.hijos.push(e);
                    }
                }
                else if(Estado.b == 1){
                    var nm = parseInt(Estado.m) + 1;
                    if(e.c == Estado.c && nm == e.m && e.b == 0){
                        Estado.hijos.push(e);
                    }
                } 
            });
        },
        this.M1C=function  (Estado) {
            grafo.forEach(function  (e) {
                if(Estado.b == 0){
                    var nc = parseInt(Estado.c) - 1;
                    if(e.c == nc && Estado.m == e.m && e.b == 1){
                        Estado.hijos.push(e);
                    }
                }
                else if(Estado.b ==1){
                    var nc = parseInt(Estado.c) + 1;
                    if(e.c == nc && Estado.m == e.m && e.b == 0){
                        Estado.hijos.push(e);
                    }
                } 
            });
        },
        this.M1CM = function  (Estado) {
            grafo.forEach(function  (e) {
                if(Estado.b == 0){
                    var nc = parseInt(Estado.c) - 1;
                    var nm = parseInt(Estado.m) - 1;
                    if(e.c == nc && nm == e.m && e.b == 1){
                        Estado.hijos.push(e);
                    }
                }
                else if(Estado.b ==1){
                    var nc = parseInt(Estado.c) + 1;
                    var nm = parseInt(Estado.m) + 1;
                    if(e.c == nc && nm == e.m && e.b == 0){
                        Estado.hijos.push(e);
                    }
                } 
            });
        }
    };

    var connectarNodos = function  () {
        var fngrafo = new funcionesGrafo();
            grafo.forEach(function  (e) {
                fngrafo.M2M(e);          
                fngrafo.M2C(e); 
                fngrafo.M1M(e);
                fngrafo.M1C(e);
                fngrafo.M1CM(e);
            });
    }();
    
    res.render('inteligencia-artificial/monjes_canibales',
               {'grafo': grafo});  

};