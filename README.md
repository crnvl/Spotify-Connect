# Spotify-Connect
 Spotify Connect allows you to use your Spotify playback information in Discord voicechats.
 This Project is in an open beta state. Current builds won't be as stable as they are intended to be in the future.
 The code currently also includes a lot of debug logs, which may be confusing for most users.
 
# Setup Guide
 In order to use this application, you need to install a few things on your machine.

 ### Required software & Setup
 1. NodeJS >> [[download](https://nodejs.org/en/)]
 2. Python >> [[download](https://www.python.org/downloads/)]<br>
 Make sure, that both installations also added their variables to your `PATH`. In order to check, if they did, please [click here](https://github.com/angelsflyinhell/Spotify-Connect#how-to-check-if-my-installation-has-been-added-to-path)
 3. [Download](https://github.com/angelsflyinhell/Spotify-Connect/archive/refs/heads/main.zip) this repository onto your PC
 4. Extract the `.zip` file and go into the new folder called `Spotify-Connect`
 5. Open `./bot/config.json` and fill out the fields. Then head back into the root directory
 6. Inside of this folder, open your Command Line or Terminal and type `npm install`
 7. After the installation has been completed, you can run `npm run dev` to start the Server
 8. Now open the `index.html` in your preferred browser and connect your Spotify Account
 9. If you already invited your Bot Account, you can now join a voicechat and type `<prefix>listen` to start controlling the Music Bot using your Spotify Client. If you don't know, how to create a discord Bot Account, please [click here](https://github.com/angelsflyinhell/Spotify-Connect#how-to-check-if-my-installation-has-been-added-to-path)

# Contribute
Please feel free to contribute to this project. You can always create [Issues](https://github.com/angelsflyinhell/Spotify-Connect/issues) or [Pull Requests](https://github.com/angelsflyinhell/Spotify-Connect/pulls) or take a look at our current [todo List](https://github.com/angelsflyinhell/Spotify-Connect#how-to-check-if-my-installation-has-been-added-to-path) and do some tasks on there, if you like. If you do so, please create a Pull Request, which adds your name to the task you're working on. For example `Invert Binary Tree (angelsflyinhell)`

# Resources
 This project couldn't be possible without the following resources.
 - [Spotify Connect API](https://jmperezperez.com/spotify-connect-api/)
 - [distube.js](https://distube.js.org/)

 Also built using
 - [discord.js](https://www.npmjs.com/package/discord.js)
 - [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus)
 - [distube](https://www.npmjs.com/package/distube)
 - [express](https://www.npmjs.com/package/express)
 - [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)<br>
 and more...

 # Todo List
 - [ ] Fix Music Playback (It doesn't always grab the right track)
 - [ ] Check if a track has been skipped or ended and use the queue function accordingly
 - [ ] Remove Debug Logs, Error Prints, etc.
 - [ ] Create a user-friendly GUI for the Client

# Knowledge Base
## How to check, if my installation has been added to `PATH`
1. Open your Command Line or Terminal.
2. Type `node -v` and hit enter. You should see something similar to this: `v14.17.0`. If you don't see this info, you might need to restart your Machine.
3. Type `python --version` and hit enter. You should see something similar to this: `Python 3.7.4`. If you don't see this info, you might need to restart your Machine.
4. If restarting your Machine didn't help, please look up a tutorial on how to add executables to `PATH`.

## How to create a Discord Bot Account
1. Head over to [this page](https://discord.com/developers/applications)
2. Click `New Application` and fill in the `Name` field. Then click `Create`
3. Click on your new application and click into the `Bot` Tab on the left side of the window
4. Click `Add Bot` then `Yes, do it!`
5. Congratulations, you just created your Bot Application