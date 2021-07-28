<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** angelsflyinhell, Spotify-Connect, angelsflyinhell, azami@namespace.media, Spotify Connect, Spotify Connect allows you to use your Spotify playback information in Discord voicechats.
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/angelsflyinhell/Spotify-Connect">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Spotify Connect</h3>

  <p align="center">
    Spotify Connect allows you to use your Spotify playback information in Discord voicechats.
    <br />
    <br />
    <br />
    <a href="http://connect.4c3711.xyz">View Demo</a>
    ·
    <a href="https://github.com/angelsflyinhell/Spotify-Connect/issues">Report Bug</a>
    ·
    <a href="https://github.com/angelsflyinhell/Spotify-Connect/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](http://connect.4c3711.xyz)
### Built With

* [node.js](https://nodejs.org/en/)
* [express](https://www.npmjs.com/package/express)
* [discord.js](https://www.npmjs.com/package/discord.js)



<!-- GETTING STARTED -->
## Getting Started

In order to use this bot yourself, you will need to set up the Spotify Connect Server.

### Prerequisites

In order for the server to function correctly, you'll need to install [node.js](https://nodejs.org/en/) and [Python](https://www.python.org/downloads/). Also make sure, you're running the current version of `npm`.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/angelsflyinhell/Spotify-Connect.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Go to the [discord developer dashboard](https://discord.com/developers/applications) and create a new Bot Application.
4. Inside your cloned repo, head into the `bot` directory and create a new file called `config.json`.
5. Use this template, fill out the fields with your own information and save it into the new file.
   ```json
    {
        "port": "3000",
        "prefix": "!",
        "token": "bot-token-goes-here"
    }
   ```
6. The Server is ready to use now! Open a new Terminal in the main directory and run
   ```sh
   npm run main                     #if you're using nodemon, you can also run 'npm run dev'
   ```


<!-- USAGE EXAMPLES -->
## Usage

The Server can be installed on any operating system, which is supported by [node.js](https://nodejs.org/en/) and [Python](https://www.python.org/downloads/). For a 24/7 uptime, it is recommended to host the Spotify Connect Bot on a Server.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT LIcense. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

angelsflyinhell - [@angelsflyinhell](https://twitter.com/angelsflyinhell) - azami@namespace.media

Project Link: [https://github.com/angelsflyinhell/Spotify-Connect](https://github.com/angelsflyinhell/Spotify-Connect)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/angelsflyinhell/Spotify-Connect.svg?style=for-the-badge
[contributors-url]: https://github.com/angelsflyinhell/Spotify-Connect/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/angelsflyinhell/Spotify-Connect.svg?style=for-the-badge
[forks-url]: https://github.com/angelsflyinhell/Spotify-Connect/network/members
[stars-shield]: https://img.shields.io/github/stars/angelsflyinhell/Spotify-Connect.svg?style=for-the-badge
[stars-url]: https://github.com/angelsflyinhell/Spotify-Connect/stargazers
[issues-shield]: https://img.shields.io/github/issues/angelsflyinhell/Spotify-Connect.svg?style=for-the-badge
[issues-url]: https://github.com/angelsflyinhell/Spotify-Connect/issues
[license-shield]: https://img.shields.io/github/license/angelsflyinhell/Spotify-Connect.svg?style=for-the-badge
[license-url]: https://github.com/angelsflyinhell/Spotify-Connect/blob/master/LICENSE.txt
[product-screenshot]: /images/banner.png
