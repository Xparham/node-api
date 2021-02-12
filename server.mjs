import express from 'express'
import { person } from './archive.mjs'

const { basics } = person
const { basics : { id } } = person
const { basics : { label } } = person
const { basics : { mail } } = person
const { basics : { location } } = person
const { basics : { location : { city } } } = person
const { basics : { location : { state } } } = person
const { basics : { location : { zipCode } } } = person
const { basics : { location : { countryCode } } } = person
const { basics : { location : { region } } } = person
const { basics : { profiles } } = person
const { basics : { profiles : { gitHub } }} = person
const { basics : { profiles : { vercel } }} = person
const { basics : { profiles : { npm } }} = person

const {urbanLeague} = person
const {urbanLeague : { company } } = person
const {urbanLeague : { website } } = person
const {urbanLeague : { startDate } } = person
const {urbanLeague : { endDate } } = person
const {urbanLeague : { summary } } = person

const {skills} = person
const {skills : {traits} } = person
const {skills : {level} } = person
const {skills : {keywords} } = person

const {edu} = person
const {edu : { highSchool } } = person
const {edu : { college } } = person


const {volunteer} = person
const {volunteer : { cityYear } } = person
const {volunteer : { c5 } } = person
const {volunteer : { bostonCares } } = person

const {languages} = person
const {languages :  { language } } = person
const {languages :  { fluency } } = person


const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => res.send(person) ) 

app.get('/welcome', (req, res) => {
    res.send(`<h1> Welcome User! </h1>
     This is my Resume's API! Feel free to use command: <pre>npx api-resume</pre>to view my resume via terminal.  
    To view resume as a whole, leave end tag blank.
    To pinpoint parts of resume on browser, and add these strings:
    <ul>
        <li>/basics</li>
        <li>/skills</li>
        <li>/urban-league</li>
        <li>/education</li>
        <li>/community-service</li>
        <li>/languages</li>
    </ul>`)
    
})

app.get('/basics', (req, res) => {
    res.send(basics)
})

app.get('/skills', (req, res) =>{
    res.send(skills)
})

app.get('/urban-league', (req, res) =>{
    res.send(urbanLeague)
})

app.get('/education', (req, res) =>{
    res.send(edu)
})

app.get('/community-service', (req, res) =>{
    res.send(volunteer)
})

app.get('/languages', (req, res) =>{
    res.send(languages)
})





app.listen(PORT, () => {
    console.log(`booting up please wait for server ${PORT}....`)
})