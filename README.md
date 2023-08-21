# Node.JS Discord Music Bot

A Node.js Bot made with Discord.js / Discord Player to play music on your own discord.

## Resources used

Libraries used in this project:

1. [@devraelfreeze/discordjs-pagination](https://www.npmjs.com/package/@devraelfreeze/discordjs-pagination)
2. [@discord-player/extractor](https://www.npmjs.com/package/@discord-player/extractor)
3. [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus)
4. [discord-player](https://www.npmjs.com/package/discord-player)
5. [discord.js](https://www.npmjs.com/package/discord.js)
6. [dotenv](https://www.npmjs.com/package/dotenv)
7. [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)
8. [play-dl](https://www.npmjs.com/package/play-dl)
9. [nodemon](https://www.npmjs.com/package/nodemon)

## Commands

List of commands for the bot:
| Name | Description |
|:---------------|:----------------------------------:|
| **/play** | Play a song from youtube |
| **/queue** | See the queue |
| **/resume** | Resume the current song |
| **/remove** | Remove a specific track |
| **/shuffle** | Shuffle the queue |
| **/skip** | Skip the current song |
| **/pause** | Pause the current song |
| **/loop** | Turn on/off looping |
| **/stop** | Stop the player |

## Requirements

-   NodeJS v16.9.0 or higher
-   NPM or Yarn
-   IDE (Exemple VSCode)
-   PuTTY (If hosting)
-   Discord Bot (Scopes : applications.commands, bot) (Permission: Administrator)

## Installation (Local)

1. Clone this repository

```sh
git clone https://github.com/ChristianBosse/Node.js-Discord-Music-Bot.git
```

2. Install dependencies

```sh
npm install
```

3. Rename .env.example to .env

```sh
.env.example -> .env
```

-   `DISCORD_TOKEN` is your Discord bot token, you can find it [here](https://discord.com/developers/applications)

4. Start the bot

```sh
npm start
```

## Installation (VPS using Debian 11)

1. Clone this repository

```sh
git clone https://github.com/ChristianBosse/Node.js-Discord-Music-Bot.git
```

2. Install Node.js & NPM on VPS

Node.js (Latest Version)

```sh
curl -fsSL https://deb.nodesource.com/setup_current.x | bash - &&\
apt-get install -y nodejs
```

NPM

```sh
sudo apt-get install npm -y
```

3. Rename .env.example to .env

```sh
.env.example -> .env
```

-   `DISCORD_TOKEN` is your Discord bot token, you can find it [here](https://discord.com/developers/applications)

4. Navigate to the right directory

```sh
cd Node.js-Discord-Music-Bot
```

5. Install dependencies

```sh
npm install
```

6. Install Screen

```sh
sudo apt-get install screen
```

We use Screen to keep our application online when closing our terminal

7. Use Screen

Type the following in the terminal

```sh
screen
```

then

```sh
npm start
```

We can now close our terminal. To get our running terminal once we open it again use

```sh
screen -r
```
