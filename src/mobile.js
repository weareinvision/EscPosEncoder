const EscPosEncoder = require('./esc-pos-encoder')

const { createCanvas } = require('canvas')
const Dither = require('canvas-dither')
const Flatten = require('canvas-flatten')

const encoder = new EscPosEncoder({
  create: createCanvas,
  dither: Dither,
  flatten: Flatten,
})

module.exports = encoder
