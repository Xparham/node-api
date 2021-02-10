#!/usr/bin/env node
import { person } from './archive.mjs'


const { basics } = person
const { basics : { id } } = person
const { basics : { label } } = person
const { basics : { mail } } = person
const { basics : { location } } = person
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




// console.log( `${fName} ${lName}`)
// console.log(`-------------------`)
// console.log(`${city}, ${state}`)
// console.log(`---------`)
// console.log(`I am currently in the ${first} with the ${second} steadfastly improving my knowlegde in front-end and back-end coding.`)
// console.log(`---------`)
// console.log(`My education history includes a HSD at ${high}, and working towards a BFA at ${uni} with a concentration in ${concen}`)
// console.log(`---------`)
// console.log(`I have community service experience with ${heroes} from 2005-2007, ${camp}, from 2007-2012, and ${cares} from 2010-2012.`)
// console.log(`-------------------`)
// console.log(`E-mail:${mail}`)
// console.log(`Github:${hub}`)

// console.log("person: ", person)
console.log(company)
