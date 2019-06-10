const { Command } = require('../../structures/')
const { validate } = require('wallet-address-validator')
const balance = require('crypto-balances')

module.exports = class Wallet extends Command {
  constructor (client) {
    super(client)
    this.name = 'wallet'
    this.category = 'crypto'
  }

  async run (message, args, strings) {
    message.channel.send(`Checking if wallet \`${args[0]}\` is valid using currency \`${args[1].toUpperCase()}\`...`)
    const validation = await validate(args[0], args[1])
    if (validation) {
      message.channel.send(`Wallet is valid.`)
      message.channel.send(`Checking its balance...`)
      balance(args[0], (err, result) => {
        if (err) return message.channel.send(`\`\`\`${err}\`\`\``)
        console.log(result)
        return message.channel.send(`Wallet \`${args[0]}\` has \`${result[0].quantity} ${result[0].asset}\``)
      })
    }
    else return message.channel.send(`Wallet \`${args[0]}\` isn't valid using currency \`${args[1]}\`.`)
  }
}