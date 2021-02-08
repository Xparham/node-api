import express from 'express'

const app = express()

app.get('/welcome_friend', (req, res) => {
    res.send('welcome friend')

})

app.get('/', (req, res) => {
    res.send('welcome home')
})

app.listen('3333', () => {
    console.log('booting')
})