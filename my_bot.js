const Discord = require('discord.js')
const client = new Discord.Client()
const messages = ['*Whines*', '*Cries*', 'Woof', '*Jumps wildly with no emotion*', '*Stays in bed*', '*Stays in bed, but wags tail when you come over*', '*Cries in Spanish*', '*Wags tail*', '*Sniffs your face*', '*Sniffs your butt*', '*Sniffs your face to close and you get wet*', '*Sniffs your crotch*', '*Begs for cookie*', '*Puts head on lap with force*', '*Puts head on lap*']
//const randomIndex = Math.round(Math.random()*messages.length);

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', msg => {
  if (msg.content === 'Markl') {
    const randomIndex = Math.round(Math.random()*messages.length);
    msg.reply(messages[randomIndex]);
  }
});

bot_secret_token = "NTI4MjQ5ODY3MDg1MTUyMjY2.Dwf4IA.-ODtQR5xRweuHI_tQfKyqqE03OI"

client.login(bot_secret_token)
