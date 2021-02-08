import express from 'express'
import person from '/archive.mjs'

const app = express()

app.get('/welcome_friend', (req, res) => {
    res.send('welcome friend')

})

app.get('/name', (req, res) =>{
    res.send(person)
})

app.get('/id',(req, res) => {
    res.send({
        id: Math.random()
    })
})


app.listen('3333', () => {
    console.log('booting')
})