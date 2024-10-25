#!/usr/bin/env node
'use strict'

import pswg from '../dist/cjs/index.js'
import { fileURLToPath } from 'url'

import { Command } from 'commander/esm.mjs'
import { createRequire } from 'module';
import path from 'path';

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const packageJson = require(path.join(__dirname, '../package.json'));

const program = new Command()
program
    .usage('[options] <file ...>')
    .version(packageJson.version)
    .option('--length [length]', 'Length of password', parseInt)
    .option('-es, --excludeSymbols', 'Exclude symbols')
    .option('-eu, --excludeUppercase', 'Exclude uppercase letters')
    .option('-en, --excludeNumbers', 'Exclude numbers')
    .parse(process.argv)

const options = {
    length: program.getOptionValue('length'),
    excludeSymbols: program.getOptionValue('excludeSymbols'),
    excludeUppercase: program.getOptionValue('excludeUppercase'),
    excludeNumbers: program.getOptionValue('excludeNumbers'),
}

const pw = pswg.default({length: options.length, excludeSymbols: options.excludeSymbols, excludeUppercase: options.excludeUppercase, excludeNumbers: options.excludeNumbers})

console.log(pw)