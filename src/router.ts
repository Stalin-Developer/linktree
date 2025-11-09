import {Router } from 'express'

const router = Router()







//Routing
router.get('/', (req, res) =>{
    console.log('Home')
})
/** Autenticacion y registro */
router.post('/auth/register', (req, res) =>{
    console.log('Desde Register')
})


export default router