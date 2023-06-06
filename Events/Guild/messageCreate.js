const client = require("../../index");
const config = require("dotenv").config().parsed;
const prefix = config.PREFIX;

client.on("messageCreate", message =>{
  if(message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

  const [comando, ...args] = message.content.slice(prefix.length).trim().split(/ +/)

  const cmd = client.prefixCommands.get(comando)

  if(!cmd) return message.reply(`Calm down, this command does not exist.`)
  
  cmd.run(client, message, args)
})