const {
    URLSearchParams
} = require('url'); // can also use form-data
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { buildPayload } = require('../apiUtils');

const credemtials = require('../oauth.json');
const {
    port
} = require('../config.json');

var apiRouter = function (app, states, client) {

    app.get('/', (req, res) => {
        res.send('Spotify Connect Server is online and working.');
    });

    app.post('/api/v1/playback', (req, res) => {

        if (!states.isStarted) {
            res.sendStatus(403);
            return;
        }

        if (!req.body.is_playing && states.isPlaying) {
            client.distube.pause(states.container);
            states.isPlaying = false;
        } else if (req.body.is_playing && !states.isPlaying) {
            client.distube.resume(states.container);
            states.isPlaying = true;
        }

        // if (!current.includes(req.body.name) && client.distube.isPlaying(states.container))
        //     client.distube.skip(states.container);

        if (states.currentHandle !== `${req.body.artist} - ${req.body.name}`) {
            states.currentHandle = `${req.body.artist} - ${req.body.name}`;
            // try {
            //     client.distube.skip(states.container);
            // } catch {}
            client.distube.play(states.container, `${req.body.artist} - ${req.body.name}`);

            states.currentHandle = `${req.body.artist} - ${req.body.name}`;
        }
        res.sendStatus(200);
    });

}

module.exports = apiRouter;