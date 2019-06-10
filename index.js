/**
    Chainer Copyright (C) 2019 David Paiva
    This program comes with ABSOLUTELY NO WARRANTY.
    This is free software, and you are welcome to redistribute it
    under certain conditions.
*/

const clientOptions = {
  fetchAllMembers: true,
  enableEveryone: true
}

require('moment')
require('moment-duration-format')

const { Chainer } = require('./src/')
const client = new Chainer(clientOptions)

client.login()
	.then(() => client.log('Connected successfully!', 'Discord'))
	.catch(e => client.logError(e))