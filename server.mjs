import express from 'express'
import { person } from './archive.mjs'

const PORT = 3333

const app = express()

app.get('/welcome', (req, res) => {
    res.send('welcome!  ')

})

app.get('/location', (req, res) =>{
    res.send(person)
})

app.get('/id',(req, res) => {
    res.send({
        id: Math.random()
    })
})


app.listen(PORT, () => {
    console.log(`booting up please wait for server ${PORT}....`)
})