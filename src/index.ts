import server from './server'

/*Variable en donde guardamos el numero de puerto que queremos 
utilizar*/
const port = process.env.PORT || 4000

//Iniciamos el servidor
server.listen(port, () => {
    console.log('servidor funcionando en el puerto: ', port)
})





