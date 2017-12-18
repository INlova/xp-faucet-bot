exports.run = async (XPBot, message, args, level) => {// eslint-disable-line no-unused-vars
  let msgDie = await message.reply("XPFaucetBotはシャットダウンしています");
  
  XPBot.commands.forEach( async cmd => {
    await XPBot.unloadCommand(cmd);
  });
  await XPBot.db.walletDB.closeFromDB()
    .then(()=> message.reply("XPFaucetBotはシャットダウンしました"))
    .then(()=> msgDie.delete())
    .then(()=> XPBot.user.setStatus("invisible"));
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "水道局幹部"
};

exports.help = {
  name: "die",
  category: "System",
  description: "Botをシャットダウンします。PM2下では自動的に再起動します。",
  usage: "die"
};
