import express from 'express' /*llamar al paquete que hemos importado
de la forma de modulos*/


const app = express() //instanciamos el servidor


/*Variable en donde guardamos el numero de puerto que queremos 
utilizar*/
const port = process.env.PORT || 4000


//Iniciamos el servidor
app.listen(port, () => {
    console.log('servidor funcionando en el puerto: ', port)
})



//DECLARACION DE DIFERENTES RUTAS DE EXPRESS
app.get('/', (req, res) => { /*La funcion call back, es cuando se visita la pagina
    principal se hara lo que esta dentro de la funcion.*/
    res.send('Hola mundo en typescript')
})

app.get('/ecommerce', (req, res) => {
    res.send('Este es un ecommerce')
})

app.get('/blog', (req, res) => {
    res.send('Este es un blog')
})

app.get('/nosotros', (req, res) => {
    res.send('Este es un nosotros')
})