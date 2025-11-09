import express from 'express' /*llamar al paquete que hemos importado
de la forma de modulos*/
import router from './router'

const app = express() //instanciamos el servidor

app.use('/', router) /*La pagina principal va a entrar al router
y va a buscar que ruta cumple con el nombre que estoy visitando.*/



export default app