import express from 'express'
import { person } from './archive.mjs'


const PORT = 3333

const app = express()

app.get('/welcome', (req, res) => {
    res.send(`Welcome viewer! This is my Resume's API!  Feel free to use command "npx xaviers-resume" to view my resume via terminal`)

})

app.get('/person', (req, res) =>{
    res.send(person)
})

app.get('/name', (req, res) =>{
    res.send(`Xaiver Parham, https://github.com/Xparham, xparham@gmail.com`)
})

app.get('/name/first', (req, res) =>{
    res.send(`Xaiver`)
})

app.get('/name/last', (req, res) =>{
    res.send(`Parham`)
})

app.get('/name/Email', (req, res) =>{
    res.send(`xparham@gmail.com`)
})

app.get('/name/Github', (req, res) =>{
    res.send(` https://github.com/Xparham`)
})

app.get('/location', (req, res) =>{
    res.send(`Boston, MA`)
})

app.get('/location/city', (req, res) =>{
    res.send(`Boston`)

})

app.get('/location/state', (req, res) =>{
    res.send(`Massachusetts`)
})

// app.get('/id',(req, res) => {
//     res.send({
//         id: Math.random()
//     })
// })


app.listen(PORT, () => {
    console.log(`booting up please wait for server ${PORT}....`)
})