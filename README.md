# Wallpaper Engine
This is the start of a project I have wanted to do for a while now. 

## How to use
First, you need to install the dependencies.
Simply run this command in the project directory:
`npm install wallpaper`

I also highly recommend installing pm2 for this.
`npm install pm2`

Assuming you are on Linux/Mac OS, simply typing
`pm2 start index.js`
should start the application (through restarts) until you type pm2 stop (pid)

On Windows, it is the same but you may have to do some additional work to enable it through restarts.

## Todo
Currently, the project is severly limited. 

Here are some things I would like to add:
- A simple electron application to interface/start the app
- A more configurable, cron-style system for specifying when to change wallpaper (every day at 5pm for example)
