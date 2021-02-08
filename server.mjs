import express from 'express'
import archive from '/archive,mjs'

const app = express()

app.get('/welcome_friend', (req, res) => {
    res.send('welcome friend')

})

app.get('/name', (req, res))

app.get('/id',(req, res) => {
    res.send({
        id: Math.random()
    })
})


app.listen('3333', () => {
    console.log('booting')
})