import express from 'express'
import { person } from './archive.mjs'


const PORT = 5000

const app = express()

app.get('/welcome', (req, res) => {
    res.send(`Welcome viewer! This is my Resume's API!  Feel free to use command "npx xaviers-resume" to view my resume via terminal.
    To pinpoint parts of resume on browser, replace "/welcome" and type these strings:/person, 
    /name, 
    /name/fName, 
    /name/lname, 
    /name/Email, 
    /name/Github. 
    /location, 
    /location/city, 
    /location/state, 
    /orgs, 
    /orgs/first,
    /orgs/second,
    /edu,
    /edu/high-school,
    /edu/university,
    /community-service `)

})

app.get('/person', (req, res) =>{
    res.send(person)
})

app.get('/name', (req, res) =>{
    res.send(`Xaiver Parham, https://github.com/Xparham, xparham@gmail.com`)
})

app.get('/name/fName', (req, res) =>{
    res.send(`Xaiver`)
})

app.get('/name/lName', (req, res) =>{
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

app.get('/orgs', (req, res) =>{
    res.send(`MSIMBO Program and Urban League`)
})

app.get('/orgs/first', (req, res) =>{
    res.send(`MSIMBO Program`)
})

app.get('/orgs/second', (req, res) =>{
    res.send(`Urban League`)

})

app.get('/edu', (req, res) =>{
    res.send(`Boston Latin Academy, UMASS Lowell (Animation Conentration`)
})

app.get('/edu/high-school', (req, res) =>{
    res.send(`Boston Latin Academy`)
})

app.get('/edu/university', (req, res) =>{
    res.send(`UMASS Lowell (Animation Conentration`)
})

app.get('/comunity-service', (req, res) =>{
    res.send(`City Year, C5 New England (formerly known as Camp Coca Cola Leadership Program, Boston Cares) `)
})





// app.get('/id',(req, res) => {
//     res.send({
//         id: Math.random()
//     })
// })


app.listen(PORT, () => {
    console.log(`booting up please wait for server ${PORT}....`)
})