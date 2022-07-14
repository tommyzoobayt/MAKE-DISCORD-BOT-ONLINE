//code by Tommy Zooba YT#3972//
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('code by Tommy Zooba YT#3972')
});

app.listen(3000, () => {
  console.log('code by Tommy Zooba YT#3972');
});
const { Client } = require("discord.js");
const client = new Client({ intents: 32767 });
client.on("ready", () => console.log(`${client.user.tag} is online!`));
client.login(process.env.TOKEN);
//code by Tommy Zooba YT#3972//
