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
let container = "",
    currentHandle,
    isPlaying = true,
    isStarted = false,
    current = "",
    isSession = false,
    currentUser = "";

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


//routes
app.post('/api/v1/playback', (req, res) => {

    if (!isStarted) {
        res.sendStatus(403);
        return;
    }

    if (!req.body.is_playing && isPlaying) {
        client.distube.pause(container);
        isPlaying = false;
    } else if (req.body.is_playing && !isPlaying) {
        client.distube.resume(container);
        isPlaying = true;
    }

    // if (!current.includes(req.body.name) && client.distube.isPlaying(container))
    //     client.distube.skip(container);

    if (currentHandle !== `${req.body.artist} - ${req.body.name}`) {
        currentHandle = `${req.body.artist} - ${req.body.name}`;
        // try {
        //     client.distube.skip(container);
        // } catch {}
        client.distube.play(container, `${req.body.artist} - ${req.body.name}`);

        currentHandle = `${req.body.artist} - ${req.body.name}`;
    }
    res.sendStatus(200);
});

client.login(token);

client.once('ready', () => {
    console.log('[Spotify Connect Server] Bot instance is ready to use');

    //listen
    app.listen(port);
    console.log("[Spotify Connect Server] Server is ready and is now listening on port " + port);
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
        if (!isStarted) {
            container = message;
            console.log(`[Spotify Connect Server] Started listening to playback! ${container}`)
            isStarted = true;
            currentUser = message.author.id;
            message.channel.send(`**Spotify Connect Server is now listening to your playback.\nUse \`/exit\` to end your session.**`)
        } else {
            message.channel.send(`**There's already a session running right now. Please wait until this Session ends or use \`/exit\` to end your current Session.**`)
        }
    }
    if (message.content === `${prefix}skip`) {
        client.distube.skip(message);
        message.channel.send(`**Skipped 1 Track!**`)
    }
    if (message.content === `${prefix}exit`) {
        if (currentUser === message.author.id) {
            message.channel.send(`**Ended your Session.**`)
        } else {
            message.channel.send(`**You're not the owner of this Session. Please wait until the current Session ends.**`)
        }
    }
})

client.distube.on("playSong", (message, queue, song) => {
    current = song.name;
});