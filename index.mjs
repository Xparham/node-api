#!/usr/bin/env node
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




console.log(id)
console.log(label)
console.log(mail)
console.log(city, state, zipCode)
console.log(region, countryCode)
console.log(`Profiles:`)
console.log(gitHub, vercel,npm)
console.log(`-------------------`)
console.log(`Skills:`)
console.log(traits)
console.log(level)
console.log(`Keywords`)
console.log(keywords)
console.log(`---------`)
console.log(`Education`)
console.log(highSchool)
console.log(college)

console.log(company)
console.log(website)
console.log(startDate)
console.log(endDate)
console.log(summary)
console.log(`-------------------------------------`)
console.log(`Community Service`)
console.log(cityYear)
console.log(c5)
console.log(bostonCares)
console.log(`----------------------------`)
console.log(language)
console.log(fluency)