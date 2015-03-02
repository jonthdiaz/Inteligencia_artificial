exports.tanges_agua = function(req, res){
    var grafo = [];
    var Nodo = function  () {
        this.hijos = [];
    }

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