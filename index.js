const aoijs = require('aoi.js');
const { Voice, LoadCommands, Bot } = require("aoi.js");

const bot = new aoijs.AoiClient({
    token: 'TOKEN', 
	prefix: ["$getServerVar[prefix]","<@$clientID>"],
    intents:  "all"
});

const voice = new Voice(
    bot,
    {
      cache: {
        cacheType: "Memory",
        enabled: true,
      },
    },
    false, 
  );
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commandes/")



bot.status({
	text: ' $serverCount serveurs | $allMembersCount utilisateurs.',
	type: 'WATCHING',
	status: 'idle',
});
//statut











//prefix par defaut
bot.variables({
  prefix: ";",
})




//variables
bot.variables({
	
  });



//Events
bot.onMessage();
bot.onTypingStart();
bot.onRateLimit();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onVoiceStateUpdate();
bot.onRoleUpdate();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanAdd();
bot.onBanRemove();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();
bot.onGuildUpdate();
bot.onEmojiCreate();
bot.onEmojiUpdate();
bot.onEmojiDelete();
bot.onReactionRemoveAll();
bot.onReactionRemoveEmoji();
bot.onMessageDeleteBulk();
bot.onWebhookUpdate();
bot.onChannelPinsUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate();;
bot.onApplicationCmdDelete();
bot.onStickerCreate();
bot.onStickerUpdate();
bot.onStickerDelete();
bot.onThreadCreate();
bot.onThreadUpdate();
bot.onThreadDelete();
bot.onThreadListSync();
voice.onTrackStart();





bot.command ({
    name: "<@$clientID>",
    nonPrefixed : true,
    code:`$reply[;Mon prefix est \`$getServerVar[prefix]\`;yes]`
  })
