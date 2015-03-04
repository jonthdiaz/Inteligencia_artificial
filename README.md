# Inteligencia artificial
Esta app contiene los problemas de la materia de inteligencia artificial del 
politecnico grancolombiano del 2015

##Tecnología utilizada
1. Nodejs
2. Bower
3. Theme bootswatch paper
4. Publicada en heroku (https://inteligencia-artificial.herokuapp.com/)

>Instalar node js (http://nodejs.org/).
>
>Instalar bower (http://bower.io/).
>
> Theme in http://bootswatch.com/paper/

Despues de tener instalado nodejs y bower realice una copia del repositorio
> git clone git@github.com:jonthdiaz/Inteligencia_artificial.git desde consola

Cuando tenga clonado el repositorio, en la raiz del projecto corra las siguientes
lineas

>npm install
>
>bower install

Esto creada dos carpetas una en la raiz que se llama node_modules que son las 
dependencias de nodejs que maneja la aplicación, la otra carpeta que se crea 
esta en public/components esta contiene todas las carpetas de los plugins que se
utilizan del lado del frontend.

Despues de esto ejecute en la consola la siguiente linea para correr el servidor web.
>node server.js

Esto correra un servidor web en el puerto 3000 (http://localhost:3000/) 
donde podran ver los resultados de los ejercicios de la clase 