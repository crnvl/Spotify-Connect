const express = require('express');
const cors = require('cors');
const Discord = require('discord.js');
const {
    port,
    prefix,
    token,
} = require('./config.json');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const distube = require('distube');
const DisTube = require('distube');
client.distube = new DisTube(client, {
    searchSongs: false,
    emitNewSongOnly: true
});

//states
const states = {
    container: "",
    currentHandle: "",
    isPlaying: true,
    isStarted: false,
    currentUser: ""
}

//setup
const app = express();

app.use(cors({
    credentials: true
}));

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});



require("./routes/routes.js")(app, states, client);

client.login(token);

client.once('ready', () => {
    console.log('[Spotify Connect Server] Bot instance is ready to use');

    //listen
    app.listen(port, function () {
        console.log("[Spotify Connect Server] Server is ready and is now listening on port " + port);
    })
});
client.once('reconnecting', () => {
    console.log('[Spotify Connect Server] Attempting to reconnect to Discord');
});
client.once('disconnect', () => {
    console.log('[Spotify Connect Server] Disconnected from Discord');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.content === `${prefix}listen`) {
        if (!states.isStarted) {
            states.container = message;
            console.log(`[Spotify Connect Server] Started listening to playback! ${states.container}`)
            states.isStarted = true;
            states.currentUser = message.author.id;
            message.channel.send(`**Spotify Connect Server is now listening to your playback.\nUse \`${prefix}exit\` to end your session.**`)
        } else {
            message.channel.send(`**There's already a session running right now. Please wait until this Session ends or use \`${prefix}exit\` to end your current Session.**`)
        }
    }
    if (message.content === `${prefix}skip`) {
        client.distube.skip(message);
        message.channel.send(`**Skipped a Track!**`)
    }
    if (message.content === `${prefix}exit`) {
        if (currentUser.includes(message.author.id)) {
            states.isStarted = false;
            client.distube.stop(message);
            states.currentHandle = "";
            message.channel.send(`**Ended your Session.**`)
        } else {
            message.channel.send(`**You're not the owner of this Session. Please wait until the current Session ends.**`)
        }
    }
})

client.distube.on("playSong", (message, queue, song) => {
    states.current = song.name;
});