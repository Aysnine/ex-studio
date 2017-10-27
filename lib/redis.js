const config = require('../config').redis
const ioRedis = require('ioredis')
const redis = new ioRedis(config)

console.log('--- Connecting: Redis')
redis.on('ready', () => console.log('--- Ready: Redis'))
redis.on('error', err => console.log('--- Error: Redis\n', err))

module.exports = redis
