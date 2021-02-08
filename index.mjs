#!/usr/bin/env node
import { person } from './archive.mjs'

const { name: { fName }, location} = person
console.log(`${fName}'s is in ${location}`)